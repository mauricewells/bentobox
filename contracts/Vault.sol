// SPDX-License-Identifier: UNLICENSED
// solium-disable security/no-inline-assembly
// solium-disable security/no-low-level-calls
pragma solidity ^0.6.12;
import "./libraries/BoringMath.sol";
import "./libraries/Ownable.sol";

// Used in the deploy function
interface IPair {
    function init(address vault_, address tokenA_, address tokenB_, address oracle_) external;
}

interface IFlashLoaner {
    function executeOperation(address token, uint256 amount, uint256 fee, bytes calldata params) external;
}

// The "core" of BentoBox. 
// This contract stores the funds, handles their transfers. Also takes care of fees, deploying Pairs and flash loans.
contract Vault is Ownable {
    using BoringMath for uint256;

    event PairContractSet(address indexed pairContract, bool enabled);
    event SwapperSet(address swapper, bool enabled);
    event PairCreated(address indexed pairContract, address indexed tokenA, address indexed tokenB, address oracle, address clone_address);
    event FlashLoan(address indexed user, address indexed token, uint256 amount, uint256 fee);

    mapping(address => bool) public pairContracts; // Map of enabled and disabled Pairs.
    mapping(address => bool) public swappers; // Map of enabled and disabled Swappers.
    mapping(address => bool) public isPair; // Map of clones of Pairs.
    mapping(address => uint256) public feesPending; // Map of pending fees for a specific token
    address public feeTo;
    address public dev = 0x9e6e344f94305d36eA59912b0911fE2c9149Ed3E;

    // Disables / enables a given Pair. If the Pair doesn't exist yet, it gets added to the map.
    // When a Pair is disabled, it cannot be deployed. However, this doesn't affect already deployed clones.
    function setPairContract(address pairContract, bool enabled) public onlyOwner() {
        pairContracts[pairContract] = enabled;
        emit PairContractSet(pairContract, enabled);
    }

    // Disables / enables a given Swapper. If the Swapper doesn't exist yet, it gets added to the map.
    function setSwapper(address swapper, bool enabled) public onlyOwner() {
        swappers[swapper] = enabled;
        emit SwapperSet(swapper, enabled);
    }

    // Changes the fee address
    function setFeeTo(address newFeeTo) public onlyOwner {
        feeTo = newFeeTo;
    }

    // Changes the devfee address
    function setDev(address newDev) public {
        require(msg.sender == dev, 'BentoBox: Not dev');
        dev = newDev;
    }

    // Deploys a given Pair as a clone with a specific oracle.
    function deploy(address pairContract, address tokenA, address tokenB, address oracle, bytes calldata oracleData) public {
        require(pairContracts[pairContract], 'BentoBox: Pair Contract not whitelisted');
        // Takes the first 20 bytes of the PairContract's address
        bytes20 targetBytes = bytes20(pairContract);
        // Address where the clone contract will reside.
        address clone_address;

        assembly {
            // Loads the clone variable with the data at 0x40, which contains a pointer which points to the end of the currently allocated memory.
            let clone := mload(0x40)
            // Calculates the clone's creation data according to EIP-1167. For explanation, check out this writeup: https://blog.openzeppelin.com/deep-dive-into-the-minimal-proxy-contract/.
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(clone, 0x14), targetBytes)
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            // Creates the clone contract with the data of the clone variable, sets clone_address to the contracts address
            clone_address := create(0, clone, 0x37)
        }

        (bool success,) = oracle.call(abi.encodePacked(oracleData, abi.encode(clone_address)));
        require(success, 'BentoBox Vault: oracle init failed.');

        IPair(clone_address).init(address(this), tokenA, tokenB, oracle);
        isPair[clone_address] = true;

        emit PairCreated(pairContract, tokenA, tokenB, oracle, clone_address);
    }

    // Transfers funds from the vault to the user. Can only be called by Pair contracts.
    function transfer(address token, address to, uint256 amount) public {
        require(isPair[msg.sender], "BentoBox: Only pair contracts can transfer");

        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0xa9059cbb, to, amount));
        require(success && (data.length == 0 || abi.decode(data, (bool))), "BentoBox: Transfer failed at ERC20");
    }

    // Transfers funds from the user to the vault. Can only be called by Pair contracts.
    function transferFrom(address token, address from, uint256 amount) public {
        require(isPair[msg.sender], "BentoBox: Only pair contracts can transferFrom");

        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x23b872dd, from, address(this), amount));
        require(success && (data.length == 0 || abi.decode(data, (bool))), "BentoBox: TransferFrom failed at ERC20");
    }

    // Handles flash loans
    function flashLoan(address user, address token, uint256 amount, bytes calldata params) public {
        transfer(token, user, amount);

        // Calculates the fee - 0.08% of the amount.
        uint256 fee = amount.mul(8).div(10000);

        IFlashLoaner(user).executeOperation(token, amount, fee, params);

        transferFrom(token, user, amount.add(fee));
        feesPending[token] = feesPending[token].add(fee);
        emit FlashLoan(user, token, amount, fee);
    }

    // Handles the withdrawal of fees
    function withdrawFees(address token) public {
        uint256 fees = feesPending[token].sub(1);
        uint256 devFee = fees.div(10); // 10% devfee
        feesPending[token] = 1;  // Don't set it to 0 as that would increase the gas cost for the next accrue called by a user.
        transfer(token, feeTo, fees.sub(devFee));
        transfer(token, dev, devFee);
    }
}

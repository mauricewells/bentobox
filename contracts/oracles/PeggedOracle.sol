// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.6.12;
import "../libraries/BoringMath.sol";
import "../libraries/Ownable.sol";
import "../interfaces/IOracle.sol";

contract PeggedOracle is IOracle {
    using BoringMath for uint256;

    function getDataParameter(uint256 rate) public pure returns (bytes memory) { return abi.encode(rate); }

    // Get the exchange rate
    function get(bytes calldata data) public override returns (bool, uint256) {
        uint256 rate = abi.decode(data, (uint256));
        return (rate != 0, rate);
    }

    // Check the exchange rate without any state changes
    function peek(bytes calldata data) public override view returns (bool, uint256) {
        uint256 rate = abi.decode(data, (uint256));
        return (rate != 0, rate);
    }
}
// Using the same Copyleft License as in the original Repository
// SPDX-License-Identifier: AGPL-3.0-only
// solium-disable security/no-block-members

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;
import "../interfaces/IOracle.sol";
import "../libraries/BoringMath.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/lib/contracts/libraries/FixedPoint.sol";

// adapted from https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol

contract SimpleSLPOracle is IOracle {
    using FixedPoint for *;
    using BoringMath for uint256;
    uint256 public constant PERIOD = 1 minutes;

    struct PairInfo {
        uint256 priceCumulativeLast;
        uint32 blockTimestampLast;
        FixedPoint.uq112x112 priceAverage;
    }

    mapping(IUniswapV2Pair => PairInfo) public pairs; // Map of pairs and their info
    mapping(address => IUniswapV2Pair) public callerInfo; // Map of callers to pairs

    function _get(IUniswapV2Pair pair) public view returns (uint256, uint32, FixedPoint.uq112x112 memory) {
        PairInfo storage info = pairs[pair];
        uint32 blockTimestamp = uint32(block.timestamp % 2 ** 32);
        uint32 timeElapsed = blockTimestamp - info.blockTimestampLast; // overflow is desired
        require(timeElapsed >= PERIOD, 'SimpleSLPOracle: PERIOD_NOT_ELAPSED');

        uint256 priceCumulative = pair.price0CumulativeLast();

        // if time has elapsed since the last update on the pair, mock the accumulated price values
        (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) = IUniswapV2Pair(pair).getReserves();
        if (blockTimestampLast != blockTimestamp) {
            priceCumulative += uint(FixedPoint.fraction(reserve1, reserve0)._x) * (blockTimestamp - blockTimestampLast); // overflows are desired
        }

        // overflow is desired, casting never truncates
        // cumulative price is in (uq112x112 price * seconds) units so we simply wrap it after division by time elapsed
        return (
            priceCumulative,
            blockTimestamp,
            FixedPoint.uq112x112(uint224((priceCumulative - info.priceCumulativeLast) / timeElapsed))
        );
    }

    // Get the latest exchange rate, if no valid (recent) rate is available, return false
    function get(bytes calldata data) external override returns (bool, uint256) {
        IUniswapV2Pair pair = abi.decode(data, (IUniswapV2Pair));

        PairInfo storage info = pairs[pair];
        (info.priceCumulativeLast, info.blockTimestampLast, info.priceAverage) = _get(pair);

        return (true, info.priceAverage.mul(10**18).decode144());
    }

    // Check the last exchange rate without any state changes
    function peek(bytes calldata data) public override view returns (bool, uint256) {
        IUniswapV2Pair pair = abi.decode(data, (IUniswapV2Pair));
        (,, FixedPoint.uq112x112 memory priceAverage) = _get(pair);
        return (true, priceAverage.mul(10**18).decode144());
    }
}

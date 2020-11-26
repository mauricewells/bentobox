// Using the same Copyleft License as in the original Repository
// SPDX-License-Identifier: AGPL-3.0-only
// solium-disable security/no-block-members

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;
import "../interfaces/IOracle.sol";
import "../libraries/BoringMath.sol";
import "../external/interfaces/IUniswapV2Factory.sol";
import "../external/interfaces/IUniswapV2Pair.sol";
import "../libraries/FixedPoint.sol";

// adapted from https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol

contract SimpleSLPTWAP1Oracle is IOracle {
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

    function normalizeRate(uint256 rate, uint256 decimalDifference, bool negative) internal pure returns (uint256){
      if(negative) {
        return rate.mul(10**decimalDifference);
      }
      return rate / 10**decimalDifference;
    }

    function _get(IUniswapV2Pair pair, uint32 blockTimestamp) public view returns (uint256) {
        uint256 priceCumulative = pair.price1CumulativeLast();

        // if time has elapsed since the last update on the pair, mock the accumulated price values
        (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) = IUniswapV2Pair(pair).getReserves();
        if (blockTimestampLast != blockTimestamp) {
            priceCumulative += uint(FixedPoint.fraction(reserve0, reserve1)._x) * (blockTimestamp - blockTimestampLast); // overflows are desired
        }

        // overflow is desired, casting never truncates
        // cumulative price is in (uq112x112 price * seconds) units so we simply wrap it after division by time elapsed
        return priceCumulative;
    }

    function getDataParameter(IUniswapV2Pair pair, uint256 decimalDifference, bool negative) public pure returns (bytes memory) { return abi.encode(pair, decimalDifference, negative); }

    // Get the latest exchange rate, if no valid (recent) rate is available, return false
    function get(bytes calldata data) external override returns (bool, uint256) {
        (IUniswapV2Pair pair, uint256 decimalDifference, bool negative) = abi.decode(data, (IUniswapV2Pair, uint256, bool));
        uint32 blockTimestamp = uint32(block.timestamp % 2 ** 32);
        if (pairs[pair].blockTimestampLast == 0) {
            pairs[pair].blockTimestampLast = blockTimestamp;
            pairs[pair].priceCumulativeLast = _get(pair, blockTimestamp);

            return (false, 0);
        }
        uint32 timeElapsed = blockTimestamp - pairs[pair].blockTimestampLast; // overflow is desired
        if (timeElapsed < PERIOD) {
            return (true, normalizeRate(pairs[pair].priceAverage.mul(10**18).decode144(), decimalDifference, negative));
        }

        uint256 priceCumulative = _get(pair, blockTimestamp);
        pairs[pair].priceAverage = FixedPoint.uq112x112(uint224((priceCumulative - pairs[pair].priceCumulativeLast) / timeElapsed));
        pairs[pair].blockTimestampLast = blockTimestamp;
        pairs[pair].priceCumulativeLast = priceCumulative;

        return (true, normalizeRate(pairs[pair].priceAverage.mul(10**18).decode144(), decimalDifference, negative));
    }

    // Check the last exchange rate without any state changes
    function peek(bytes calldata data) public override view returns (bool, uint256) {
        (IUniswapV2Pair pair, uint256 decimalDifference, bool negative) = abi.decode(data, (IUniswapV2Pair, uint256, bool));
        uint32 blockTimestamp = uint32(block.timestamp % 2 ** 32);
        if (pairs[pair].blockTimestampLast == 0) {
            return (false, 0);
        }
        uint32 timeElapsed = blockTimestamp - pairs[pair].blockTimestampLast; // overflow is desired
        if (timeElapsed < PERIOD) {
            return (true, normalizeRate(pairs[pair].priceAverage.mul(10**18).decode144(), decimalDifference, negative));
        }

        uint256 priceCumulative = _get(pair, blockTimestamp);
        FixedPoint.uq112x112 memory priceAverage = FixedPoint
            .uq112x112(uint224((priceCumulative - pairs[pair].priceCumulativeLast) / timeElapsed));

        return (true, normalizeRate(priceAverage.mul(10**18).decode144(), decimalDifference, negative));
    }
}

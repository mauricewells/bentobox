/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SimpleSLPTWAP1OracleInterface extends ethers.utils.Interface {
  functions: {
    "PERIOD()": FunctionFragment;
    "_get(address,uint32)": FunctionFragment;
    "callerInfo(address)": FunctionFragment;
    "get(bytes)": FunctionFragment;
    "getDataParameter(address)": FunctionFragment;
    "name(bytes)": FunctionFragment;
    "pairs(address)": FunctionFragment;
    "peek(bytes)": FunctionFragment;
    "symbol(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_get",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "callerInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "get", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getDataParameter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "pairs", values: [string]): string;
  encodeFunctionData(functionFragment: "peek", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "symbol", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "callerInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDataParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

  events: {};
}

export class SimpleSLPTWAP1Oracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: SimpleSLPTWAP1OracleInterface;

  functions: {
    PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "PERIOD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    _get(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "_get(address,uint32)"(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    callerInfo(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "callerInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    get(data: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

    "get(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getDataParameter(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getDataParameter(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "name(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pairs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, [BigNumber] & { _x: BigNumber }] & {
        priceCumulativeLast: BigNumber;
        blockTimestampLast: number;
        priceAverage: [BigNumber] & { _x: BigNumber };
      }
    >;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, [BigNumber] & { _x: BigNumber }] & {
        priceCumulativeLast: BigNumber;
        blockTimestampLast: number;
        priceAverage: [BigNumber] & { _x: BigNumber };
      }
    >;

    peek(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    "peek(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  "PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

  _get(
    pair: string,
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "_get(address,uint32)"(
    pair: string,
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callerInfo(arg0: string, overrides?: CallOverrides): Promise<string>;

  "callerInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  get(data: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  "get(bytes)"(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getDataParameter(pair: string, overrides?: CallOverrides): Promise<string>;

  "getDataParameter(address)"(
    pair: string,
    overrides?: CallOverrides
  ): Promise<string>;

  name(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "name(bytes)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  pairs(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, [BigNumber] & { _x: BigNumber }] & {
      priceCumulativeLast: BigNumber;
      blockTimestampLast: number;
      priceAverage: [BigNumber] & { _x: BigNumber };
    }
  >;

  "pairs(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, [BigNumber] & { _x: BigNumber }] & {
      priceCumulativeLast: BigNumber;
      blockTimestampLast: number;
      priceAverage: [BigNumber] & { _x: BigNumber };
    }
  >;

  peek(
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  "peek(bytes)"(
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "symbol(bytes)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    _get(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_get(address,uint32)"(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callerInfo(arg0: string, overrides?: CallOverrides): Promise<string>;

    "callerInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    get(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    "get(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getDataParameter(pair: string, overrides?: CallOverrides): Promise<string>;

    "getDataParameter(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<string>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "name(bytes)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    pairs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, [BigNumber] & { _x: BigNumber }] & {
        priceCumulativeLast: BigNumber;
        blockTimestampLast: number;
        priceAverage: [BigNumber] & { _x: BigNumber };
      }
    >;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, [BigNumber] & { _x: BigNumber }] & {
        priceCumulativeLast: BigNumber;
        blockTimestampLast: number;
        priceAverage: [BigNumber] & { _x: BigNumber };
      }
    >;

    peek(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    "peek(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    _get(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_get(address,uint32)"(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callerInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callerInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get(data: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "get(bytes)"(data: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    getDataParameter(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDataParameter(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "name(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    peek(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "peek(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PERIOD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _get(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_get(address,uint32)"(
      pair: string,
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callerInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callerInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(data: BytesLike, overrides?: Overrides): Promise<PopulatedTransaction>;

    "get(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getDataParameter(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDataParameter(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "name(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peek(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "peek(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

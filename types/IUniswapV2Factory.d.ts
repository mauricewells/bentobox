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

interface IUniswapV2FactoryInterface extends ethers.utils.Interface {
  functions: {
    "allPairs(uint256)": FunctionFragment;
    "allPairsLength()": FunctionFragment;
    "createPair(address,address)": FunctionFragment;
    "feeTo()": FunctionFragment;
    "feeToSetter()": FunctionFragment;
    "getPair(address,address)": FunctionFragment;
    "migrator()": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setFeeToSetter(address)": FunctionFragment;
    "setMigrator(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allPairsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeToSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "migrator", values?: undefined): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setFeeToSetter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setMigrator", values: [string]): string;

  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allPairsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMigrator",
    data: BytesLike
  ): Result;

  events: {
    "PairCreated(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}

export class IUniswapV2Factory extends Contract {
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

  interface: IUniswapV2FactoryInterface;

  functions: {
    allPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allPairsLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    "feeTo()"(overrides?: CallOverrides): Promise<[string]>;

    feeToSetter(overrides?: CallOverrides): Promise<[string]>;

    "feeToSetter()"(overrides?: CallOverrides): Promise<[string]>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    migrator(overrides?: CallOverrides): Promise<[string]>;

    "migrator()"(overrides?: CallOverrides): Promise<[string]>;

    setFeeTo(arg0: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setFeeTo(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFeeToSetter(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeToSetter(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMigrator(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMigrator(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allPairs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allPairsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  createPair(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createPair(address,address)"(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  "feeTo()"(overrides?: CallOverrides): Promise<string>;

  feeToSetter(overrides?: CallOverrides): Promise<string>;

  "feeToSetter()"(overrides?: CallOverrides): Promise<string>;

  getPair(
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPair(address,address)"(
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  migrator(overrides?: CallOverrides): Promise<string>;

  "migrator()"(overrides?: CallOverrides): Promise<string>;

  setFeeTo(arg0: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setFeeTo(address)"(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFeeToSetter(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeToSetter(address)"(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMigrator(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMigrator(address)"(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allPairsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    "feeTo()"(overrides?: CallOverrides): Promise<string>;

    feeToSetter(overrides?: CallOverrides): Promise<string>;

    "feeToSetter()"(overrides?: CallOverrides): Promise<string>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    migrator(overrides?: CallOverrides): Promise<string>;

    "migrator()"(overrides?: CallOverrides): Promise<string>;

    setFeeTo(arg0: string, overrides?: CallOverrides): Promise<void>;

    "setFeeTo(address)"(arg0: string, overrides?: CallOverrides): Promise<void>;

    setFeeToSetter(arg0: string, overrides?: CallOverrides): Promise<void>;

    "setFeeToSetter(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMigrator(arg0: string, overrides?: CallOverrides): Promise<void>;

    "setMigrator(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PairCreated(
      token0: string | null,
      token1: string | null,
      pair: null,
      undefined: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { token0: string; token1: string; pair: string; arg3: BigNumber }
    >;
  };

  estimateGas: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allPairsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    "feeTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;

    "feeToSetter()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrator(overrides?: CallOverrides): Promise<BigNumber>;

    "migrator()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeTo(arg0: string, overrides?: Overrides): Promise<BigNumber>;

    "setFeeTo(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFeeToSetter(arg0: string, overrides?: Overrides): Promise<BigNumber>;

    "setFeeToSetter(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMigrator(arg0: string, overrides?: Overrides): Promise<BigNumber>;

    "setMigrator(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "allPairsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeTo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeToSetter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "migrator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeTo(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeTo(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFeeToSetter(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeToSetter(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMigrator(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMigrator(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

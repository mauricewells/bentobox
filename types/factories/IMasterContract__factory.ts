/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMasterContract } from "../IMasterContract";

export class IMasterContract__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMasterContract {
    return new Contract(address, _abi, signerOrProvider) as IMasterContract;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

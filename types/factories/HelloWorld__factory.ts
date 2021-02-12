/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { HelloWorld } from "../HelloWorld";

export class HelloWorld__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _bentoBox: string,
    _token: string,
    overrides?: Overrides
  ): Promise<HelloWorld> {
    return super.deploy(
      _bentoBox,
      _token,
      overrides || {}
    ) as Promise<HelloWorld>;
  }
  getDeployTransaction(
    _bentoBox: string,
    _token: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bentoBox, _token, overrides || {});
  }
  attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract BentoBox",
        name: "_bentoBox",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bentoBox",
    outputs: [
      {
        internalType: "contract BentoBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bentoBoxShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104d23803806104d28339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b038085166001600160a01b031992831617808455600180548387169416939093179092556040805163577268d960e11b81529051929091169263aee4d1b29260048084019382900301818387803b1580156100a157600080fd5b505af11580156100b5573d6000803e3d6000fd5b505050505050610408806100ca6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063b6b55f2511610050578063b6b55f25146100cc578063faff58fd146100e9578063fc0c546a1461011c57610072565b80633ccfd60b146100775780636b2ace8714610081578063b69ef8a8146100b2575b600080fd5b61007f610124565b005b6100896101f2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100ba61020e565b60408051918252519081900360200190f35b61007f600480360360208110156100e257600080fd5b50356102cf565b6100ba600480360360208110156100ff57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166103a4565b6100896103b6565b6000805460015433808452600260205260408085205481517f97da6d3000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201523060248201526044810193909352606483018690526084830152805192909316936397da6d309360a48084019491939192918390030190829087803b1580156101c457600080fd5b505af11580156101d8573d6000803e3d6000fd5b505050506040513d60408110156101ee57600080fd5b5050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080546001543383526002602090815260408085205481517f5662311800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201526024810191909152604481018690529051929093169263566231189260648083019392829003018186803b15801561029e57600080fd5b505afa1580156102b2573d6000803e3d6000fd5b505050506040513d60208110156102c857600080fd5b5051905090565b60008054600154604080517f02b9446c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff92831660048201523360248201523060448201526064810186905260848101859052815192909316936302b9446c9360a48082019492918390030190829087803b15801561035f57600080fd5b505af1158015610373573d6000803e3d6000fd5b505050506040513d604081101561038957600080fd5b50602090810151336000908152600290925260409091205550565b60026020526000908152604090205481565b60015473ffffffffffffffffffffffffffffffffffffffff168156fea26469706673582212200f6d547fab86dd203ea97a62e529b108c24cb3fff5ee34b7ad971541aa25c6b064736f6c634300060c0033";

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SushiStrategy } from "../SushiStrategy";

export class SushiStrategy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bar_: string,
    sushi_: string,
    overrides?: Overrides
  ): Promise<SushiStrategy> {
    return super.deploy(
      bar_,
      sushi_,
      overrides || {}
    ) as Promise<SushiStrategy>;
  }
  getDeployTransaction(
    bar_: string,
    sushi_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bar_, sushi_, overrides || {});
  }
  attach(address: string): SushiStrategy {
    return super.attach(address) as SushiStrategy;
  }
  connect(signer: Signer): SushiStrategy__factory {
    return super.connect(signer) as SushiStrategy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiStrategy {
    return new Contract(address, _abi, signerOrProvider) as SushiStrategy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISushiBar",
        name: "bar_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "sushi_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [
      {
        internalType: "int256",
        name: "amountAdded",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "harvest",
    outputs: [
      {
        internalType: "int256",
        name: "amountAdded",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "actualAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516116a03803806116a08339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160601b0319606092831b811660a052911b1660805260805160601c60a05160601c61158461011c60003980610435528061052c52806105dc52806106aa52806108cb52806109995280610a5b5280610b1c5280610e095280610eef5280610fdc52806110d752508061060c5280610777528061080c52806109c95280610be95280610c7e5280610dcd528061113b528061121252506115846000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636939aaf51161005b5780636939aaf5146101425780637f8661a11461015f5780638da5cb5b1461017c578063e30c3978146101ad57610088565b8063078dfbe71461008d57806318fccc76146100d25780632e1a7d4d1461011d5780634e71e0c81461013a575b600080fd5b6100d0600480360360608110156100a357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101351515906040013515156101b5565b005b61010b600480360360408110156100e857600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166103aa565b60408051918252519081900360200190f35b61010b6004803603602081101561013357600080fd5b5035610840565b6100d0610cb0565b6100d06004803603602081101561015857600080fd5b5035610dcb565b61010b6004803603602081101561017557600080fd5b5035610f51565b610184611242565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61018461125e565b60005473ffffffffffffffffffffffffffffffffffffffff16331461023b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b81156103645773ffffffffffffffffffffffffffffffffffffffff83161515806102625750805b6102cd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f20616464726573730000000000000000000000604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556001805490911690556103a5565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790555b505050565b6000805473ffffffffffffffffffffffffffffffffffffffff16331461043157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156104ba57600080fd5b505afa1580156104ce573d6000803e3d6000fd5b505050506040513d60208110156104e457600080fd5b5051604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905191925060009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916318160ddd916004808301926020929190829003018186803b15801561057257600080fd5b505afa158015610586573d6000803e3d6000fd5b505050506040513d602081101561059c57600080fd5b5051604080517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600483015291519293506000927f0000000000000000000000000000000000000000000000000000000000000000909216916370a0823191602480820192602092909190829003018186803b15801561065557600080fd5b505afa158015610669573d6000803e3d6000fd5b505050506040513d602081101561067f57600080fd5b50519050600081610690888561127a565b8161069757fe5b04905060006106a68583611306565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166367dfd4c9826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561071b57600080fd5b505af115801561072f573d6000803e3d6000fd5b5050604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001693506370a0823192506024808301926020929190829003018186803b1580156107bf57600080fd5b505afa1580156107d3573d6000803e3d6000fd5b505050506040513d60208110156107e957600080fd5b50516000549096506108359073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911688611378565b505050505092915050565b6000805473ffffffffffffffffffffffffffffffffffffffff1633146108c757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561092f57600080fd5b505afa158015610943573d6000803e3d6000fd5b505050506040513d602081101561095957600080fd5b5051604080517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600483015291519293506000927f0000000000000000000000000000000000000000000000000000000000000000909216916370a0823191602480820192602092909190829003018186803b158015610a1257600080fd5b505afa158015610a26573d6000803e3d6000fd5b505050506040513d6020811015610a3c57600080fd5b50519050600081610a4d868561127a565b81610a5457fe5b04905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ae057600080fd5b505afa158015610af4573d6000803e3d6000fd5b505050506040513d6020811015610b0a57600080fd5b5051905080821115610b1a578091505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166367dfd4c9836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610b8d57600080fd5b505af1158015610ba1573d6000803e3d6000fd5b5050604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001693506370a0823192506024808301926020929190829003018186803b158015610c3157600080fd5b505afa158015610c45573d6000803e3d6000fd5b505050506040513d6020811015610c5b57600080fd5b5051600054909550610ca79073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911687611378565b50505050919050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610d3757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e7c57600080fd5b505af1158015610e90573d6000803e3d6000fd5b505050506040513d6020811015610ea657600080fd5b5050604080517fa59f3e0c00000000000000000000000000000000000000000000000000000000815260048101839052905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a59f3e0c91602480830192600092919082900301818387803b158015610f3657600080fd5b505af1158015610f4a573d6000803e3d6000fd5b5050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff163314610fd857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561106157600080fd5b505afa158015611075573d6000803e3d6000fd5b505050506040513d602081101561108b57600080fd5b5051604080517f67dfd4c900000000000000000000000000000000000000000000000000000000815260048101839052905191925073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916367dfd4c99160248082019260009290919082900301818387803b15801561111f57600080fd5b505af1158015611133573d6000803e3d6000fd5b5050505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156111c057600080fd5b505afa1580156111d4573d6000803e3d6000fd5b505050506040513d60208110156111ea57600080fd5b5051600054858203945090915061123b9073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911683611378565b5050919050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60008115806112955750508082028282828161129257fe5b04145b61130057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fd5b92915050565b8082038281111561130057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f426f72696e674d6174683a20556e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b6020831061144e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611411565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146114b0576040519150601f19603f3d011682016040523d82523d6000602084013e6114b5565b606091505b50915091508180156114e35750805115806114e357508080602001905160208110156114e057600080fd5b50515b610f4a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fdfea2646970667358221220a05b1b6747ce2c8586fa3682ddd51a6b1789e4f822c439a62db839e9317a495564736f6c634300060c0033";

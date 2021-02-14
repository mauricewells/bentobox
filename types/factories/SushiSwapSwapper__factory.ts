/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SushiSwapSwapper } from "../SushiSwapSwapper";

export class SushiSwapSwapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bentoBox_: string,
    factory_: string,
    overrides?: Overrides
  ): Promise<SushiSwapSwapper> {
    return super.deploy(
      bentoBox_,
      factory_,
      overrides || {}
    ) as Promise<SushiSwapSwapper>;
  }
  getDeployTransaction(
    bentoBox_: string,
    factory_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bentoBox_, factory_, overrides || {});
  }
  attach(address: string): SushiSwapSwapper {
    return super.attach(address) as SushiSwapSwapper;
  }
  connect(signer: Signer): SushiSwapSwapper__factory {
    return super.connect(signer) as SushiSwapSwapper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiSwapSwapper {
    return new Contract(address, _abi, signerOrProvider) as SushiSwapSwapper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract BentoBox",
        name: "bentoBox_",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Factory",
        name: "factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
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
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountToMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareFrom",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "extraAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareTo",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "refundTo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shareFromSupplied",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareToExact",
        type: "uint256",
      },
    ],
    name: "swapExact",
    outputs: [
      {
        internalType: "uint256",
        name: "shareUsed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareReturned",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610f97380380610f978339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b03199182161790915560018054939092169216919091179055610f1d8061007a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634622be90146100515780636b2ace87146100b6578063c45a0155146100da578063e343fe12146100e2575b600080fd5b61009d600480360360c081101561006757600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359091169060808101359060a00135610124565b6040805192835260208301919091528051918290030190f35b6100be6107d4565b604080516001600160a01b039092168252519081900360200190f35b6100be6107e3565b61009d600480360360a08110156100f857600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013590608001356107f2565b6001546040805163e6a4390560e01b81526001600160a01b038981166004830152888116602483015291516000938493849391169163e6a4390591604480820192602092909190829003018186803b15801561017f57600080fd5b505afa158015610193573d6000803e3d6000fd5b505050506040513d60208110156101a957600080fd5b505160408051630240bc6b60e21b8152905191925060009182916001600160a01b03851691630902f1ac91600480820192606092909190829003018186803b1580156101f457600080fd5b505afa158015610208573d6000803e3d6000fd5b505050506040513d606081101561021e57600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506001600160701b031691506001600160701b0316915060008060009054906101000a90046001600160a01b03166001600160a01b031663566231188c8960016040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018215158152602001935050505060206040518083038186803b1580156102d057600080fd5b505afa1580156102e4573d6000803e3d6000fd5b505050506040513d60208110156102fa57600080fd5b8101908080519060200190929190505050905060008c6001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561035257600080fd5b505afa158015610366573d6000803e3d6000fd5b505050506040513d602081101561037c57600080fd5b50516001600160a01b031614156104e557610398828585610d31565b905060008054906101000a90046001600160a01b03166001600160a01b03166397da6d308e30888560006040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001846001600160a01b03168152602001838152602001828152602001955050505050506040805180830381600087803b15801561042e57600080fd5b505af1158015610442573d6000803e3d6000fd5b505050506040513d604081101561045857600080fd5b5060200151600080546040805163022c0d9f60e01b815260048101849052602481018790526001600160a01b03928316604482015260806064820152608481018490529051939a509088169263022c0d9f9260c48084019391929182900301818387803b1580156104c857600080fd5b505af11580156104dc573d6000803e3d6000fd5b50505050610639565b6104f0828486610d31565b905060008054906101000a90046001600160a01b03166001600160a01b03166397da6d308e30888560006040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001846001600160a01b03168152602001838152602001828152602001955050505050506040805180830381600087803b15801561058657600080fd5b505af115801561059a573d6000803e3d6000fd5b505050506040513d60408110156105b057600080fd5b5060200151600080546040805163022c0d9f60e01b815260048101879052602481018490526001600160a01b03928316604482015260806064820152608481018490529051939a509088169263022c0d9f9260c48084019391929182900301818387803b15801561062057600080fd5b505af1158015610634573d6000803e3d6000fd5b505050505b60008054906101000a90046001600160a01b03166001600160a01b03166302b9446c8d60008054906101000a90046001600160a01b03168e60008d6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001846001600160a01b03168152602001838152602001828152602001955050505050506040805180830381600087803b1580156106e057600080fd5b505af11580156106f4573d6000803e3d6000fd5b505050506040513d604081101561070a57600080fd5b5061071790508988610d7f565b955085156107c45760008054906101000a90046001600160a01b03166001600160a01b031663f18d03cc8e308d8a6040518563ffffffff1660e01b815260040180856001600160a01b03168152602001846001600160a01b03168152602001836001600160a01b03168152602001828152602001945050505050600060405180830381600087803b1580156107ab57600080fd5b505af11580156107bf573d6000803e3d6000fd5b505050505b5050505050965096945050505050565b6000546001600160a01b031681565b6001546001600160a01b031681565b6001546040805163e6a4390560e01b81526001600160a01b038881166004830152878116602483015291516000938493849391169163e6a4390591604480820192602092909190829003018186803b15801561084d57600080fd5b505afa158015610861573d6000803e3d6000fd5b505050506040513d602081101561087757600080fd5b5051600080546040805163097da6d360e41b81526001600160a01b038d81166004830152306024830152808616604483015260648201859052608482018a90528251959650939493909216926397da6d309260a480820193929182900301818787803b1580156108e657600080fd5b505af11580156108fa573d6000803e3d6000fd5b505050506040513d604081101561091057600080fd5b505160408051630240bc6b60e21b8152905191925060009182916001600160a01b03861691630902f1ac91600480820192606092909190829003018186803b15801561095b57600080fd5b505afa15801561096f573d6000803e3d6000fd5b505050506040513d606081101561098557600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506001600160701b031691506001600160701b0316915060008b6001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610a0657600080fd5b505afa158015610a1a573d6000803e3d6000fd5b505050506040513d6020811015610a3057600080fd5b50516001600160a01b03161415610b4057610a4c848484610dd5565b6000805460408051838152602081019182905263022c0d9f60e01b825260248101848152604482018690526001600160a01b0393841660648301819052608060848401908152835160a48501819052979850948c169663022c0d9f9695899592949392909160c4850191908083838b5b83811015610ad4578181015183820152602001610abc565b50505050905090810190601f168015610b015780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610b2357600080fd5b505af1158015610b37573d6000803e3d6000fd5b50505050610c3c565b610b4b848385610dd5565b6000805460408051838152602081019182905263022c0d9f60e01b825260248101858152604482018590526001600160a01b0393841660648301819052608060848401908152835160a48501819052979850948c169663022c0d9f968996909592949392909160c4850191908083838a5b83811015610bd4578181015183820152602001610bbc565b50505050905090810190601f168015610c015780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610c2357600080fd5b505af1158015610c37573d6000803e3d6000fd5b505050505b610c46818a610d7f565b965060008054906101000a90046001600160a01b03166001600160a01b03166302b9446c8c60008054906101000a90046001600160a01b03168d8560006040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001846001600160a01b03168152602001838152602001828152602001955050505050506040805180830381600087803b158015610cef57600080fd5b505af1158015610d03573d6000803e3d6000fd5b505050506040513d6040811015610d1957600080fd5b5060200151969c969b50959950505050505050505050565b600080610d4a6103e8610d448688610e23565b90610e23565b90506000610d5e6103e5610d448689610d7f565b9050610d756001828481610d6e57fe5b0490610e8f565b9695505050505050565b80820382811115610dcf576040805162461bcd60e51b8152602060048201526015602482015274426f72696e674d6174683a20556e646572666c6f7760581b604482015290519081900360640190fd5b92915050565b600080610de4856103e5610e23565b90506000610df28285610e23565b90506000610e0c83610e06886103e8610e23565b90610e8f565b9050808281610e1757fe5b04979650505050505050565b6000811580610e3e57505080820282828281610e3b57fe5b04145b610dcf576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fd5b81810181811015610dcf576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a20416464204f766572666c6f770000000000000000604482015290519081900360640190fdfea2646970667358221220a4e20a86a9731662f272992404485bdf143f1ad266ca2e3a2b4016815ee6081b64736f6c634300060c0033";

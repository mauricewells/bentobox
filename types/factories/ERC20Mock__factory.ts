/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20Mock } from "../ERC20Mock";

export class ERC20Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ERC20Mock> {
    return super.deploy(_initialAmount, overrides || {}) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    _initialAmount: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_initialAmount, overrides || {});
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
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
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610aaa380380610aaa8339818101604052602081101561003357600080fd5b5051336000908152602081905260409020819055600355610a51806100596000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806370a082311161006657806370a08231146101305780637ecebe0014610156578063a9059cbb1461017c578063d505accf146101a8578063dd62ed3e146101fb57610093565b8063095ea7b31461009857806318160ddd146100d857806323b872dd146100f25780633644e51514610128575b600080fd5b6100c4600480360360408110156100ae57600080fd5b506001600160a01b038135169060200135610229565b604080519115158252519081900360200190f35b6100e061028f565b60408051918252519081900360200190f35b6100c46004803603606081101561010857600080fd5b506001600160a01b03813581169160208101359091169060400135610295565b6100e061052b565b6100e06004803603602081101561014657600080fd5b50356001600160a01b0316610582565b6100e06004803603602081101561016c57600080fd5b50356001600160a01b0316610594565b6100c46004803603604081101561019257600080fd5b506001600160a01b0381351690602001356105a6565b6101f9600480360360e08110156101be57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561072f565b005b6100e06004803603604081101561021157600080fd5b506001600160a01b0381358116916020013516610a27565b3360008181526001602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60035481565b60006001600160a01b0383166102eb576040805162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b604482015290519081900360640190fd5b6001600160a01b038416600090815260208190526040902054821115610351576040805162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b604482015290519081900360640190fd5b6001600160a01b03841660009081526001602090815260408083203384529091529020548211156103c9576040805162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f770000000000000000604482015290519081900360640190fd5b6001600160a01b0383166000908152602081905260409020548281011015610433576040805162461bcd60e51b8152602060048201526018602482015277115490cc8c0e881bdd995c999b1bddc819195d1958dd195960421b604482015290519081900360640190fd5b6001600160a01b038416600090815260208181526040808320805486900390556001825280832033845290915290205460001981146104c9576001600160a01b0385166000908152600160209081526040808320338085529083529281902086850390558051868152905183927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35b6001600160a01b03808516600081815260208181526040918290208054880190558151878152915192938916927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3506001949350505050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602080830191909152468284015230606080840191909152835180840390910181526080909201909252805191012090565b60006020819052908152604090205481565b60026020526000908152604090205481565b60006001600160a01b0383166105fc576040805162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b604482015290519081900360640190fd5b33600090815260208190526040902054821115610659576040805162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b604482015290519081900360640190fd5b6001600160a01b03831660009081526020819052604090205482810110156106c3576040805162461bcd60e51b8152602060048201526018602482015277115490cc8c0e881bdd995c999b1bddc819195d1958dd195960421b604482015290519081900360640190fd5b33600081815260208181526040808320805487900390556001600160a01b03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b6001600160a01b03871661078a576040805162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b8342106107cf576040805162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b604482015290519081900360640190fd5b600060405180604001604052806002815260200161190160f01b8152506107f461052b565b6001600160a01b03808b1660008181526002602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519083012084519092610100909201918291908601908083835b602083106108b25780518252601f199092019160209182019101610893565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181528184018083528151918401919091206000918290526060850180845281905260ff8a16608086015260a0850189905260c085018890529151919550935060019260e08082019392601f1981019281900390910190855afa15801561094d573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146109bf576040805162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e61747572650000000000000000604482015290519081900360640190fd5b6001600160a01b03808a166000818152600160209081526040808320948d16808452948252918290208b905581518b815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050505050505050565b60016020908152600092835260408084209091529082529020548156fea164736f6c634300060c000a";

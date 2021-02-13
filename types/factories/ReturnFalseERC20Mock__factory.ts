/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ReturnFalseERC20Mock } from "../ReturnFalseERC20Mock";

export class ReturnFalseERC20Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    supply: BigNumberish,
    overrides?: Overrides
  ): Promise<ReturnFalseERC20Mock> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      supply,
      overrides || {}
    ) as Promise<ReturnFalseERC20Mock>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    supply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      supply,
      overrides || {}
    );
  }
  attach(address: string): ReturnFalseERC20Mock {
    return super.attach(address) as ReturnFalseERC20Mock;
  }
  connect(signer: Signer): ReturnFalseERC20Mock__factory {
    return super.connect(signer) as ReturnFalseERC20Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReturnFalseERC20Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReturnFalseERC20Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "supply",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "owner",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
  "0x60a06040523480156200001157600080fd5b5060405162000bf338038062000bf3833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040908152602082810151929091015186519294509250620001c19160019187019062000221565b508251620001d790600090602086019062000221565b5060f89190911b7fff000000000000000000000000000000000000000000000000000000000000001660805260028190553360009081526003602052604090205550620002bd9050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026457805160ff191683800117855562000294565b8280016001018555821562000294579182015b828111156200029457825182559160200191906001019062000277565b50620002a2929150620002a6565b5090565b5b80821115620002a25760008155600101620002a7565b60805160f81c610918620002db600039806104f052506109186000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101ec5780637ecebe001461021257806395d89b4114610238578063a9059cbb14610240578063d505accf1461026c578063dd62ed3e146102bf576100b4565b806306fdde03146100b9578063095ea7b31461013657806318160ddd1461017657806323b872dd14610190578063313ce567146101c65780633644e515146101e4575b600080fd5b6100c16102ed565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101626004803603604081101561014c57600080fd5b506001600160a01b03813516906020013561037a565b604080519115158252519081900360200190f35b61017e6103e1565b60408051918252519081900360200190f35b610162600480360360608110156101a657600080fd5b506001600160a01b038135811691602081013590911690604001356103e7565b6101ce6104ee565b6040805160ff9092168252519081900360200190f35b61017e610512565b61017e6004803603602081101561020257600080fd5b50356001600160a01b0316610569565b61017e6004803603602081101561022857600080fd5b50356001600160a01b031661057b565b6100c161058d565b6101626004803603604081101561025657600080fd5b506001600160a01b0381351690602001356105e8565b6102bd600480360360e081101561028257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561069b565b005b61017e600480360360408110156102d557600080fd5b506001600160a01b03813581169160200135166108ee565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60025481565b6001600160a01b038316600090815260036020526040812054821180159061043257506001600160a01b03841660009081526004602090815260408083203384529091529020548211155b801561045857506001600160a01b03831660009081526003602052604090205482810110155b156104e3576001600160a01b0380851660008181526003602081815260408084208054899003905560048252808420338552825280842080548990039055948816808452918152918490208054870190558351868152935190937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92908290030190a35060016104e7565b5060005b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602080830191909152468284015230606080840191909152835180840390910181526080909201909252805191012090565b60036020526000908152604090205481565b60056020526000908152604090205481565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103725780601f1061034757610100808354040283529160200191610372565b33600090815260036020526040812054821180159061062157506001600160a01b03831660009081526003602052604090205482810110155b1561069357336000818152600360209081526040808320805487900390556001600160a01b03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060016103db565b5060006103db565b8342106106ef576040805162461bcd60e51b815260206004820152601960248201527f52657475726e46616c736545524332303a204578706972656400000000000000604482015290519081900360640190fd5b60006106f9610512565b6001600160a01b03808a1660008181526005602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958e166060860152608085018d905260a085019590955260c08085018c90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff8a166101828501526101a284018990526101c284018890525194955090936101e280840193601f198301929081900390910190855afa158015610814573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614610886576040805162461bcd60e51b815260206004820152601d60248201527f52657475726e46616c736545524332303a20496e76616c696420536967000000604482015290519081900360640190fd5b6001600160a01b03808a166000818152600460209081526040808320948d16808452948252918290208b905581518b815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050505050505050565b60046020908152600092835260408084209091529082529020548156fea164736f6c634300060c000a";

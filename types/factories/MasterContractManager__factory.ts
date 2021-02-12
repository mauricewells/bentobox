/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MasterContractManager } from "../MasterContractManager";

export class MasterContractManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MasterContractManager> {
    return super.deploy(overrides || {}) as Promise<MasterContractManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MasterContractManager {
    return super.attach(address) as MasterContractManager;
  }
  connect(signer: Signer): MasterContractManager__factory {
    return super.connect(signer) as MasterContractManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterContractManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MasterContractManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "protocol",
        type: "address",
      },
    ],
    name: "LogRegisterProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "LogSetMasterContractApproval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "LogWhiteListMasterContract",
    type: "event",
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
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "payable",
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
    name: "masterContractApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "masterContractOf",
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
    inputs: [],
    name: "registerProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
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
    name: "setMasterContractApproval",
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
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "whitelistMasterContract",
    outputs: [],
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
    name: "whitelistedMasterContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3604080517f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86660208083019190915246606083015230608080840191909152828401819052600b60a08401526a2132b73a37a137bc102b1960a91b60c0808501919091528451808503909101815260e09093019093528151910120905260805161146f6100e660003980610fb5525061146f6000f3fe6080604052600436106100c75760003560e01c80638da5cb5b11610074578063bafe4f141161004e578063bafe4f141461034b578063c0a47c931461038b578063e30c3978146103f2576100c7565b80638da5cb5b146102b057806391e0eab5146102ee578063aee4d1b214610336576100c7565b80634e71e0c8116100a55780634e71e0c814610201578063733a9d7c146102165780637ecebe001461025e576100c7565b8063078dfbe7146100cc57806312a90c8a1461011e5780631f54245b14610172575b600080fd5b3480156100d857600080fd5b5061011c600480360360608110156100ef57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020810135151590604001351515610407565b005b34801561012a57600080fd5b5061015e6004803603602081101561014157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105fc565b604080519115158252519081900360200190f35b61011c6004803603606081101561018857600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156101c057600080fd5b8201836020820111156101d257600080fd5b803590602001918460018302840111640100000000831117156101f457600080fd5b9193509150351515610611565b34801561020d57600080fd5b5061011c610925565b34801561022257600080fd5b5061011c6004803603604081101561023957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610a40565b34801561026a57600080fd5b5061029e6004803603602081101561028157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610bd3565b60408051918252519081900360200190f35b3480156102bc57600080fd5b506102c5610be5565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156102fa57600080fd5b5061015e6004803603604081101561031157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c01565b34801561034257600080fd5b5061011c610c21565b34801561035757600080fd5b506102c56004803603602081101561036e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c80565b34801561039757600080fd5b5061011c600480360360c08110156103ae57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604081013515159060ff6060820135169060808101359060a00135610ca8565b3480156103fe57600080fd5b506102c56113e5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461048d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b81156105b65773ffffffffffffffffffffffffffffffffffffffff83161515806104b45750805b61051f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f20616464726573730000000000000000000000604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556001805490911690556105f7565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790555b505050565b60046020526000908152604090205460ff1681565b73ffffffffffffffffffffffffffffffffffffffff841661069357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f426f72696e67466163746f72793a204e6f206d6173746572436f6e7472616374604482015290519081900360640190fd5b606084901b60008215610723576000858560405180838380828437604051920182900382207f3d602d80600a3d3981f3363d3d373d3d3d363d730000000000000000000000008352601483018990527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288401529550909350849250603791508390506000f59250505061077f565b6040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150505b73ffffffffffffffffffffffffffffffffffffffff81811660008181526002602090815260409182902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948b1694909417909355517f4ddf47d400000000000000000000000000000000000000000000000000000000815260048101928352602481018790529091634ddf47d491349189918991908190604401848480828437600081840152601f19601f82011690508083019250505093505050506000604051808303818588803b15801561085857600080fd5b505af115801561086c573d6000803e3d6000fd5b50505050508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b878760405180806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039550909350505050a3505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146109ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ac657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b4857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4d6173746572434d67723a2043616e6e6f7420617070726f7665203000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815291517f31a1e0eac44b54ac6c2a2efa87e92c83405ffcf33fceef02a7bca695130e26009281900390910190a25050565b60056020526000908152604090205481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600360209081526000928352604080842090915290825290205460ff1681565b3360008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001684179055517fdfb44ffabf0d3a8f650d3ce43eff98f6d050e7ea1a396d5794f014e7dadabacb9190a2565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff8516610d2a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4d6173746572434d67723a206d617374657243206e6f74207365740000000000604482015290519081900360640190fd5b81158015610d36575080155b8015610d43575060ff8316155b15610ef95773ffffffffffffffffffffffffffffffffffffffff86163314610dcc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4d6173746572434d67723a2075736572206e6f742073656e6465720000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8681166000908152600260205260409020541615610e6057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4d6173746572434d67723a207573657220697320636c6f6e6500000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff851660009081526004602052604090205460ff16610ef457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4d6173746572434d67723a206e6f742077686974656c69737465640000000000604482015290519081900360640190fd5b611349565b73ffffffffffffffffffffffffffffffffffffffff8616610f7b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4d6173746572434d67723a20557365722063616e6e6f74206265203000000000604482015290519081900360640190fd5b60006040518060400160405280600281526020017f19010000000000000000000000000000000000000000000000000000000000008152507f00000000000000000000000000000000000000000000000000000000000000007f1962bc9f5484cb7a998701b81090e966ee1fce5771af884cceee7c081b14ade287611035576040518060400160405280601a81526020017f5265766f6b652061636365737320746f2042656e746f426f783f00000000000081525061104f565b604051806060016040528060388152602001611402603891395b8a8a8a600560008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505560405160200180878152602001806020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018415158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561112c578181015183820152602001611114565b50505050905090810190601f1680156111595780820380516001836020036101000a031916815260200191505b50975050505050505050604051602081830303815290604052805190602001206040516020018084805190602001908083835b602083106111c957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161118c565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052920194855250838101929092525060408051808403830181528184018083528151918401919091206000918290526060850180845281905260ff8a16608086015260a0850189905260c085018890529151919550935060019260e080820193927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa1580156112a0573d6000803e3d6000fd5b5050506020604051035190508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461134657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d6173746572434d67723a20496e76616c6964205369676e6174757265000000604482015290519081900360640190fd5b50505b73ffffffffffffffffffffffffffffffffffffffff8581166000818152600360209081526040808320948b168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016891515908117909155825190815291517f5f6ebb64ba012a851c6f014e6cad458ddf213d1512049b31cd06365c2b0592579281900390910190a3505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff168156fe476976652046554c4c2061636365737320746f2066756e647320696e2028616e6420617070726f76656420746f292042656e746f426f783fa26469706673582212202216c0222ba230b6c15f2b4c32071eef895008847f9a31761dd9cf4aad39168b64736f6c634300060c0033";

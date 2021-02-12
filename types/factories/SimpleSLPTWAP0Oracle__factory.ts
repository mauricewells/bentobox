/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SimpleSLPTWAP0Oracle } from "../SimpleSLPTWAP0Oracle";

export class SimpleSLPTWAP0Oracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SimpleSLPTWAP0Oracle> {
    return super.deploy(overrides || {}) as Promise<SimpleSLPTWAP0Oracle>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleSLPTWAP0Oracle {
    return super.attach(address) as SimpleSLPTWAP0Oracle;
  }
  connect(signer: Signer): SimpleSLPTWAP0Oracle__factory {
    return super.connect(signer) as SimpleSLPTWAP0Oracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleSLPTWAP0Oracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleSLPTWAP0Oracle;
  }
}

const _abi = [
  {
    inputs: [],
    name: "PERIOD",
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
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
    ],
    name: "_get",
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
    name: "callerInfo",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
    ],
    name: "getDataParameter",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
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
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    name: "pairs",
    outputs: [
      {
        internalType: "uint256",
        name: "priceCumulativeLast",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint224",
            name: "_x",
            type: "uint224",
          },
        ],
        internalType: "struct FixedPoint.uq112x112",
        name: "priceAverage",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061100a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063c699c4d611610076578063d6d7d5251161005b578063d6d7d5251461013f578063eeb8a8d314610160578063fe33b30214610173576100a3565b8063c699c4d614610119578063d568866c1461012c576100a3565b80634709904d146100a857806354fd9238146100d15780637046db52146100f1578063b4d1d79514610111575b600080fd5b6100bb6100b6366004610c88565b610195565b6040516100c89190610e40565b60405180910390f35b6100e46100df366004610d18565b6101bd565b6040516100c89190610f3d565b6101046100ff366004610c88565b61032c565b6040516100c89190610e2d565b6100e4610355565b610104610127366004610cab565b61035b565b61010461013a366004610cab565b610394565b61015261014d366004610cab565b6103cd565b6040516100c8929190610e1d565b61015261016e366004610cab565b6106f1565b610186610181366004610c88565b6108ad565b6040516100c893929190610f46565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000808373ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b15801561020657600080fd5b505afa15801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e9190610d9c565b905060008060008673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561028b57600080fd5b505afa15801561029f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c39190610d50565b92509250925080860363ffffffff166102fc836dffffffffffffffffffffffffffff16856dffffffffffffffffffffffffffff166108ff565b517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16029390930193505050505b92915050565b60608160405160200161033f9190610e40565b6040516020818303038152906040529050919050565b61012c81565b505060408051808201909152600181527f5300000000000000000000000000000000000000000000000000000000000000602082015290565b505060408051808201909152600e81527f5375736869537761702054574150000000000000000000000000000000000000602082015290565b600080806103dd84860186610c88565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260208190526040902060010154909150429063ffffffff166104aa5773ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902060010180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff831617905561047582826101bd565b73ffffffffffffffffffffffffffffffffffffffff9092166000908152602081905260408120929092555091508190506106ea565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090206001015463ffffffff90811682039061012c908216101561057f5773ffffffffffffffffffffffffffffffffffffffff83166000908152602081815260409182902082519182019092526002909101547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260019061055d9061055890670de0b6b3a7640000610a8e565b610b1c565b90955071ffffffffffffffffffffffffffffffffffff1693506106ea92505050565b600061058b84846101bd565b905060405180602001604052808363ffffffff166000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548403816105ea57fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811690915273ffffffffffffffffffffffffffffffffffffffff86166000908152602081815260409182902093516002850180547fffffffff00000000000000000000000000000000000000000000000000000000169185169190911790819055600180860180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8b8116919091179091559587905583519283019093529092168252916106cc9161055891670de0b6b3a764000090610a8e16565b90965071ffffffffffffffffffffffffffffffffffff169450505050505b9250929050565b6000808061070184860186610c88565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260208190526040902060010154909150429063ffffffff16610747576000809350935050506106ea565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090206001015463ffffffff90811682039061012c90821610156107f55773ffffffffffffffffffffffffffffffffffffffff83166000908152602081815260409182902082519182019092526002909101547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260019061055d9061055890670de0b6b3a7640000610a8e565b600061080184846101bd565b905061080b610c63565b604080516020808201835273ffffffffffffffffffffffffffffffffffffffff88166000908152908190529190912054819063ffffffff86169085038161084e57fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690529050600161088861055883670de0b6b3a7640000610a8e565b90975071ffffffffffffffffffffffffffffffffffff16955050505050509250929050565b600060208181529181526040908190208054600182015483519485019093526002909101547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1683529163ffffffff9091169083565b610907610c63565b6000821161094a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094190610f06565b60405180910390fd5b826109645750604080516020810190915260008152610326565b71ffffffffffffffffffffffffffffffffffff8311610a1a57600082607085901b8161098c57fe5b0490507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111156109e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094190610ecf565b6040518060200160405280827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250915050610326565b6000610a36846e01000000000000000000000000000085610b23565b90507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111156109e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094190610ecf565b610a96610c75565b6000821580610ad157505082517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1682810290838281610ace57fe5b04145b610b07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094190610e61565b60408051602081019091529081529392505050565b5160701c90565b6000806000610b328686610ba8565b9150915060008480610b4057fe5b868809905082811115610b54576001820391505b8083039250848210610b92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094190610e98565b610b9d838387610bf3565b979650505050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84860990508385029250828103915082811015610beb576001820391505b509250929050565b60008181038216808381610c0357fe5b049250808581610c0f57fe5b049450808160000381610c1e57fe5b60028581038087028203028087028203028087028203028087028203028087028203028087028203029586029003909402930460010193909302939093010292915050565b60408051602081019091526000815290565b6040518060200160405280600081525090565b600060208284031215610c99578081fd5b8135610ca481610f81565b9392505050565b60008060208385031215610cbd578081fd5b823567ffffffffffffffff80821115610cd4578283fd5b818501915085601f830112610ce7578283fd5b813581811115610cf5578384fd5b866020828501011115610d06578384fd5b60209290920196919550909350505050565b60008060408385031215610d2a578182fd5b8235610d3581610f81565b91506020830135610d4581610fc2565b809150509250929050565b600080600060608486031215610d64578081fd5b8351610d6f81610fa6565b6020850151909350610d8081610fa6565b6040850151909250610d9181610fc2565b809150509250925092565b600060208284031215610dad578081fd5b5051919050565b60008151808452815b81811015610dd957602081850181015186830182015201610dbd565b81811115610dea5782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b9115158252602082015260400190565b600060208252610ca46020830184610db4565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60208082526019908201527f4669786564506f696e743a3a6d756c3a206f766572666c6f7700000000000000604082015260600190565b6020808252601a908201527f46756c6c4d6174683a3a6d756c4469763a206f766572666c6f77000000000000604082015260600190565b6020808252601e908201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604082015260600190565b6020808252601e908201527f4669786564506f696e743a3a6672616374696f6e3a2064697620627920300000604082015260600190565b90815260200190565b92835263ffffffff919091166020830152517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff81168114610fa357600080fd5b50565b6dffffffffffffffffffffffffffff81168114610fa357600080fd5b63ffffffff81168114610fa357600080fdfea2646970667358221220ce7c8c671b72cd7ffadb3191b86947fa9d57ab9ebc68b8d6547fbd8e26f08f5b64736f6c634300060c0033";

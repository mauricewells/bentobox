// hardhat.config.js
require("dotenv/config")
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-solhint")
require("@tenderly/hardhat-tenderly")
require("@nomiclabs/hardhat-waffle")
require("hardhat-abi-exporter")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("hardhat-gas-reporter")
require("hardhat-spdx-license-identifier")
require("hardhat-typechain")
require("hardhat-watcher")
require("solidity-coverage")
require("hardhat-docgen")
const { ethers } = require("ethers")

const { normalizeHardhatNetworkAccountsConfig } = require("hardhat/internal/core/providers/util")
const { BN, bufferToHex, privateToAddress, toBuffer } = require("ethereumjs-util")
const { removeConsoleLog } = require("hardhat-preprocessor")

const test_accounts = {
    mnemonic: "test test test test test test test test test test test junk",
    accountsBalance: "990000000000000000000",
}

const accounts = [
    ethers.Wallet.fromMnemonic(process.env.MNEMONIC).privateKey,
    ethers.Wallet.fromMnemonic(process.env.FUNDER_MNEMONIC).privateKey,
]

console.log("Wallet:", ethers.Wallet.fromMnemonic(process.env.MNEMONIC).address)
console.log("Wallet:", ethers.Wallet.fromMnemonic(process.env.FUNDER_MNEMONIC).address)

console.log("Key:", accounts[0])
console.log("Key:", accounts[1])

task("accounts", "Prints the list of accounts", async (_, { config }) => {
    const networkConfig = config.networks["hardhat"]

    const accounts = normalizeHardhatNetworkAccountsConfig(networkConfig.accounts)

    console.log("Accounts")
    console.log("========")

    for (const [index, account] of accounts.entries()) {
        const address = bufferToHex(privateToAddress(toBuffer(account.privateKey)))
        const privateKey = bufferToHex(toBuffer(account.privateKey))
        const balance = new BN(account.balance).div(new BN(10).pow(new BN(18))).toString(10)
        account.privateKey = privateKey
        console.log(`Account #${index}: ${address} (${balance} ETH) Private Key: ${privateKey}`)
    }
})

module.exports = {
    abiExporter: {
        path: "./abi",
        clear: true,
        flat: true,
        // only: [],
        // except: []
    },
    docgen: {
        path: "./documentation",
        clear: false,
        runOnCompile: false,
    },
    defaultNetwork: "hardhat",
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS ? true : false,
        currency: "USD",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
    },
    namedAccounts: {
        deployer: {
            default: 0
        },
        funder: {
            default: 1
        }
    },
    networks: {
        hardhat: {
            chainId: 31337,
            test_accounts,
        },
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts,
            chainId: 1,
            hardhat: {
                forking: {
                    enabled: false,
                    url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
                },
            },
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts,
            chainId: 3,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts,
            chainId: 4,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        goerli: {
            url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts,
            chainId: 5,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        kovan: {
            url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts,
            chainId: 42,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        moonbase: {
            url: "https://rpc.testnet.moonbeam.network",
            accounts,
            chainId: 1287,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        arbitrum: {
            url: "https://kovan3.arbitrum.io/rpc",
            accounts,
            chainId: 79377087078960,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        binance: {
            url: "https://bsc-dataseed.binance.org/",
            accounts,
            chainId: 56,
            live: true,
            saveDeployments: true,
        },
        binancetest: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            accounts,
            chainId: 97,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        matic: {
            url: "https://rpc-mainnet.maticvigil.com/",
            accounts,
            chainId: 137,
            live: true,
            saveDeployments: true,
        },
        fantom: {
            url: "https://rpcapi.fantom.network",
            accounts,
            chainId: 250,
            live: true,
            saveDeployments: true,
        },
        fantomtest: {
            url: "https://rpc.testnet.fantom.network/",
            accounts,
            chainId: 4002,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        avalanche: {
            url: "https://ava.spacejelly.network/api/ext/bc/C/rpc",
            accounts,
            chainId: 43114,
            live: true,
            saveDeployments: true,
        },
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts,
            chainId: 43113,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com/",
            accounts,
            chainId: 80001,
            live: true,
            saveDeployments: true,
            tags: ["staging"],
        },
    },
    paths: {
        artifacts: "artifacts",
        cache: "cache",
        deploy: "deploy",
        deployments: "deployments",
        imports: "imports",
        sources: "contracts",
        tests: "test",
    },
    preprocess: {
        eachLine: removeConsoleLog((bre) => bre.network.name !== "hardhat" && bre.network.name !== "localhost"),
    },
    solidity: {
        version: "0.6.12",
        settings: {
            optimizer: {
                enabled: true,
                runs: 50000,
            },
        },
    },
    spdxLicenseIdentifier: {
        overwrite: false,
        runOnCompile: true,
    },
    tenderly: {
        project: process.env.TENDERLY_PROJECT,
        username: process.env.TENDERLY_USERNAME,
    },
    typechain: {
        outDir: "types",
        target: "ethers-v5",
    },
    watcher: {
        compile: {
            tasks: ["compile"],
            files: ["./contracts"],
            verbose: true,
        },
    },
}

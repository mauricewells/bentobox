# BentoBox

[![Coverage Status](https://coveralls.io/repos/github/sushiswap/bentobox/badge.svg?branch=hardhat)](https://coveralls.io/github/sushiswap/bentobox?branch=hardhat)

Platforms like Compound and Aave allow users to deposit assets as collateral and borrow other assets against this. These protocols have attracted billions of dollars, but they suffer from some major limitations. Taking away these limitations could see much larger adoption. BentoBox aims to do just that.

We solve these issues by having a platform with:

- Isolated lending pairs. Anyone can create a pair, it’s up to users which pairs they find safe enough. Risk is isolated to just that pair.
- Flexible oracles, both on-chain and off-chain.
  Liquid interest rates based on a specific target utilization range, such as 70-80%.
- Contracts optimized for low gas.
- The supplied assets can be used for flash loans, providing extra revenue for suppliers.

## Docs

[Development](docs/DEVELOPMENT.md)

[Deployment](docs/DEPLOYMENT.md)

## Licence

UNLICENCED

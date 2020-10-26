const PeggedOracle = artifacts.require("PeggedOracle");
const CompoundOracle = artifacts.require("CompoundOracle");
//const ChainLinkOracle = artifacts.require("ChainLinkOracle");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(PeggedOracle);
  await deployer.deploy(CompoundOracle);
  //await deployer.deploy(ChainLinkOracle);
};

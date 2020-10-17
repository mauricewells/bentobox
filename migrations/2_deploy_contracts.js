const Vault = artifacts.require("Vault");
const Pair = artifacts.require("Pair");
const SushiSwapDelegateSwapper = artifacts.require("SushiSwapDelegateSwapper");

function e18(amount) {
  return new web3.utils.BN(amount).mul(new web3.utils.BN("1000000000000000000"));
}

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Vault);
  await deployer.deploy(Pair);

  // Get the contracts
  let vault = await Vault.deployed();
  let pairMaster = await Pair.deployed();
  await vault.setPairContract(pairMaster.address, true);
};

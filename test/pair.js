const truffleAssert = require('./helpers/truffle-assertions');
const timeWarp = require("./helpers/timeWarp");

const Vault = artifacts.require("Vault");
const A = artifacts.require("TokenA");
const B = artifacts.require("TokenB");
const Pair = artifacts.require("Pair");
const PeggedOracle = artifacts.require("PeggedOracle");
function e18(amount) {
  return new web3.utils.BN(amount).mul(new web3.utils.BN("1000000000000000000"));
}

contract('Pair', (accounts) => {
  let a;
  let b;
  let pair;
  let vault;
  const alice = accounts[1];
  const bob = accounts[2];
  const dummy = accounts[4];

  before(async () => {
    a = await A.deployed();
    b = await B.deployed();

    a.transfer(alice, e18(1000));
    b.transfer(bob, e18(1000));

    vault = await Vault.deployed();
    pair = await Pair.at(await vault.pairs(0));
    oracle = await PeggedOracle.at(await pair.oracle());
    await pair.updateRate();
  });

  it('should not allow any remove without supply', async () => {
    await truffleAssert.reverts(pair.removeA(e18(1), bob), 'BoringMath: Div by 0');
    await truffleAssert.reverts(pair.removeB(e18(1), bob), 'BoringMath: Div by 0');
  });

  it('should fail on remove with no totalSupply due to div by 0', async () => {
    await truffleAssert.reverts(pair.removeA(), 'BentoBox: nothing to remove');
    await truffleAssert.reverts(pair.removeB(), 'BentoBox: nothing to remove');
  });

  it('should not allow borrowing without any supply', async () => {
    await truffleAssert.reverts(pair.borrow(e18(1)), 'BoringMath: Underflow');
  });

  it('should take a deposit of token B', async () => {
    await b.approve(vault.address, e18(300), { from: bob });
    await pair.addB(e18(300), { from: bob });
  });

  it('should have correct balances after supply of token B', async () => {
    assert.equal((await pair.totalShareB()).toString(), e18(300).toString());
    assert.equal((await pair.users(bob)).shareB.toString(), e18(300).toString());
  })

  it('should not allow borrowing without any collateral', async () => {
    await truffleAssert.reverts(pair.borrow(e18(1), { from: alice }), 'BentoBox: user insolvent');
  });

  it('should take a deposit of token A', async () => {
    await a.approve(vault.address, e18(100), { from: alice });
    await pair.addA(e18(100), { from: alice });
  });

  it('should have correct balances after supply of token A', async () => {
    assert.equal((await pair.totalShareA()).toString(), e18(100).toString());
    assert.equal((await pair.users(alice)).shareA.toString(), e18(100).toString());
  })

  it('should allow borrowing with collateral up to 75%', async () => {
    await pair.borrow(e18(75), { from: alice });
  });

  it('should not allow any more borrowing', async () => {
    await truffleAssert.reverts(pair.borrow(100, { from: alice }), 'BentoBox: user insolvent');
  });

  it('should report insolvency due to interest', async () => {
    await pair.accrue();
    assert.equal(await pair.isSolvent(alice), false);
  })

  it('should allow liquidate', async () => {
    await b.approve(vault.address, e18(25), { from: bob });
    await pair.methods["liquidate(address[],uint256[],address)"]([alice], [e18(20)], "0x0000000000000000000000000000000000000000", { from: bob });
  });

  it('should allow repay', async () => {
    await b.approve(vault.address, e18(50), { from: alice });
    await pair.repay(e18(50), { from: alice });
  });

  it('should allow full repay with funds', async () => {
    await b.approve(vault.address, e18(25), { from: alice });
    await pair.methods['repay()']({ from: alice });
  });

  it('should allow partial withdrawal of collateral', async () => {
    await pair.removeA(e18(60), { from: alice });
  });

  it('should allow full withdrawal of collateral', async () => {
    await pair.methods['removeA()'].call({ from: alice });
  });

  it('should update the interest rate', async () => {
    for (let i = 0; i < 20; i++) {
      await timeWarp.advanceBlock()
    }
    await pair.updateInterestRate({ from: alice });
    //console.log((await pair.interestPerBlock()).toString());
  });
});

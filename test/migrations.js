const migrations = artifacts.require("migrations");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("migrations", function (/* accounts */) {
  it("should assert true", async function () {
    await migrations.deployed();
    return assert.isTrue(true);
  });
});

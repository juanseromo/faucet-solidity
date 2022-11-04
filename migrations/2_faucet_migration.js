const FaucetContract = artifacts.require("Faucet")

//will require bytecode of faucet contract

module.exports = function (deployer) {
    deployer.deploy(FaucetContract)
}
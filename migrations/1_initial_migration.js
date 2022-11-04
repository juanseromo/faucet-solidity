const Migrations = artifacts.require("Migrations2");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
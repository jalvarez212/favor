const Migrations = artifacts.require("Storage_test");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

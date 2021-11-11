const Migrations = artifacts.require("Migrations");
const APEBUSD = artifacts.require("APE");

module.exports = function (deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(APEBUSD);
};

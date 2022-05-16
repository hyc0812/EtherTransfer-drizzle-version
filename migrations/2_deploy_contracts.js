const SimpleStorage = artifacts.require("SimpleStorage");
const Payable = artifacts.require("Payable");


module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Payable);

};

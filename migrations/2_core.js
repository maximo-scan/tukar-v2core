const TukarV2ERC20 = artifacts.require("TukarV2ERC20");
const TukarV2Factory = artifacts.require("TukarV2Factory");
const TukarV2Pair = artifacts.require("TukarV2Pair");
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TukarV2ERC20);
  deployer.deploy(TukarV2Factory,'0x00000d4A3ccF79a3fA84e0B1414729e2bc184dB6'); // need change
  deployer.deploy(TukarV2Pair);
};

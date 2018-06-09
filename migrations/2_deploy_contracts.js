var TakaToken = artifacts.require("./TakaToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TakaToken);
};

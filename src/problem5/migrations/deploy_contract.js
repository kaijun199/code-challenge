const TokenBalanceUtility = artifacts.require("TokenBalanceUtility");

module.exports = function(deployer) {
  deployer.deploy(TokenBalanceUtility);
};

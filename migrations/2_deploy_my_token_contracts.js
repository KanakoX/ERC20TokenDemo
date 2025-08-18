const MyContract = artifacts.require('./MyToken.sol');

module.exports = function (deployer) {
  deployer.deploy(MyContract, "MyTokenTest", "MTT", 18);
};

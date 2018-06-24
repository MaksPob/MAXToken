const Crowdsale = artifacts.require('./Crowdsale.sol');

module.exports = (deployer) => {
  /* constructor(uint _startPreICO, uint _startICO, uint _startPostICO, address _reserved) */
  deployer.deploy(Crowdsale, 1529452800, 1531267201, 1533859201, '0xf17f52151ebef6c7334fad080c5704d77216b732');
};

import contract from 'truffle-contract';

import TokenContract from '../../build/contracts/MAXToken.json';
import web3Instance from './getWeb3';
import crowdsaleInstance from './Crowdsale';

class Token {
  async getInstance() {
    const tokenAddress = await crowdsaleInstance.instance.token();
    const MAXToken = await contract({ abi: TokenContract.abi });
    await MAXToken.setProvider(web3Instance.currentProvider);
    this.instance = await MAXToken.at(tokenAddress);
  }
}

const tokenInstance = new Token();
export { tokenInstance as default };

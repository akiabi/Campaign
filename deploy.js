const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledCampaignFactory = require('./build/CampaignFactory.json');

const mnemonic =
  'circle magnet vote stone skirt exotic indoor modify oxygen antenna clog creek';
const networkUrl =
  'https://ropsten.infura.io/v3/125fbef3afd64241b58b75c5da41b8d2';

const provider = new HDWalletProvider(mnemonic, networkUrl);
const web3 = new Web3(provider);

var accounts, lottery;

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(
    JSON.parse(compiledCampaignFactory.interface)
  )
    .deploy({
      data: '0x' + compiledCampaignFactory.bytecode
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log('Contract Deployed! Contract Address: ', lottery.options.address);
  //Latest Deployed Campaign Factory Address: 0xd3459F8b8089e991Da314E7137991f2D316B848d
};

deploy();

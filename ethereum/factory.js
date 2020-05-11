import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),	
	'0xC1115C2B6B441BbE8E817D752b3e232d79FC60Eb'
);

export default instance;

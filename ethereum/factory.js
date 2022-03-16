import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9a6c3C879feE9A5214faB41D5C327EF58e6e5db4"
);

export default instance;

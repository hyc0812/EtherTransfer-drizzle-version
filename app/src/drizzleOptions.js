import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Payable from "./contracts/Payable.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("http://localhost:8545"),
  },
  contracts: [SimpleStorage, Payable],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;

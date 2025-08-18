const {TronWeb} = require("../packages/node_modules/tronweb");
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE,
});

const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";
const spenderAddress = "TEcf5PaudE9TKXHaXHFQRGTJmHvGpRGuqh";
const amount = "2400000000000000000"

async function approve() {
  let contract = await tronWeb.contract().at(contractAddress);
  let approveFunc = await contract.approve(spenderAddress, amount).send();
  console.log(
    `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${approveFunc}`
  );
}

approve();
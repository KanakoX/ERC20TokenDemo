const {TronWeb} = require("../packages/node_modules/tronweb");
// const prompt = require("../packages/node_modules/prompt-sync")();
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE,
});

async function transferTest() {
  const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";
  let contract = await tronWeb.contract().at(contractAddress);

  const recipientAddress = "THERNcGd35PZNSLK6i7LkLEmuYSxe3UEVD";
  amount = '1100000000000000000';
  let transferFunc = await contract.transfer(recipientAddress, amount).send();
  console.log(
    `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${transferFunc}`
  );
}

transferTest();
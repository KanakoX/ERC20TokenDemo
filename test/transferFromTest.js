const {TronWeb} = require("../packages/node_modules/tronweb");
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE_2,
});

const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";
const spenderAddress = "TEcf5PaudE9TKXHaXHFQRGTJmHvGpRGuqh";
const senderAddress = "TTd8161s14UtC7QUNA5RdCRN6j32CfCyuM";
const recipientAddress = "THERNcGd35PZNSLK6i7LkLEmuYSxe3UEVD";
const amount = "2400000000000000000"

async function transferFrom() {
  tronWeb.setAddress(spenderAddress);
  let contract = await tronWeb.contract().at(contractAddress);
  let transferFromFunc = await contract.transferFrom(senderAddress, recipientAddress, amount).send();
  console.log(
    `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${transferFromFunc}`
  );
}

transferFrom();
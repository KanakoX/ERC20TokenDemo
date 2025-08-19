const {TronWeb} = require("../packages/node_modules/tronweb");
const prompt = require("../packages/node_modules/prompt-sync")();
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE_2,
});

const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";
// let spenderAddress = "TEcf5PaudE9TKXHaXHFQRGTJmHvGpRGuqh";
let senderAddress = "TTd8161s14UtC7QUNA5RdCRN6j32CfCyuM";
let recipientAddress = "THERNcGd35PZNSLK6i7LkLEmuYSxe3UEVD";
let amount = "2400000000000000000"

async function transferFrom() {
  // tronWeb.setAddress(spenderAddress);
  let contract = await tronWeb.contract().at(contractAddress);
  
  let flag = prompt("Test with default param? ([1]: Yes, [2]: No) ");
  if (flag == 1) {
    let transferFromFunc = await contract.transferFrom(senderAddress, recipientAddress, amount).send();
    console.log(
      `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${transferFromFunc}`
    );
  } else if (flag == 2) {
    senderAddress = prompt("Input sender address: ");
    recipientAddress = prompt("Input recipient address: ");
    amount = prompt("Input amount: ");
    let transferFromFunc = await contract.transferFrom(senderAddress, recipientAddress, amount).send();
    console.log(
      `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${transferFromFunc}`
    );
  }
}

transferFrom();
const {TronWeb} = require("../packages/node_modules/tronweb");
const prompt = require("../packages/node_modules/prompt-sync")();
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE,
});

const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";
let recipientAddress = "THERNcGd35PZNSLK6i7LkLEmuYSxe3UEVD";
let amount = '1100000000000000000';

async function transferTest() {
  let contract = await tronWeb.contract().at(contractAddress);
  let flag = prompt("Test with default param? ([1]: Yes, [2]: No) ");
  if (flag == 1) {
    let transferFunc = await contract.transfer(recipientAddress, amount).send();
    console.log(
      `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${transferFunc}`
    );
  } else if (flag == 2) {
    recipientAddress = prompt("Input recipient address: ");
    amount = prompt("Input amount: ");
    let transferFunc = await contract.transfer(recipientAddress, amount).send();
    console.log(
      `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${transferFunc}`
    );
  }
  
}

transferTest();
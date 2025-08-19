const {TronWeb} = require("../packages/node_modules/tronweb");
const prompt = require("../packages/node_modules/prompt-sync")();
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE,
});

const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";
let spenderAddress = "TEcf5PaudE9TKXHaXHFQRGTJmHvGpRGuqh";
let amount = "2400000000000000000"

async function approve() {
  let contract = await tronWeb.contract().at(contractAddress);
  
  let flag = prompt("Test with default param? ([1]: Yes, [2]: No) ");
  if (flag == 1) {
    let approveFunc = await contract.approve(spenderAddress, amount).send();
    console.log(
      `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${approveFunc}`
    );
  } else if (flag == 2) {
    spenderAddress = prompt("Input spender address: ");
    amount = prompt("Input amount: ");
    let approveFunc = await contract.approve(spenderAddress, amount).send();
    console.log(
      `Check tx on the explorer: https://nile.tronscan.org/#/transaction/${approveFunc}`
    );
  }
}

approve();
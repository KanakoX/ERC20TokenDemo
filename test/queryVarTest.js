const {TronWeb} = require("../packages/node_modules/tronweb");
const prompt = require("../packages/node_modules/prompt-sync")();
require('../packages/node_modules/dotenv').config({path: '../.env'});

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  privateKey: process.env.PRIVATE_KEY_NILE,
});

const contractAddress = "TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK";

async function query() {
    let contract = await tronWeb.contract().at(contractAddress);
    let flag = prompt("Queryable state variable: ([1]: balanceOf, [2]: allowance)");
    if (flag == 1) {
      let address = prompt("Input address: ");
      let balanceOf = await contract.balanceOf(address).call();
      console.log(balanceOf);
    } else if (flag == 2) {
      let sender = prompt("Input sender address: ");
      let spender = prompt("Input spender address: ");
      let allowance = await contract.allowance(sender, spender).call();
      console.log(allowance);
    }
}

query();

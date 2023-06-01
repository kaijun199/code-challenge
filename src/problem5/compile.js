const path = require("path");
const fs = require("fs");
const solc = require("solc");

const contractPath = path.resolve(__dirname, "contracts", "TokenBalanceUtility.sol");
const contractSource = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "TokenBalanceUtility.sol": {
      content: contractSource,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contractABI = output.contracts["TokenBalanceUtility.sol"]["TokenBalanceUtility"].abi;

module.exports = contractABI;

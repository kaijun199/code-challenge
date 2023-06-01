const { ethers } = require("ethers");
const url = "https://bsc-dataseed1.binance.org/"
//using this existing erc20 token on the etherscan website (url:https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7)
const ADDR = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";   // your contract address
const ABI = require("./compile");    // your contract ABI

const ADDRESS = "0x556F8F1261b7f976027B2087d516c324deF58DfA"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
"0xb5d4f343412dc8efb6ff599d790074d0f1e8d430"
, "0x0020c5222a24e4a96b720c06b803fb8d34adc0af"
, "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
//const provider = ethers.providers.getDefaultProvider();
const provider = new ethers.JsonRpcProvider(url);

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);
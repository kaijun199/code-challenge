//https://docs.ethers.org/v6/getting-started/
//https://101blockchains.com/ethers-js-cheat-sheet/

import { ethers, formatUnits } from 'ethers';

const addresses_to_lookup = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430"
    , "0x0020c5222a24e4a96b720c06b803fb8d34adc0af"
    , "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
]

const swth_token = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const node_url = "https://bsc-dataseed1.binance.org/"

// The contract ABI (fragments we care about)
let abi = [
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function balanceOf(address a) view returns (uint)"
]

async function getBalances(swth_token: string, addresses_to_lookup: string[]): Promise<string[]> {


    let provider = new ethers.JsonRpcProvider(node_url);
    let contract = new ethers.Contract(swth_token, abi, provider);
    
    var output : string[] = [];
    
    for (let address of addresses_to_lookup){
        let decimals = await contract.decimals()
        let balance = await contract.balanceOf(address);
        let formatted = address + " " + formatUnits(balance, decimals);
        output.push(formatted);
    }

    return output;
}

getBalances(swth_token, addresses_to_lookup)
    .then(output => {
        for (let i = 0; i < output.length; i++) {
            console.log(output[i]);
        }
    })
    .catch(error => {
        console.error(error);
    });
const Web3 = require("web3");

// Replace 'YOUR_CONTRACT_ADDRESS' with the actual address of your Ethereum smart contract
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const web3 = new Web3("YOUR_ETHEREUM_NODE_URL");

// Example smart contract interaction functions (replace with your logic)
function paySecurityDeposit(houseOwner, id) {
  return `Paid security deposit for ${houseOwner}`;
}

function payRent(houseOwner, id) {
  return `Paid rent for ${houseOwner}`;
}

async function postProperty(depositAmount, rentAmount, tokenAddress) {
  const value = await contractInstance.callStatic.postProperty(
    depositAmount,
    rentAmount,
    tokenAddress
  );
  return `Property posted with deposit: ${depositAmount}, rent: ${rentAmount}, token: ${tokenAddress}`;
}

module.exports = {
  paySecurityDeposit,
  payRent,
  postProperty,
};

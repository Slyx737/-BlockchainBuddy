const WalletLink = require('walletlink');
const Web3 = require('web3');

const walletLink = new WalletLink({
  appName: 'Your App Name'
});

const ethereum = walletLink.makeWeb3Provider(
  'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',
  1
);

const web3 = new Web3(ethereum);

// Request access to user's Coinbase Wallet
ethereum.enable().then((accounts) => {
  // Use the accounts array to interact with Coinbase Wallet
});

// Import wallet integrations
import MetaMaskIntegration from './metamask.js';
import CoinbaseWalletIntegration from './coinbase-wallet.js';
import LedgerIntegration from './ledger.js';

// Create the browser icon for the plugin
chrome.browserAction.onClicked.addListener(() => {
  // Open the plugin's interface (e.g., a popup.html file) when the icon is clicked
  chrome.tabs.create({ url: "popup.html" });
});

// Initialize and manage wallet integrations
class WalletManager {
  constructor() {
    // Initialize the wallet integrations
    this.metaMask = new MetaMaskIntegration();
    this.coinbaseWallet = new CoinbaseWalletIntegration();
    this.ledger = new LedgerIntegration();
  }

  // Add methods to manage wallet integrations as needed
}

// Instantiate the WalletManager class
const walletManager = new WalletManager();

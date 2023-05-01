if (typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      // Use the accounts array to interact with MetaMask
    });
}

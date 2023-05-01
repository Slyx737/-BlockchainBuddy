const Transport = require('@ledgerhq/hw-transport-webusb').default;
const Eth = require('@ledgerhq/hw-app-eth').default;

async function getLedgerAccount() {
  const transport = await Transport.create();
  const eth = new Eth(transport);
  const account = await eth.getAddress("44'/60'/0'/0/0");
  return account;
}

getLedgerAccount().then((account) => {
  // Use the account object to interact with Ledger
});

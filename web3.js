import Web3 from 'web3';

let provider;
if (window.web3 && window.web3.currentProvider) {
  provider = window.web3.currentProvider;
} else {
  console.log('install metamask')
}

export const web3 = new Web3(provider);
window.addEventListener('load', async () => {
  try {
   await web3.enable();
  } catch (error) {}
});

export const getBalance_address = (address) => {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(address)
    .then(function(balance) {
      balance = web3.utils.fromWei(balance, 'ether')
      console.log(balance)
    });
  });
};

export const createAccount = () => {
  return new Promise((resolve, reject) => {
    let get_accounts = [];
    var private_accounts = [];
    var acc = web3.eth.accounts.create();

    private_accounts.push({
      public: acc.address,
      private: acc.privateKey
    })

    web3.eth.getAccounts()
    .then(function(val) {
      get_accounts.push(val)
    });
  });
};

export const miningAddress = () => {
  return new Promise((resolve, reject) => {
    web3.eth.getCoinbase()
    .then(function(val) {
      console.log(val)
    });
  });
};

export const gasPrice = () => {
  return new Promise((resolve, reject) => {
    web3.eth.getGasPrice()
    .then(function(val) {
      console.log(val)
    });
  });
};

export const sendEther = (from,to,amount,gas) => {
  return new Promise((resolve, reject) => {
    web3.eth.sendTransaction({
      from: from,
      to: to,
      amount: amount,
      gas: gas
    })
  });
};

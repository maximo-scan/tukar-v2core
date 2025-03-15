const HDWalletProvider = require('@truffle/hdwallet-provider');
const developmentMnemonic = "use huge leisure aim hard inside smile siren negative test layer grief slam scan electric visual divide effort inner rain record van farm time";

module.exports = {
  networks: {
    contracts_directory: "./contracts",
    contracts_build_directory: "./build/contracts",
    migrations_directory: "./migrations",
    etp: {
      provider: () =>
      new HDWalletProvider(developmentMnemonic, "https://rpc.etpscan.xyz"),
      network_id: "*",
    },
  },
  plugins: ['truffle-source-verify'],
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.5.16",
       settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      evmVersion: "istanbul"
       }
    }
  },
};

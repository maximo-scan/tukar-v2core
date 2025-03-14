const HDWalletProvider = require('@truffle/hdwallet-provider');
const developmentMnemonic = "junk junk junk junk junk junk junk junk junk junk junk junk";

module.exports = {
  networks: {
    contracts_directory: "./contracts",
    contracts_build_directory: "./build/contracts",
    migrations_directory: "./migrations",
    etp: {
      provider: () =>
      new HDWalletProvider(developmentMnemonic, "https://localhost:8545"),
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

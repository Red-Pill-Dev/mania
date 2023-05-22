import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    // mainnet: {
    //   url: 'https://mainnet.infura.io/v3/8a19bdc6d7b74c488b77b3e346bb6615',
    //   from: 'address',
    //   accounts: ['private_key'],
    // },
    // bsc: {
      // url: 'https://bsc-dataseed.binance.org',
      // from: 'address',
      // accounts: ['private_key'],
    // },
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      from: '0x03fE49b9a4a24a49f80A7B2d02D94549690B5857',
      accounts: ['1fbbc1f6f60f80b8feb50870d7f65682dc419487efe799d8e5cb65d5f68a18d2'],
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/8a19bdc6d7b74c488b77b3e346bb6615',
      from: '0x03fE49b9a4a24a49f80A7B2d02D94549690B5857',
      accounts: ['1fbbc1f6f60f80b8feb50870d7f65682dc419487efe799d8e5cb65d5f68a18d2'],
    },
    sepolia: {
      url: 'https://rpc.sepolia.org/',
      from: '0x03fE49b9a4a24a49f80A7B2d02D94549690B5857',
      accounts: ['1fbbc1f6f60f80b8feb50870d7f65682dc419487efe799d8e5cb65d5f68a18d2'],
    }
  },
  etherscan: {
    apiKey: 'S97DHUAJATXMSIC9WR9G67IAGPSPJ7KUSD',
  }
};

export default config;

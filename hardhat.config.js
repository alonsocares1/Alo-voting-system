require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {},
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/HvLI-Z4SfgUGAq2d5yt2kgVw4ZvYbAdC",
      accounts: [
        `0x${"c361e53c4dc82e1e9301379daaa8111ae27bc8154473b552cc44247d77a69bf1"}`,
      ],
    },
  },
};

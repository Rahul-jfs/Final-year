require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "Your URL",
      // url: process.env.POLYGON_MUMBAI,
      accounts: [
        `0x2925217be7eb9564dec87830bb09c9a916d568dac85192fef8bf36c30b5d1d19`,
      ],
    },

    // fuji: {
    //   url: `Your URL`,
    //   accounts: [
    //     `0x${"Your Account"}`,
    //   ],
    // },
  },
};

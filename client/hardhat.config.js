require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const KEY="fa34236075538ab663103dd1a2708438dbe82b0a6a0f33234715a30395956552";
const ALCHEMY_KEY="M_p4LxL-Pnz8-dhr1YHLvKoiFIr61XYW";
module.exports = {
  solidity: "0.8.17",
  networks:{
    sepolia :{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts:[`0x${KEY}`]
    }
  }
};


//0xe4a21c213ec4Bd8d2bEfec920c95f6c8344d4f1B
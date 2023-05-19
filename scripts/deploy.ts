import { ethers, upgrades } from "hardhat";
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  const Mania = await ethers.getContractFactory("ManiaUpgradeableV1");
  // const mania = await Mania.deploy();

  const mania = await upgrades.deployProxy(
    Mania,
    [process.env.ADDRESS_OWNER],
    {
      initializer: "initialize",
    },
  );

  await mania.deployed();

  console.log(`deploy address ${mania.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  const Mania = await ethers.getContractFactory("ManiaNew");
  // const mania = await Mania.deploy();

  const mania = await Mania.deploy(
        'ScapesMania',
        'MANIA',
        18,
        BigInt(4000000000000000000000000000),
        process.env.ADDRESS_OWNER as string,
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

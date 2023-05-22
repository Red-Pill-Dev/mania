import { ethers } from "hardhat";

async function main() {
  const Mania = await ethers.getContractFactory("ManiaOld");
  // const mania = await Mania.deploy();

  const mania = await Mania.deploy(
        'ScapesMania',
        'MANIA',
        18,
        BigInt(4000000000000000000000000000)
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

import { ethers, upgrades } from "hardhat";
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
    const PresaleV2 = await ethers.getContractFactory("ManiaUpgradeableV2");

    // PROXY - address contract proxy
    await upgrades.upgradeProxy(process.env.PROXY_SM as string, PresaleV2);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

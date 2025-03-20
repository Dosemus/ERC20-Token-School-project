const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const initialSupply = hre.ethers.parseUnits("1000000", 18); // 1M Tokens

    console.log(`Deploying contracts with the account: ${deployer.address}`);

    console.log("Deploying AlphaToken...");
    const AlphaToken = await hre.ethers.deployContract("AlphaToken", [initialSupply, deployer.address]);
    await AlphaToken.waitForDeployment();
    console.log(`AlphaToken deployed at: ${AlphaToken.target}`);

    console.log("Deploying BetaToken...");
    const BetaToken = await hre.ethers.deployContract("BetaToken", [initialSupply, deployer.address]);
    await BetaToken.waitForDeployment();
    console.log(`BetaToken deployed at: ${BetaToken.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

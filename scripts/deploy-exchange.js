const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const tokenA = "0xFCB53daB5AbAB1EE501194B5B7EE79c390ac0D63"; // AlphaToken Address
    const tokenB = "0x2E2dA72A791A46123059905351914de6714BADe8"; // BetaToken Address
    const exchangeRate = 10000; // 1:1 ratio with 4 decimals precision

    console.log(`Deploying TokenExchange with deployer: ${deployer.address}`);

    const TokenExchange = await hre.ethers.deployContract("TokenExchange", [tokenA, tokenB, exchangeRate, deployer.address]);
    await TokenExchange.waitForDeployment();

    console.log(`TokenExchange deployed at: ${TokenExchange.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

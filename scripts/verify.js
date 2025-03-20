const hre = require("hardhat");

async function main() {
    try {
        const tokenAAddress = "0xFCB53daB5AbAB1EE501194B5B7EE79c390ac0D63"; // AlphaToken
        const tokenBAddress = "0x2E2dA72A791A46123059905351914de6714BADe8"; // BetaToken
        const deployerAddress = "0xF9194DE3389Ec160226593EB64A4Ea5c7AeEae4E"; // Metamask Adress
        const initialSupply = "1000000000000000000000000"; // Tokens

        console.log(`Verifying AlphaToken at ${tokenAAddress}...`);
        await hre.run("verify:verify", {
            address: tokenAAddress,
            constructorArguments: [initialSupply, deployerAddress],
            contract: "contracts/AlphaToken.sol:AlphaToken", // contract path
        });
        console.log("AlphaToken verified successfully!");

        console.log(`Verifying BetaToken at ${tokenBAddress}...`);
        await hre.run("verify:verify", {
            address: tokenBAddress,
            constructorArguments: [initialSupply, deployerAddress],
            contract: "contracts/BetaToken.sol:BetaToken", // contract path
        });
        console.log(" BetaToken verified successfully!");
    } catch (error) {
        console.error("Error during verification:", error);
        process.exitCode = 1;
    }
}

// Execute the script
main();

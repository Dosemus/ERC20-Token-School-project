// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AlphaToken is ERC20, Ownable {
    constructor(uint256 initialSupply, address initialOwner) 
        ERC20("AlphaToken", "ALPHA") 
        Ownable(initialOwner) 
    {
        _mint(initialOwner, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

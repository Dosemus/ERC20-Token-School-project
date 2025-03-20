// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenExchange is Ownable {
    IERC20 public tokenA;
    IERC20 public tokenB;
    uint256 public exchangeRate; // e.g., 100 means 1 Token A = 1.00 Token B
    uint256 public constant PRECISION = 10000; // Precision factor (4 decimals)

    event Swap(address indexed user, uint256 amountA, uint256 amountB);

    constructor(address _tokenA, address _tokenB, uint256 _exchangeRate, address _owner) Ownable(_owner) {
        require(_exchangeRate > 0, "Exchange rate must be positive");
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
        exchangeRate = _exchangeRate;
    }

    function setExchangeRate(uint256 newRate) external onlyOwner {
        require(newRate > 0, "Exchange rate must be positive");
        exchangeRate = newRate;
    }

    function exchange(uint256 amountA) external returns (uint256 amountB) {
        require(amountA > 0, "Amount must be greater than zero");

        
        amountB = (amountA * exchangeRate) / PRECISION;

        
        require(tokenB.balanceOf(address(this)) >= amountB, "Not enough liquidity");

        
        require(tokenA.transferFrom(msg.sender, address(this), amountA), "Token A transfer failed");

        
        require(tokenB.transfer(msg.sender, amountB), "Token B transfer failed");

        emit Swap(msg.sender, amountA, amountB);
    }

    function depositTokenB(uint256 amount) external onlyOwner {
        require(tokenB.transferFrom(msg.sender, address(this), amount), "Token B deposit failed");
    }

    function withdrawTokenB(uint256 amount) external onlyOwner {
        require(tokenB.transfer(msg.sender, amount), "Token B withdrawal failed");
    }
}

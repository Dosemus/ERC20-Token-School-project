# ERC-20 Token Exchange on Sepolia

## 🔹 Overview
This project deploys and tests an **ERC-20 token exchange contract** on the **Ethereum Sepolia testnet** using Hardhat.

## 🔹 Features
- Deploys two ERC-20 tokens (**AlphaToken & BetaToken**).
- Implements a **Token Exchange** smart contract.
- Supports **token swapping** based on a **fixed exchange rate**.
- Uses **fixed-precision arithmetic** to prevent precision loss.
- Solidity 0.8.x **prevents overflow and underflow errors**.

## 🔹 Smart Contract Addresses (Sepolia)
| Contract | Address |
|----------------|------------------------------------------------|
| **AlphaToken (ALPHA)** | `0xFCB53daB5AbAB1EE501194B5B7EE79c390ac0D63` |
| **BetaToken (BETA)** | `0x2E2dA72A791A46123059905351914de6714BADe8` |
| **Token Exchange** | `0x7844ee367b8360094555C972Bbe0Aceb5Cb60902` |

## 🔹 Transactions Demonstrating Exchange
| Action | Transaction Hash |
|----------------|------------------------------------------------|
| **Approve 100 ALPHA to Exchange Contract** | [`0x2812840e908bb602371c35167ed2990f9761965ebc56eab763e5812df1ca4833`](https://sepolia.etherscan.io/tx/0x2812840e908bb602371c35167ed2990f9761965ebc56eab763e5812df1ca4833) |
| **Deposit 500 BETA into Exchange Contract** | `0x56250a170ba94fa56563e5c27bad5c039f2d8cc40ec62f96ef28fc6da43e5d06` |
| **Swap 100 ALPHA for BETA** | `0x0f3e935909ec954ad95f4dba7956e6dcc0ebdbc3bb2af31ac90fe6e5f8a769ec` |

## 🔹 Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/Dosemus/ERC20-Token-School-project.git

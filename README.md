# Smart Contract Snippets

This project is to showcase quick solidity smart contract snippets for beginners to start working on solidity language or to take references from. 

## Description

This repository contains a collection of simple Solidity smart contracts implemented using the [Hardhat](https://hardhat.org/) development environment. The goal of this project is to provide concise examples of various Solidity contracts for educational purposes and quick reference.

## Getting Started

To get started with this project, you should have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/smart-contract-snippets.git
   ```

2. Change into the project directory:

   ```bash
   cd hardhat-simple-storage-fcc
   ```
   
3. Install the project dependencies:

   ```bash
   npm install
   ```
   
## Usage

1. Running Tests
   You can run the provided tests for the Solidity contracts using the following command:

   ```bash
   npx hardhat test
   ```
   
2. Compiling Contracts
   To compile the Solidity contracts in the contracts/ directory, use the following command:

   ```bash
   npx hardhat compile 
   ```

3. Deploying Contracts / Running Deploy Scripts 
   You can deploy contracts to a local Hardhat network or a live Ethereum network. Modify the deployment script in scripts/deploy.js as needed and then use the following command to deploy:

  ```bash
   npx hardhat run .\scripts\<script-location> --network <network-name>
   ```

   For running on <b>Loccalhost</b> : 

  ```bash
   npx hardhat run .\scripts\<script-location> --network localhost
   ```

### Author

Rohit Roy

### Conclusions

This repository is open to contributions. You can add a solidity code snippet and a test for that contract using the given setup (Hardhat + EthersJS). Once everything is checked on your local setup, you can make a PR to my repository and I'll merge it into the main branch after a thorough review. 


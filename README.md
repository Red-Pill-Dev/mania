# mania

# Contract descriptions:
### The mania.sol token contract is compatible with the ERC20/BEP20 standards. 
The @openzeppelin ERC20Upgradeable contract was taken as the basis with the added ability to pause the contract and add or remove addresses to and from the blacklist. The contract is deployed through a proxy using the @openzeppelin/hardhat-upgrades library.

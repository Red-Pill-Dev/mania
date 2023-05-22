// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

contract ManiaUpgradeableV2 is ERC20PausableUpgradeable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    // Token name
     string private constant _NAME = "ScapesMania";
    // Token symbol
    string private constant _SYMBOL = "MANIA";

    // `maxTotalSupply` - maximum count of contract tokens
    uint256 private _maxTotalSupply;

    // Mapping for accounting blacklisted addresses
    mapping(address => bool) private _blacklistedAddresses;

    /**
     * @dev Emitted when `account` added to blacklist.
     */
    event AddToBlacklist(address indexed account);
    /**
     * @dev Emitted when `account` removed from blacklist.
     */
    event RemoveFromBlacklist(address indexed account);

    /**
     * @dev Returns contract owner - for BEP20 compatibility.
     */
    function getOwner() external view returns (address) {
        return owner();
    }

    /**
     * @dev Returns `maxTotalSupply` limit.
     */
    function maxTotalSupply() external view returns (uint256) {
        return _maxTotalSupply;
    }

    /**
     * @dev Overridden `transfer` method.
     *
     * Requirements:
     * - `to` must not be blacklisted,
     * - `msgSender()` must not be blacklisted.
     */
    function transfer(
        address to_,
        uint256 amount_
    )
        public
        override
        returns (bool)
    {
        return super.transfer(to_, amount_);
    }

    /**
     * @dev Overridden `transferFrom` method.
     *
     * Requirements:
     * - `from` must not be blacklisted,
     * - `to` must not be blacklisted,
     * - `msgSender()` must not be blacklisted.
     */
    function transferFrom(
        address from_,
        address to_,
        uint256 amount_
    )
        public
        override
        returns (bool)
    {
        return super.transferFrom(from_, to_, amount_);
    }

    /**
     * @dev Pause contract.
     *
     * Requirements:
     * - must be called by owner account.
     */
    function pauseContract() external onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause contract.
     *
     * Requirements:
     * - must be called by owner account.
     */
    function unpauseContract() external onlyOwner {
        _unpause();
    }
}

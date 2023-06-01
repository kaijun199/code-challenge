pragma solidity ^0.8.0;
pragma solidity ^0.8.0;

contract TokenBalanceUtility {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] memory tokenAddresses) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](tokenAddresses.length);

        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            address token = tokenAddresses[i];
            balances[i] = TokenBalance({
                token: tokenAddresses[i],
                balance: IERC20(token).balanceOf(wallet)
            });
        }

        return balances;
    }
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

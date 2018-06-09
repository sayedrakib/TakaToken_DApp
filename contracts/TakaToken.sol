pragma solidity ^0.4.17;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract TakaToken is StandardToken {
  string public name = "TakaToken";
  string public symbol = "Taka";
  uint8 public decimals = 2;
  uint public INITIAL_SUPPLY = 10000;

  function TakaToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
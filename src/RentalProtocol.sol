// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/token/ERC20/IERC20.sol";


contract RentalContract {

    struct Property {
        address houseOwner;
        address renter;
        uint256 depositAmount;
        uint256 availableDepositAmount;
        uint256 rentAmount;
        uint256 dayOfRent;
        uint256 months;
        uint256 startTime;
        IERC20 token;
    }

	mapping(address => mapping(uint256 => Property)) public properties;
	mapping(address => uint256) public count;
	
	// events
    event PropertyPosted(uint256 id);
    event Deposited(address indexed renter, uint256 depositAmount);
    event RentPaid(address indexed renter, uint256 rentAmount);
	
    // posts property
	function postProperty(uint256 depositAmount, uint256 rentAmount, address tokenAddress) external returns (uint256) {

		uint256 id = count[msg.sender];

		Property storage property = properties[msg.sender][id];
		property.token = IERC20(tokenAddress);
		property.houseOwner = msg.sender;
		property.depositAmount = depositAmount;
		property.availableDepositAmount = depositAmount;
		property.rentAmount = rentAmount;
		property.dayOfRent = 1;
		property.months = 11;
		property.startTime = block.timestamp;
		
		emit PropertyPosted(id);
		
		count[msg.sender] += 1;

		return id;
	}

    // Pays security deposit DST-20 tokens into the rental protocol
    function paySecuritydeposit(address houseOwner, uint256 id) external {
        //uint256 deposit = properties[houseOwner][id].depositAmount;
		properties[houseOwner][id].token.transferFrom(msg.sender, address(this), properties[houseOwner][id].depositAmount);
		
		properties[houseOwner][id].renter = msg.sender;
		
		emit Deposited(msg.sender, properties[houseOwner][id].depositAmount);
    }

    // Pay DST-20 tokens as rent to the owner
    function payRent(address houseOwner, uint256 id) external {
        uint256 rentAmount = properties[houseOwner][id].rentAmount;

        address renter = properties[houseOwner][id].renter;

        require(renter == msg.sender, "Invalid renter");
		
		properties[houseOwner][id].token.transfer(houseOwner, rentAmount);
		
		emit RentPaid(msg.sender, rentAmount);
    }

    // Claim deposited DST-20 tokens
    //function claimDeposit() external {
	//	token.transfer(renter, availableDepositAmount);
    //}
	//
    //// Claim rent from deposit
    //function claimRentFromDeposit() external {
	//	require(availableDepositAmount != 0, "Insufficient deposit amount to claim rent");
	//	
	//	uint256 amount = rentAmount;
	//	
	//	if (availableDepositAmount < rentAmount) {
	//		amount = availableDepositAmount;
	//	}
	//	
	//	token.transfer(renter, rentAmount);
	//	
	//	availableDepositAmount = availableDepositAmount - amount;
    //}
}
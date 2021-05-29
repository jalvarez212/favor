
pragma solidity >=0.4.22 <0.9.0;

/**
 * @title Storage_test
 * @dev Store & retrieve value in a variable
 */

contract Storage_test {

    string favor = 'adcjdsbjdh';

    function store(string memory request) public {
        favor = request;
    }

    function retrieve() public view returns (string memory){
        return favor;
    }
}

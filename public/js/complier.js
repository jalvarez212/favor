
var contract =

'pragma solidity >=0.4.22 <0.9.0;'+

'contract Storage {'+

    `string favor = ${param};`+

    'function store(string memory request) public {'+
        'favor = request;'+
    '}'+


    'function retrieve() public view returns (string memory){'+
        'return favor;'+
    '}'+
'}'
;

# favor
Social dapp built on Ethereum. Users publish favors to smart contracts. Doing or receiving a favor that is confirmed by contract exposes keys and opens up lines of interaction between addresses.  

The application only facilitates the writing and reading of smart contracts and is not intended to store any data. The goal is to keep it lightweight and handle most things on the client.  

The application compiles a solidity contract using the users custom input to create the favor contract and sends it to the client. Once compiled and sent, the user is prompted to publish contract using wallet.

The owners of the contract can then read from the contract to populate the profile page. Owners will also be able to update their contract and interact with friends from profile page.   


### USAGE

Run `node app.js` in terminal from project directory. Then navigate to http://localhost:3000/ in your browser.

For best experience use Firefox or Chrome with web3 extension and mobile device emulator enabled.


### CURRENT LIMITATIONS

1. Currently there is no easy way to share favors/requests with others.
2. Messaging and interaction between friends not built yet.
3. Favor verification from smart contract not designed yet.
4. Data on the smart contract is not encrypted

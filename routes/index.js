var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();

var param;
var solc = require('solc');






app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'favor' });


});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Profile' });
});

router.post('/api', (request, response) => {
  console.log('I got a new request!');
  param = request.body.Favor_1;


var input = {
  language: 'Solidity',
  sources: {
    'Storage_test.sol': {
      content:   `pragma solidity >=0.4.22 <0.9.0;

      /**
       * @title Storage_test
       * @dev Store & retrieve value in a variable
       */

      contract Storage_test {

          string favor = ${JSON.stringify(param)};

          function store(string memory request) public {
              favor = request;
          }

          function retrieve() public view returns (string memory){
              return favor;
          }
      }`
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output.contracts);
response.send(output.contracts)


});




module.exports = router;

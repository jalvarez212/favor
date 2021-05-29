var Web3 = require('web3');
var myContract = require('./build/contracts/Storage_test.json')
var address = "0x1f44637eaE96B392daeB268d7587e9Ef4fAA846F";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

var port = process.env.PORT || 3000;

var solc = require('solc');

console.log(solc);

const changeNum = async () => {
  const web3 = new Web3('https://rinkeby.infura.io/v3/8aa0a38978ed446fad3e8cc015637b6f');
  const id = await web3.eth.net.getId();
  const deployedNetwork = myContract.networks[id];
  const contract = new web3.eth.Contract( myContract.abi, deployedNetwork.address);
  const wallet = await web3.eth.accounts.wallet.add('8fc27cc16fe0029697826fab6f4ea565e14aa4fc842463c55f47ac9053db4976');

  await contract.methods.store('I need 14th').send({
    from: wallet.address,
    gas: 300000

  })
  .on('transactionHash', function(hash){
    console.log('Transaction Hash:'+hash);

  })
  .on('confirmation', function(confirmationNumber, receipt){

  })
  .on('receipt', function(receipt){
    // receipt example
    console.log(receipt);
  })
  .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.

});

}


const viewNum = async () => {
  const web3 = new Web3('https://rinkeby.infura.io/v3/8aa0a38978ed446fad3e8cc015637b6f');
  const id = await web3.eth.net.getId();
  const deployedNetwork = myContract.networks[id];
  const contract = new web3.eth.Contract( myContract.abi, deployedNetwork.address);
  const wallet = await web3.eth.accounts.wallet.add('8fc27cc16fe0029697826fab6f4ea565e14aa4fc842463c55f47ac9053db4976');

//   await contract.methods.store(777).send({
//     from: wallet.address,
//     gas: 300000
//
//   })
//   .on('transactionHash', function(hash){
//     console.log('Transaction Hash:'+hash);
//
//   })
//   .on('confirmation', function(confirmationNumber, receipt){
//
//   })
//   .on('receipt', function(receipt){
//     // receipt example
//     console.log(receipt);
//   })
//   .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//
// });



var getData = await contract.methods.retrieve().call();

console.log(getData);



}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/js', express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





app.listen(port);

module.exports = app;





// set provider for all later instances to use
//Contract.setProvider('wss://rinkeby.infura.io/ws/v3/8aa0a38978ed446fad3e8cc015637b6f');
//var contract = new Contract([jsonInterface], address);

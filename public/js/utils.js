// document object model definitions
  	var q = document.getElementById('subdomain');
  	var btn = document.getElementById('btn');
  	var element = document.querySelector('.content');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var element1 = document.querySelector('.content1');
    var element2 = document.querySelector('.content2');
    var element3 = document.querySelector('.content3');
  	var bottom = document.querySelector('.bottomsheet');
  	var progress = document.querySelector('.progress');
  	var progress1 = document.querySelector('.progress1');
  	var progress2 = document.querySelector('.progress2');
    var back = document.querySelector('.back');
    var metamask = document.querySelector('#metamask');
    var metamaskText = document.querySelector('#metamaskText');
    var status = document.querySelector('#status');
    var statusText = document.querySelector('#statusText');
    var favorList= document.querySelector('#favor');

var art = document.querySelector('.art');
var contract;

 async function postData(){
    await fetch('/api', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        //'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(localStorage)
    })  .then(response => response.json())
  .then(function(data){
    console.log(data);
    contract = data;

  });

}





// functions
// app methods
  function getFavor() {
        localStorage.setItem('Favor_1', q.value);
        console.log(JSON.stringify(localStorage.Favor_1));
        postData();




        //settimeout hides h1 text until animation is ready for next content
        setTimeout(function(){
        element1.style.display = 'flex';
        element.style.display = 'none';
         }, 300);
        progress.style.display = 'none';
        progress1.style.display = 'flex';
        back.style.display = 'flex';
        animate(bottom);
        if(q.style.display == 'flex'){
            back.style.display = 'none';
            progress.style.display = 'flex';
            progress1.style.display = 'none';
        }


        storeFavor();
      }

  function storeFavor(){
        var favor_1 = document.querySelector('.nameValue');


  }


  function connectWallet(){
          //settimeout hides h1 text until animation is ready for next content
          setTimeout(function(){
          element2.style.display = 'flex';
          element1.style.display = 'none';
           }, 300);
          progress1.style.display = 'none';
          progress2.style.display = 'flex';
          back.style.display = 'flex';
          animate(bottom);
          pullFavors();

  }

  function pullFavors(){
    favorList.append("✅ "+localStorage.Favor_1)

  }





  function animate(x){
        //animate the bottom sheet holding the onboarding content/input in an up and down animation
        x.style.top = '100%';
        setTimeout(function(){ x.style.top = '15%'; }, 500);

      }

  function checkWeb3(){
        if (window.ethereum) {
          //window.web3 = new Web3(ethereum);
          try {
            // Request account access if needed
            ethereum.enable();
            connectWallet();



          } catch (error) {
           alert('Please enable web3 to use this application');
            // User denied account access…
          }
        } else if (window.web3) {
          // Legacy dapp browsers…
          window.web3 = new Web3(web3.currentProvider);
        } else {
          // Non-dapp browsers…
          alert('Please web3 enabled browser to use this application');
          console.log(
            'Non-Ethereum browser detected. You should consider trying Status!'
          );
        }
        console.log(web3);
       }




// animations
q.addEventListener('click', function (event) {
  				btn.style.backgroundColor = '#01033A';
  				btn.style.color = '#fff';
  				btn.style.pointerEvents = 'auto';
  				btn.style.transition = 'all 0.5s ease-out';
          q.style.color = '#000';
          q.style.transition = 'all 0.5s ease-out';

  			 });

btn1.addEventListener('click',
       				function(){
                if(contract != null){
                  element2.style.display = 'none';
                  progress2.style.display = 'none';
                  bottom.style.top = '100%';
                  back.style.display = 'none';
                  setTimeout(function(){ art.style.opacity = 1;}, 100);

                  const transactionParameters = {
                    nonce: '0x00', // ignored by MetaMask
                    // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
                    // gas: '0x2710', // customizable by user during MetaMask confirmation.
                    from: ethereum.selectedAddress, // must match user's active address.
                    value: '0x00', // Only required to send ether to the recipient from the initiating external account.
                    data:
                      contract["Storage_test.sol"].Storage_test.evm.bytecode.object, // Optional, but used for defining smart contract creation and interaction.
                    chainId: '0x4', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
                  };

                  // txHash is a hex string
                  // As with any RPC call, it may throw an error
                  ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                  })
                  .then((result) => {
                    console.log(result.options);
                    element3.style.display = 'flex';
                    setTimeout(function(){ art.style.opacity = 1;}, 100);

                  })
                  .catch((error) => {
                    alert('Uh oh, something went wrong with your transaction. Try again.')
                  });



                }
              else{
                  alert('There was an error compiling your request. Please refresh.')
                }

    });


btn.addEventListener('click', getFavor);
function goprofile(){
  //window.location = '/profile';
  console.log('wtf');
};

btn2.addEventListener('click', goprofile);

back.addEventListener('click', function(){
  		if (element1.style.display == 'flex'){
  				//settimeout hides h1 text until animation is ready for next content
  				setTimeout(function(){ element1.style.display = 'none'; element.style.display = 'flex';}, 300)
  				progress.style.display = 'flex';
  				progress1.style.display = 'none';
  				back.style.display = 'none';
  				animate(bottom);
  		}
    });

    // status.addEventListener('click', function(){
    //   checkWeb3();
    // });
    statusText.addEventListener('click', function(){
      checkWeb3();
    });
    metamask.addEventListener('click', function(){
      checkWeb3();
    });
    metamaskText.addEventListener('click', function(){
      checkWeb3();
    });


// document object model definitions
  	var el = document.getElementById('subdomain');
  	var btn = document.getElementById('btn');
  	var q1 = document.querySelector('.content');
    var btn1 = document.getElementById('btn1');
    var q2 = document.querySelector('.content1');
  	var bottom = document.querySelector('.bottomsheet');
  	var progress = document.querySelector('.progress');
  	var progress1 = document.querySelector('.progress1');
  	var progress2 = document.querySelector('.progress2');


// functions



// animations
  	el.addEventListener('click', function (event) {
  				btn.style.backgroundColor = '#01033A';
  				btn.style.color = '#fff';
  				btn.style.pointerEvents = 'auto';
  				btn.style.transition = 'all 0.5s ease-out';
          el.style.color = '#000';
          el.style.transition = 'all 0.5s ease-out';

  			 });


  	document.getElementById('btn').addEventListener('click', getName);

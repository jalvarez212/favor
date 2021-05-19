  	//definitions for interactive elements
  	var easy = document.getElementById('easy');
  	var medium = document.getElementById('medium');
  	var hard = document.getElementById('hard');
  	var extreme = document.getElementById('extreme');
  	var easy_active = document.getElementById('easy_active');
  	var medium_active = document.getElementById('medium_active');
  	var hard_active = document.getElementById('hard_active');
  	var extreme_active = document.getElementById('extreme_active');

  	var el = document.getElementById('subdomain');
  	var elKg = document.getElementById('subdomain1');
  	var btn = document.getElementById('btn');
  	var btn1 = document.getElementById('btn1');
  	var btn2 = document.getElementById('btn2');
  	var el1 = document.querySelector('#content1');
  	var el2 = document.querySelector('#content2');
  	var q1 = document.querySelector('.content');
  	var bottom = document.querySelector('.bottomsheet');
  	var el3 = document.querySelector('#content3');
  	var progress = document.querySelector('.progress');
  	var progress1 = document.querySelector('.progress1');
  	var progress2 = document.querySelector('.progress2');
  	var art = document.querySelector('.art');
  	var text = document.querySelector('.text');
  	var back = document.querySelector('.back');



  	//event listeners
  	back.addEventListener('click', function(){
  		if (el1.style.display == 'flex'){
  				//settimeout hides h1 text until animation is ready for next content
  				setTimeout(function(){ el1.style.display = 'none'; q1.style.display = 'flex';}, 300)
  				progress.style.display = 'flex';
  				progress1.style.display = 'none';
  				back.style.display = 'none';
  				animate(bottom);


  		}

  		if (el2.style.display == 'flex'){
  			//settimeout hides h1 text until animation is ready for next content
  				el2.style.display = 'none';
  				setTimeout(function(){
  				el1.style.display = 'flex';



  				}, 300)
  				progress1.style.display = 'flex';
  				progress2.style.display = 'none';
  				animate(bottom);

  		}
  	} )
  	easy.addEventListener('load', function(){easy.style.opacity = 1})
  	easy.addEventListener('click', function(){
  		if(easy.style.opacity == 0){
  			easy.style.opacity = 1;
  			easy_active.style.opacity = 0;
  		}
  		else{
  			easy.style.opacity = 0;
  			easy_active.style.opacity = 1;
  			medium_active.style.opacity = 0;
  			hard_active.style.opacity = 0;
  			extreme_active.style.opacity = 0;
  			extreme.style.opacity = 1;
  			medium.style.opacity = 1;
  			hard.style.opacity = 1;}
  	})

  	medium.addEventListener('load', function(){medium.style.opacity = 1})
  	medium.addEventListener('click', function(){
  		if(medium.style.opacity == 0){
  			medium.style.opacity = 1;
  			medium_active.style.opacity = 0;
  		}
  		else{
  			medium.style.opacity = 0;
  			medium_active.style.opacity = 1;
  			easy_active.style.opacity = 0;
  			hard_active.style.opacity = 0;
  			extreme_active.style.opacity = 0;
  			easy.style.opacity = 1;
  			hard.style.opacity = 1;
  			extreme.style.opacity = 1;
  		}
  	})

  	hard.addEventListener('load', function(){hard.style.opacity = 1})
  	hard.addEventListener('click', function(){
  		if(hard.style.opacity == 0){
  			hard.style.opacity = 1;
  			hard_active.style.opacity = 0;
  			}
  		else{
  			hard.style.opacity = 0;
  			hard_active.style.opacity = 1;
  			easy_active.style.opacity = 0;
  			medium_active.style.opacity = 0;
  			extreme_active.style.opacity = 0;
  			easy.style.opacity = 1;
  			medium.style.opacity = 1;
  			extreme.style.opacity = 1;
  			}
  	})


	extreme.addEventListener('load', function(){extreme.style.opacity = 1})
  	extreme.addEventListener('click', function(){
  		if(extreme.style.opacity == 0){
  			extreme.style.opacity = 1;
  			extreme_active.style.opacity = 0;
  			}
  		else{
  			extreme.style.opacity = 0;
  			extreme_active.style.opacity = 1;
  			easy_active.style.opacity = 0;
  			medium_active.style.opacity = 0;
  			hard_active.style.opacity = 0;
  			easy.style.opacity = 1;
  			medium.style.opacity = 1;
  			hard.style.opacity = 1;
  			}
  		} )



  	el.addEventListener('click', function (event) {
  				btn.style.backgroundColor = '#01033A';
  				btn.style.color = '#fff';
  				btn.style.pointerEvents = 'auto';
  				btn.style.transition = 'all 0.5s ease-out';

  			 });
  	elKg.addEventListener('click', function (event) {
  				btn1.style.backgroundColor = '#01033A';
  				btn1.style.color = '#fff';
  				btn1.style.pointerEvents = 'auto';
  				btn1.style.transition = 'all 0.5s ease-out';

  			 });
  	hard.addEventListener('click', function (event) {
  				btn2.style.backgroundColor = '#01033A';
  				btn2.style.color = '#fff';
  				btn2.style.pointerEvents = 'auto';
  				btn2.style.transition = 'all 0.5s ease-out';
  				getmode(hard);

  			 });
  	easy.addEventListener('click', function (event) {
  				btn2.style.backgroundColor = '#01033A';
  				btn2.style.color = '#fff';
  				btn2.style.pointerEvents = 'auto';
  				btn2.style.transition = 'all 0.5s ease-out';
  				getmode(easy);

  			 });
  	medium.addEventListener('click', function (event) {
  				btn2.style.backgroundColor = '#01033A';
  				btn2.style.color = '#fff';
  				btn2.style.pointerEvents = 'auto';
  				btn2.style.transition = 'all 0.5s ease-out';
  				getmode(medium);

  			 });
  	extreme.addEventListener('click', function (event) {
  				btn2.style.backgroundColor = '#01033A';
  				btn2.style.color = '#fff';
  				btn2.style.pointerEvents = 'auto';
  				btn2.style.transition = 'all 0.5s ease-out';
  				getmode(extreme);

  			 });

  	document.getElementById('btn').addEventListener('click', getName);
  	document.getElementById('btn1').addEventListener('click', getKg);
  	document.getElementById('btn2').addEventListener('click',
  				function(){
  					el2.style.display = 'none';
  					el3.style.display = 'flex';
  					progress2.style.display = 'none';
  					bottom.style.top = '100%';
  					back.style.display = 'none';
  					setTimeout(function(){ art.style.opacity = 1; text.style.opacity = 1; }, 100);
  					 });

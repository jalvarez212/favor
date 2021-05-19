 	// app methods
  	function getName() {
  				localStorage.setItem('Favor_1', el.value);
  				console.log(localStorage);
  				//settimeout hides h1 text until animation is ready for next content
  				setTimeout(function(){
  				el1.style.display = 'flex';
  				q1.style.display = 'none';
  			   }, 300);
  				progress.style.display = 'none';
  				progress1.style.display = 'flex';
  				animate(bottom);
  				back.style.display = 'flex';

          storeName();
  			}

    function storeName(){
          var favor_1 = document.querySelector('.nameValue');
          favor_1.innerText = `${localStorage.name}`+'?'

    }

  	function getKg() {
  				//set local storage and display next onboarding element
  				localStorage.setItem('Kg', elKg.value);
  				console.log(localStorage);
  				setTimeout(function(){
  					el1.style.display = 'none';
  					el2.style.display = 'flex';
  				}, 300);

  				progress1.style.display = 'none';
  				progress2.style.display = 'flex';
  				//hide  tiles
  				easy.style.opacity = 0;
  				medium.style.opacity = 0;
  				hard.style.opacity = 0;
  				extreme.style.opacity = 0;
  				easy_active.style.opacity = 0;
  				medium_active.style.opacity = 0;
  				hard_active.style.opacity = 0;
  				extreme_active.style.opacity = 0;
  				// set tiles to display after the bottom sheet animates
  				setTimeout(function(){
  				easy.style.opacity = 1;
  				medium.style.opacity = 1;
  				hard.style.opacity = 1;
  				extreme.style.opacity = 1;
  				}, 700)
  				animate(bottom);
  				back.style.display = 'flex';

  			}

  	function getmode(x){
  				//set local storage and display final onboarding element
  				localStorage.setItem('mode', x.id);
  				console.log(localStorage);
  				//bottom.style.top = '100%';

  	}

  	function animate(x){
  				//animate the bottom sheet holding the onboarding content/input in an up and down animation
  				x.style.top = '100%';
  				setTimeout(function(){ x.style.top = '15%'; }, 500);

  			}

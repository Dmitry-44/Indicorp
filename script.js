/*  MENU MOBILE  */

const navbar = document.getElementById('navbar-collaps');
const navbarToggler = document.getElementById('navbar-toggler');



navbarToggler.addEventListener('click', function(){

  var handlerOpen = function(){
    navbar.classList.remove('enter-active');
    navbar.removeEventListener('transitionend', handlerOpen)
  }


  var handlerHide = function(){
    navbar.style.display="none";
    navbar.classList.remove('leave-active');
    navbar.classList.add('hide');
    navbar.removeEventListener('transitionend', handlerHide)
  }


  if (navbar.classList.contains('hide')){

    navbar.style.display="flex";
    navbar.classList.remove('hide');
    navbar.classList.add('enter');
  
    setTimeout(function(){
      navbar.classList.add('enter-active');
      navbar.classList.remove('enter');
    }, 100)
  
    navbar.addEventListener('transitionend', handlerOpen)

  } else {
    navbar.classList.add('leave-active');
    navbar.addEventListener('transitionend', handlerHide);

  }

 
})



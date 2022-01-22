const btnHamburguer = document.querySelector('#btnHamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has_fade');

btnHamburguer.addEventListener('click', function(){
  console.log('click Hamburguer');

  if(header.classList.contains('open')){
    header.classList.remove('open');
    fadeElems.array.forEach(function(element){
      element.classList.add('fade_out');
      element.classList.remove('fade_in');
    });
  }
  else {
    header.classList.add('open');
    fadeElems.array.forEach(function(element){
      element.classList.remove('fade_out');
      element.classList.add('fade_in');
    });
  }
});

function mostrarPrimerForm() {
  $('.comenzar').addClass('mostrar');
  $('.comenzar__envoltura').addClass('mostrar');
}

function cerrarPrimerForm() {
  $('.comenzar').removeClass('mostrar');
  $('.comenzar__envoltura').removeClass('mostrar');
}
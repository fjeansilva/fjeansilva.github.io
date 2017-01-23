(function(){
  document.querySelector('.header__hamburguer').addEventListener('click', function(e){
    document.querySelector('.header__menu').classList.toggle('header__menu--open');
    e.stopPropagation();
  });
})();

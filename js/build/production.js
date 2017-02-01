(function(){
  document.querySelector('.header__hamburguer').addEventListener('click', function(e){
    document.querySelector('.header__menu').classList.toggle('header__menu--open');
    e.stopPropagation();
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    document.querySelector('.header__menu').classList.toggle('header__menu--open');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

})();

function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();




//
$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('img').each(function() {
    var imgPosition = $(this).offset().top;
    if (scrollY > imgPosition - windowH) {
      $(this).addClass("img-blur");
    }
  });
});



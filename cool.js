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


window.onload = function(){
document.querySelector('.cont_modal').className = "cont_modal";
}
var c = 0;
function open_close(){
  if(c % 2 == 0){
document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
c++;
  }else {
document.querySelector('.cont_modal').className = "cont_modal";
c++;
  }
}

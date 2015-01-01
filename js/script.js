var isOpen = false;
function toggleNav(){
  if (!isOpen){
    $('#outer-nav-control').attr('data-icon','close');
    isOpen = true;
    $('#bar-1,#bar-3').addClass('hide-hamburger-line');
    $('#bar-2').addClass('bar-2-x');
    $('#bar-4').addClass('bar-4-x');

	$("#links").removeClass("hidden");
  } else {
    $('#outer-nav-control').attr('data-icon','hamburger');
    isOpen = false;
    $('#bar-1,#bar-3').removeClass('hide-hamburger-line');
    $('#bar-2').removeClass('bar-2-x');
    $('#bar-4').removeClass('bar-4-x');


	$("#links").addClass("hidden");
  }
}
$('.navigation').click(function(){
  toggleNav();
});

$('.navigation').addEventListener('touchstart', function(event) {
    toggleNav();
}, false);

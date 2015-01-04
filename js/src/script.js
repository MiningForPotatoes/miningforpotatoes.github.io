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

$(".bar").mouseenter(function(){
    $("img.logo").addClass("hover");
});

$(".bar").mouseleave(function(){
    $("img.logo").removeClass("hover");
});


$(function () {
    var platform = navigator.platform.toLowerCase();
    if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
        if ($.browser.webkit) {
             $.srSmoothscroll({
                // defaults
                step: 55,
                speed: 400,
                ease: 'swing'
            });
        }
    }
});

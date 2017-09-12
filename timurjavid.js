$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) 
    {
        $(".navbar-fixed-top").addClass("top-navbar-collapse");
        $(".navbar-nav").addClass("transparentnav");
    } 
    else 
    {
        $(".navbar-fixed-top").removeClass("top-navbar-collapse");
        $(".navbar-nav").removeClass("transparentnav");
    }
});

(function(){

  var parallax = document.querySelectorAll(".header"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(masthead).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).on('click', '.navbutton', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 750);
});


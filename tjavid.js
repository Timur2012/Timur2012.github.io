$(document).ready(function () {

    $('button').click(function () {
        $(this).toggleClass('expanded');
        $('.mobile > div').slideToggle(400);
    });
    
    $(window).scroll(function () {
        if ($(body).offset().top > 100) {
            $(".nav").addClass(".navscroll");
        } else {
            $(".nav").removeClass(".navscroll");
        }
    });

    $('.mobilelink').click(function () {
        $('button').toggleClass('expanded');
        $('.mobile > div').slideToggle(400);
    })

    //    $('.navbar-brand').hover(function(){
    //        $(".mobile").css("background-color","white");
    //        
    //    }, function(){
    //        $('.mobile').css("background-color", "#AB41D8");
    //    })
    //    

    $(".jumbotron > h1").typeIt({
            speed: 50,
        })

        .tiType("Hi,")
        .tiPause(400)
        .tiType(" I'm Timur Javid")

    $(window).scroll(function () {
        $(".jumbotron > h1").css("opacity", 1 - $(window).scrollTop() / 500);
        $(".jumboimage").css("opacity", .6 - $(window).scrollTop() / 1000);
    })

    $(document).on('click', '.anchor', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    var shiftWindow = function () {
        scrollBy(0, 0)
    };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);

    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".nav").toggleClass("fixedbar");
            }
        });
    }

});

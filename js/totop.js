/* =====  to-top =====*/
    $(window).scroll(function () {

        var scroll = $(this).scrollTop();

        if (scroll > 600) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }

    })
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    })

$(document).ready(function () {

    var $header = $('header')
    var $nav = $('.animation')

    var fixed = false;

    function fixedNav() {
        if (scrollY >= $header.innerHeight() && !fixed) {
            $nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1,
               
            }, 1000)
            fixed = true;
        } else if (scrollY < $header.innerHeight() && fixed) {
            $nav.animate({
                opacity: 0,
                mtop: 55,
                
            }, 1000, function () {
                $nav.removeClass('fixed-top').css('opacity', 1)
            })
            fixed = false;
        };
    }
    $(window).on('scroll', fixedNav);
    fixedNav()
    console.log(scrollY);

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active');

        var id = $(this).addClass('active').attr('href'); // belgilagan link
        var target = $(id).offset().top + 155; /// 1000 , 70 , 80 

        $('html, body').animate({
            scrollTop: target,
        }, 1000)

    })

    // $(window).scroll(function () {

    //     var scroll = $(this).scrollTop(); ///  0 - 2000

    //     $links.each(function () {

    //         var target = $(this).attr('href'); // belgilagan link
    //         var selector = $(target).offset().top + 130; /// 1000 , 70 , 80 

    //         if (scroll >= selector) {
    //             $links.removeClass('active')
    //             $(this).addClass('active')
    //         }
    //     })
    //     // console.log(target);
    // })
})
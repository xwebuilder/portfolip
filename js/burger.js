$(document).ready(function () {
    let $burger = $('.burger');
    let $menu = $('.header_menu');
    let $menu_top = $('.nav');
    let $closed = $('#closed');
    let $links = $('.header_links');
    // 

    //
    $burger.click(function () {
        if ($menu.css('right') == '-400px' || $menu_top.hasClass('fixed_top')) {
            $menu_top.removeClass('fixed_top');
            $menu.animate({
                right: 0,
            });
        }

        // else {
        //     $menu.animate({
        //         right: '-400px'
        //     });
        // }

    });

    // // /*  */ //

    $closed.click(function () {
        if ($menu.css('right') == '0px' || $menu_top.hasClass('fixed_top')) {
            $menu_top.addClass('fixed_top');
            $menu.animate({
                right: '-400px',
            });
        }
    });

    // /*  */ //
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(); ///  0 - 2000
        $links.each(function () {
            var target = $(this).attr('href'); // belgilagan link
            var selector = $(target).offset().top - 150; /// 1000 , 70 , 80 
            if (scroll >= selector) {
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })
        // console.log(target);
    })
    $links.click(function (e) {
        e.preventDefault();
        var $id = $(this).attr('href');
        let $target = $($id).offset().top-20;
        $('html, body').animate({
            scrollTop: $target,
        }, 2000)
    })

});

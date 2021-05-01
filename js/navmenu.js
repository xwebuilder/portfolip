$(document).ready(function () {

    var $header = $('header')
    var $nav = $('.header_menu')
    var $links = $('.header_links');

    var fixed = false;

    function fixedNav() {
        if (scrollY >= $header.innerHeight() && !fixed) {
            $nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1,
            }, 2000)
            fixed = true;
        } else if (scrollY < $header.innerHeight() && fixed) {
            $nav.animate({
                opacity: 0,
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
        var target = $(id).offset().top + 10; /// 1000 , 70 , 80 

        $('html, body').animate({
            scrollTop: target,
        }, 1000)

    })

    $(window).scroll(function () {

        var scroll = $(this).scrollTop(); ///  0 - 2000

        $links.each(function () {

            var target = $(this).attr('href'); // belgilagan link
            var selector = $(target).offset().top - 10; /// 1000 , 70 , 80 

            if (scroll >= selector) {
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })
        // console.log(target);
    })





    /*  */
    /* ===== filteColor ===== */
    $(document).ready(function () {
        function filteColor(color) {
            $('.js-filter-card').not(color).slideUp();
            $('.js-filter-card').filter(color).slideDown();
        }


        $('.btn-danger').click(function () {
            filteColor('.bg-danger')
        })

        // ====== 
        $('.btn-primary').click(function () {
            filteColor('.bg-primary')
        })
        // ====== 
        $('.btn-success').click(function () {
            filteColor('.bg-success')
        })


        $('.btn-dark').click(function () {
            $('.js-filter-card').slideDown()
        })

    })
    /*  */

});


/* ===== */
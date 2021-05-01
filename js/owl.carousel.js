$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        // dots: true,
        // dotsEach: true,
        // dotsDate: true,
        // mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            320: {
                items: 1,
            },
            576: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });


    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});
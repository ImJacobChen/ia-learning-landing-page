$(document).ready(function(){
    $('.carousel__slides').slick({
        //autoplay: true,
        dots: true,
        appendDots: $('.carousel__navigation'),
        appendArrows: $('.carousel__navigation'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        mobileFirst: true,
        adaptiveHeight: true,
    });

    initDropdowns();

    /** Return to top button */
    $('#footer__return-to-top').click(function() {
        $("html, body").animate({ scrollTop: "0px" });
    });

    /** Toggle overlay menu */
    $('.nav__bottom__menu-button').on('click', function() {
        $('.overlay-menu').toggleClass('active');
    });

    $('.overlay-menu__close-button').on('click', function() {
        $('.overlay-menu').toggleClass('active');
    });

    /** Sticky header */
    $('.nav').headroom({
        "offset": 33,
        "tolerance": 5,
    });
});
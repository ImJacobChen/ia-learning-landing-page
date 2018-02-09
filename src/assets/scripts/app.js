$(document).ready(function(){
    $('.carousel__slides').slick({
        // autoplay: true,
        dots: true,
        appendDots: $('.carousel__navigation'),
        appendArrows: $('.carousel__navigation'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
});
$(function () {
    $('.mainslider .slider').slick({
        // autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '175px'
    });

    $('.mainslider .arrows i:nth-child(1)').on('click', function () {
        $('.mainslider .slider').slick('slickPrev')
    });

    $('.mainslider .arrows i:nth-child(2)').on('click', function () {
        $('.mainslider .slider').slick('slickNext')
    });
})
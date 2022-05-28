$(function(){
    $('.top_banner button').on('click', function(){
        $('.top_banner').toggleClass('active')
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnFocus: false,
    })

    $('.num li').on('click', function () {
        var idx = $(this).index();
        console.log(idx);
        $('.move_cat .case ul').css({ top: -450 * idx })
    })
})
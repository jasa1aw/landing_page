
let dotsButton = document.getElementsByClassName("dots")
$('.home-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
});

$('.client-slider-box').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});
export default function Slider() {

    $('.slider').slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        draggable: false,
        autoplaySpeed: 1000
    });
}
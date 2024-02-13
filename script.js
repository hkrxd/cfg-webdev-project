
document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.getElementById('carouselExampleControls');

    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        wrap: true
    });

    carousel.cycle();
});
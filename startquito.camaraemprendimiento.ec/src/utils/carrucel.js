document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.partners-carousel', {
    slidesPerView: 4,
    spaceBetween: 40, // Espacio uniforme entre logos
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});
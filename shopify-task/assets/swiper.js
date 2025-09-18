(function () {
  function initProductSwiper() {
    if (window.__productSwiperInstance) return;

    var swiperEl = document.querySelector(".myProductSwiper");
    if (!swiperEl) return;

    window.__productSwiperInstance = new Swiper(".myProductSwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 1 },
      },
    });
  }

  document.addEventListener("DOMContentLoaded", initProductSwiper);

  document.addEventListener("shopify:section:load", initProductSwiper);
})();

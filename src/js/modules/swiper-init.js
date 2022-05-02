/*Initialize Swiper PRODUCTS*/
var swiper = new Swiper('.swiper-products', {

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

   },

   breakpoints: {
      1200: {
         slidesPerView: 4,
         spaceBetween: 5,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 5,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      576: {
         slidesPerView: 1,
         spaceBetween: 60,
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 60,
      }
   }
});

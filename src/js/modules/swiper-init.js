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
/*Initialize Swiper general / gallery*/
var swiper = new Swiper('.swiper', {

   pagination: {
      el: '.swiper-pagination',
      clickable: true,

   }
});
var swiper = new Swiper('.swiper-reviews', {

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   },
   breakpoints: {
      1200: {
         slidesPerView: 2,
         spaceBetween: 5,
      },
      992: {
         slidesPerView: 2,
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
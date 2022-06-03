$(function () {
   $('.smart-basket__wrapper').smbasket({
      productElement: 'product__element',
      buttonAddToBasket: 'product__add-to-cart-button',


      productQuantityWrapper: 'product__quantity',
      smartBasketMinArea: 'header__basket-min',
      countryCode: '+38',
      smartBasketCurrency: 'грн',
      smartBasketMinIconPath: './img/header/shopping-basket-wight.svg',

      agreement: {
         isRequired: true,
         isChecked: true,

      },
      nameIsRequired: false,
   });
});
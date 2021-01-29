$(function(){

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider-dots',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow right">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow right">',
  });

  $('.slider-dots').slick({
    asNavFor: '.header__slider',
    slidesToShow: 4,
    slidesToScroll: 4,
  });


  
});
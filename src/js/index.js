require('slick-carousel')


$(document).ready(function () {
  $('.about__slick').slick({
    fade: true,
    prevArrow: '<svg class="about__icon about__icon--prev"><use href="assets/components/sprites.svg#icon-arrow-left2">',
    nextArrow: '<svg class="about__icon about__icon--next"><use href="assets/components/sprites.svg#icon-arrow-right2">',
  })
})
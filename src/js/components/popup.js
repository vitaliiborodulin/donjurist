//popup
$('.popup').on('click', function (e) {
  e.preventDefault();
  $('.popup-overlay').show();
  $('body').css('overflow', 'hidden');
});

$('.popup-form__close').on('click', function (e) {
  $('.popup-overlay').hide();
  $('body').css('overflow', 'initial');
});

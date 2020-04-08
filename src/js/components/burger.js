//header-menu burger
$('.burger').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger--close');
  $('.header-menu').toggleClass('header-menu--open');
});

$('.faq-box .faq-question').on('click', function(){
  var answer = $(this).next();

  $('.faq-answer:visible').not(answer).slideUp(200);
  answer.slideToggle(200);
})

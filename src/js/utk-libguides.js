// overrides standard display of book cover alt attribute
$(document).ready(function() {
  $('.s-lg-book-cover img').each(function() {
    var altText = $(this).closest('.s-lg-book').find('.s-lg-book-title').text()  + ' cover';
    $(this).attr('alt', altText);
  });
});

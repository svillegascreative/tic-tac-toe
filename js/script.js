$(document).ready(function() {

  $('.box').on('click', function() {
    $(this).append('<span>O</span>');
    $('.player-x').toggleClass('goes');
    $('.player-o').toggleClass('goes');
  });


});

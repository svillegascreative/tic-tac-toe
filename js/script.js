$(document).ready(function() {

  $('.box').on('click', function() {
    $(this).addClass('marked');
    $('.player-x').toggleClass('goes');
    $('.player-o').toggleClass('goes');
  });


});

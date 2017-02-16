$(document).ready(function() {


  $('.box').on('click', function() {
    if ( $(this).hasClass('marked') === false ) {
      $(this).addClass('marked');
      $('.player-x').toggleClass('goes');
      $('.player-o').toggleClass('goes');
    }
  });

});

$(document).ready(function() {

  $('.box').on('click', function() {

    if ( $(this).hasClass('marked') === false ) {
      $(this).addClass('marked');
      $('.player-x').toggleClass('goes');
      $('.player-o').toggleClass('goes');

      if ( $('span.player-x').hasClass('goes') === true ) {
        $(this).text('O');
      } else {
        $(this).text('X');
      }

    }

  });


});

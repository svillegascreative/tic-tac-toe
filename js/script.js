$(document).ready(function() {

  $('.box').on('click', function() {

    if ( $(this).hasClass('marked') === false ) {
      $(this).addClass('marked');
      $('.player-x').toggleClass('goes');
      $('.player-o').toggleClass('goes');

      if ( $('span.player-x').hasClass('goes') === true ) {
        $(this).append('<i class="fa fa-glass"></i>');
      } else {
        $(this).append('<i class="fa fa-beer"></i>');
      }

    }

  });


});

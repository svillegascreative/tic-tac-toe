$(document).ready(function() {

  var blur = 0;

  $('.box').on('click', function() {

    if ( $(this).hasClass('marked') === false ) {
      $(this).addClass('marked');
      $('.player-x').toggleClass('goes');
      $('.player-o').toggleClass('goes');
      $('.bg').css('filter', 'blur(' + blur.toString() + 'px)'); // not working
      blur++;

      if ( $('span.player-x').hasClass('goes') === true ) {
        $(this).append('<i class="fa fa-glass"></i>');
      } else {
        $(this).append('<i class="fa fa-beer"></i>');
      }

    }

  });

  $('.reload').on('click', function () {
    location.reload(true);

  });

});

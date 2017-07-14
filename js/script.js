$(document).ready(function() {

  var blur = 0;
  var wins = ['.r1', '.r2', '.r3', '.c1', '.c2', '.c3', '.d1', '.d2']

  function checkIfWinner(player) {
    wins.forEach( function(win) {

      if ( $.each(win, function() {$(win).hasClass(player)} ))
     {console.log(win);};
   })
    winGame();
  };

  function winGame() {
    $('.winner').text('You win!');
  };

  $('.box').on('click', function() {
    if ( $(this).hasClass('marked') === false ) {
      $(this).addClass('marked');
      $('#player-x').toggleClass('goes');
      $('#player-o').toggleClass('goes');
      $('.bg').css('filter', 'blur(' + blur.toString() + 'px)');
      blur++;

      if ( $('#player-x').hasClass('goes')) {
        $(this).append('<i class="fa fa-glass"></i>');
        $(this).addClass('player-o');
        checkIfWinner('player-o');
      } else {
        $(this).append('<i class="fa fa-beer"></i>');
        $(this).addClass('player-x');
        checkIfWinner('player-x');
      }

    }
  });



  $('.reload').on('click', function () {
    location.reload(true);

  });

});

// Copied from CodePen at https://codepen.io/svillegas/pen/KaYKWE

$(document).ready(function() {

  var blur = 0;
  var activePlayer = 'x';
  var markX = '<i class="fa fa-beer"></i>';
  var markO = '<i class="fa fa-glass"></i>';
  var playCounter = 0;
  var winningPlays = [
    $('#box-1, #box-2, #box-3'),
    $('#box-4, #box-5, #box-6'),
    $('#box-7, #box-8, #box-9'),
    $('#box-1, #box-4, #box-7'),
    $('#box-2, #box-5, #box-8'),
    $('#box-3, #box-6, #box-9'),
    $('#box-1, #box-5, #box-9'),
    $('#box-3, #box-5, #box-7')
  ];
  var winner;
  var outcomeText = function() {
    if ( winner === 'x' ) {
      return "Never fear, the beers are here!"
    } else if ( winner === 'o' ) {
      return "Crushin' it with cocktails!"
    } else {
      return "No winner? Must be wine o'clock..."
    }
  }

  function showActivePlayer() {
    $('#player-' + activePlayer).addClass('goes');
  }
  showActivePlayer();

  function switchPlayers() {
    $('#player-x, #player-o').toggleClass('goes');
    if ( activePlayer === 'x' ) {
      activePlayer = 'o';
    } else if ( activePlayer === 'o') {
      activePlayer = 'x';
    }
  }

  function blurBackground() {
    $('.bg').css('filter', 'blur(' + blur.toString() + 'px)');
      blur++;
  }

  function gameOver() {
    $('.box').addClass('marked');
    $('.outcome').text(outcomeText);
    $('.game-over').fadeIn();
  }

  function resetGame() {
    $('.box').removeClass('marked marked-x marked-o');
    $('i').remove();
    if ( winner !== undefined) {
      activePlayer = winner;
    }
    winner = undefined;
    playCounter = 0;
  }


  function checkWin() {
    var playerMark = 'marked-' + activePlayer;
    winningPlays.forEach( function(winSequence) {
      if ( $(winSequence[0]).hasClass(playerMark) && $(winSequence[1]).hasClass(playerMark) && $(winSequence[2]).hasClass(playerMark) ) {
        winner = activePlayer;
        gameOver();
      }
    });

    if ( playCounter === 9 ) {
      gameOver();
      switchPlayers();
    }

    if ( winner === undefined ) {
      switchPlayers();
    }
  }



  // play
  $('.box').on('click', function() {

    if ( $(this).hasClass('marked') === false ) {
      $(this).addClass('marked');
      playCounter++;

      if ( activePlayer === 'x') {
        $(this).append(markX).addClass('marked-x');
      } else if ( activePlayer == 'o' ) {
        $(this).append(markO).addClass('marked-o');
      }

      checkWin();
      blurBackground();
    }

  });

  // reload board
  $('.reload').on('click', function () {
    resetGame();
    $('.game-over').css('display', 'none');
  });

});

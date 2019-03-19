import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';
// import { Game } from './js/Game.js';
import { Timer } from './js/Timer.js';


  $(document).ready(function(){
    const myTimer = new Timer();
    let time = [];
    // $('#output').empty();
    // const myGame = new Game();

    // $(".flashcard").click(function(){
    //   $(this).children().toggle();
    // });
    for (let i = 1; i < 21; i++) {
      $(".answer" + i).css("display","none");
      $("#question-front-" + i).click(function(){
        $("#question-" + i).show();
        $("#question-front-" + i).hide();
        time[i] = setTimeout(function() {
          $(".answer" + i).show();
          $("#question-" + i + "-form").hide();
        }, 10000);

      });
      $("#question-" + i).submit(function(event){
        clearTimeout(time[i]);
        event.preventDefault();
        const ans =  $("input[name='q" + i + "']:checked").val();
        if ( ans === "true" ) {
          $("#question-" + i).html("<p>Yay, you got it right</p>");
        } else {
          $("#question-" + i).html("<p>Sorry, that is the wrong answer.</p>");
        }
      });
    }

  });

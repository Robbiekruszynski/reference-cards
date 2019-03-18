import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';


  $(document).ready(function(){
    // $(".flashcard").click(function(){
    //   $(this).children().toggle();
    // });

    $("#alert-question-front-1").click(function(){
      $("#question-1").show();
      $("#alert-question-front-1").hide();
    });

    $("#question-1").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-1").html("<p>Yay you got it right</p>");
      } else {
        $("#question-1").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-2").click(function(){
      $("#question-2").show();
      $("#alert-question-front-2").hide();
    });

    $("#question-2").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-2").html("<p>Yay you got it right</p>");
      } else {
        $("#question-2").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-3").click(function(){
      $("#question-3").show();
      $("#alert-question-front-3").hide();
    });

    $("#question-3").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-3").html("<p>Yay you got it right</p>");
      } else {
        $("#question-3").html("<p>You are wrong</p>");
      }
    });




    // var result = getElementById("#alert-true");
    // $(function(){
    //     $(".flashcard").flip({
    //         axis: 'y',
    //         trigger: 'click',
    //         front: '.term',
    //         back: '.definition'
    //     });
    // });



  // $("#showAll").click(function(){
  //   var def = document.getElementsByClassName("definition");
  //   for (var i = 0; i < def.length; i++) {
  //     def[i].style.transform = "rotateY(0deg)";
  //   }
  //
  //   var term = document.getElementsByClassName("term");
  //   for (i = 0; i < term.length; i++) {
  //     term[i].style.transform = "rotateY(-180deg)";
  //   }
  // });
  //
  // $("#hideAll").click(function(){
  //   var def = document.getElementsByClassName("definition");
  //   for (var i = 0; i < def.length; i++) {
  //     def[i].style.transform = "rotateY(180deg)";
  //   }
  //
  //   var term = document.getElementsByClassName("term");
  //   for ( i = 0; i < term.length; i++) {
  //     term[i].style.transform = "rotateY(0deg)";
  //   }
  // });

});

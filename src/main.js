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

    $("#alert-question-front-4").click(function(){
      $("#question-4").show();
      $("#alert-question-front-4").hide();
    });

    $("#question-4").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-4").html("<p>Yay you got it right</p>");
      } else {
        $("#question-4").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-5").click(function(){
      $("#question-5").show();
      $("#alert-question-front-5").hide();
    });

    $("#question-5").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-5").html("<p>Yay you got it right</p>");
      } else {
        $("#question-5").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-6").click(function(){
      $("#question-6").show();
      $("#alert-question-front-6").hide();
    });

    $("#question-6").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-6").html("<p>Yay you got it right</p>");
      } else {
        $("#question-6").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-7").click(function(){
      $("#question-7").show();
      $("#alert-question-front-7").hide();
    });

    $("#question-7").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-7").html("<p>Yay you got it right</p>");
      } else {
        $("#question-7").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-8").click(function(){
      $("#question-8").show();
      $("#alert-question-front-8").hide();
    });

    $("#question-8").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-8").html("<p>Yay you got it right</p>");
      } else {
        $("#question-8").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-9").click(function(){
      $("#question-9").show();
      $("#alert-question-front-9").hide();
    });

    $("#question-9").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-9").html("<p>Yay you got it right</p>");
      } else {
        $("#question-9").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-10").click(function(){
      $("#question-10").show();
      $("#alert-question-front-10").hide();
    });

    $("#question-10").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-10").html("<p>Yay you got it right</p>");
      } else {
        $("#question-10").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-11").click(function(){
      $("#question-11").show();
      $("#alert-question-front-11").hide();
    });

    $("#question-11").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-11").html("<p>Yay you got it right</p>");
      } else {
        $("#question-11").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-12").click(function(){
      $("#question-12").show();
      $("#alert-question-front-12").hide();
    });

    $("#question-12").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-12").html("<p>Yay you got it right</p>");
      } else {
        $("#question-12").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-13").click(function(){
      $("#question-13").show();
      $("#alert-question-front-13").hide();
    });

    $("#question-13").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-13").html("<p>Yay you got it right</p>");
      } else {
        $("#question-13").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-14").click(function(){
      $("#question-14").show();
      $("#alert-question-front-14").hide();
    });

    $("#question-14").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-14").html("<p>Yay you got it right</p>");
      } else {
        $("#question-14").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-15").click(function(){
      $("#question-15").show();
      $("#alert-question-front-15").hide();
    });

    $("#question-15").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-15").html("<p>Yay you got it right</p>");
      } else {
        $("#question-15").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-16").click(function(){
      $("#question-16").show();
      $("#alert-question-front-16").hide();
    });

    $("#question-16").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-16").html("<p>Yay you got it right</p>");
      } else {
        $("#question-16").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-17").click(function(){
      $("#question-17").show();
      $("#alert-question-front-17").hide();
    });

    $("#question-17").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-17").html("<p>Yay you got it right</p>");
      } else {
        $("#question-17").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-18").click(function(){
      $("#question-18").show();
      $("#alert-question-front-18").hide();
    });

    $("#question-18").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-18").html("<p>Yay you got it right</p>");
      } else {
        $("#question-18").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-19").click(function(){
      $("#question-19").show();
      $("#alert-question-front-19").hide();
    });

    $("#question-19").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-19").html("<p>Yay you got it right</p>");
      } else {
        $("#question-19").html("<p>You are wrong</p>");
      }
    });

    $("#alert-question-front-20").click(function(){
      $("#question-20").show();
      $("#alert-question-front-20").hide();
    });

    $("#question-20").submit(function(event){
      event.preventDefault();
      const ans =  $("input[name='alert']:checked").val();
      if ( ans === "true" ) {
        $("#question-20").html("<p>Yay you got it right</p>");
      } else {
        $("#question-20").html("<p>You are wrong</p>");
      }
    });
  });

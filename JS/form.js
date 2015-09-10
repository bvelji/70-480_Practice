/**
Form handling
*/
$(function(){

  $("#serialize").click(function(){
    $("#results").text($("form").serialize());
  });


  $("#resetResults").click(function(){
    $("#results").text("");
  });
});

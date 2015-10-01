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

  $("#encodeURI").click(function(){
    var uri = $("#results").text();
    $("#results").text(encodeURI(uri));
  });

  $("#encodeURIComponent").click(function(){
    var uri = $("#results").text();
    $("#results").text(encodeURIComponent(uri));
  });

  $("#decodeURI").click(function(){
    var uri = $("#results").text();
    $("#results").text(decodeURI(uri));
  });

  $("#decodeURIComponent").click(function(){
    var uri = $("#results").text();
    $("#results").text(decodeURIComponent(uri));
  });
});

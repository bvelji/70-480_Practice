/**
Event bubbling
*/
$(function(){

  function highlight(bubble){
    if($(this).css("background-color") == "rgb(255, 255, 0)"){
      $(this).css("background-color", "");
    }else{
      $(this).css("background-color","yellow")
    }
    $(this).toggleClass("outline");

  //  $(bubble).toggleClass("highlight").toggleClass("outline");
  }

  var bubbles = $("div[id^='bubble']");
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].addEventListener("click", highlight, false);
  }

});

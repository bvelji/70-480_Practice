/**
Event bubbling
*/
$(function(){

  function handleEvent(e){
    highlight(this);
    alert("Source Element: "+ e.srcElement.id + "\n"
            + "Event Current Target: " + e.currentTarget.id);
    highlight(this);
  }

  function highlight(obj){
    if($(obj).css("background-color") == "rgb(255, 255, 0)"){
      $(obj).css("background-color", "");
      $(obj).toggleClass("outline");
    }else{
      $(obj).css("background-color","yellow");
      $(obj).toggleClass("outline");
    }
  }

  function addHandlers(capture){
    var bubbles = $("div[id^='bubble']");
    for(var i = 0; i < bubbles.length; i++){
      bubbles[i].addEventListener("click", handleEvent, capture);
    }
  }

  function clearHandlers(){
    var bubbles = $("div[id^='bubble']");
    for(var i = 0; i < bubbles.length; i++){
      bubbles[i].removeEventListener("click", handleEvent, true);
      bubbles[i].removeEventListener("click", handleEvent, false);
    }
  }

  $("#addEventsButton").click(function(){
    clearHandlers();
    var captureOnly = $("input[name=capture]:checked").val();
    try{
      switch(captureOnly){
        case "bubbleOnly":
          addHandlers(false);
          break;
        case "captureOnly":
          addHandlers(true);
          break;
        case "captureAndBubble":
          addHandlers(true);
          addHandlers(false);
          break;
        default:
          throw("Error trying to determine which handlers to add.");
      }
    }
    catch(err){
      alert(err);
    }
  });

});

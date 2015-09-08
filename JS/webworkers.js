$(function(){
  var results = $("#log");

  $("#resetButton").click(function(){
    $("#log li").remove();
  });

  $("#generateButton").click(function(){
    $("#resetButton").trigger("click");
    var iterations = parseInt($("#seriesLength").val());
    if(iterations >= 0){
      for(var i = 0; i < iterations; i++){
        results.append("<li>" + fibonacci(i) + "</li>");
      }
    }
  });

  $("#generateWithWWButton").click(function(){
    $("#resetButton").trigger("click");
    var iterations = $("#seriesLength").val();

    var worker = new Worker("../JS/webworker-fibonacci.js");
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    worker.postMessage(iterations);
  });

  function messageHandler(e){
    for(var i = 0; i < e.data.length; i++){
      results.append("<li>" + e.data[i] + "</li>");
    }
  }

  function errorHandler(e){
    results.append("<li>" + e.message + "</li>");
  }

});


function fibonacci(n) {
  if(n <= 1){
    return n;
  }
  else{
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

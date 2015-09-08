$(function(){

  var _worker;

  $("#resetButton").click(function(){
    $("#log li").remove();
    $("#messages p").remove();
  });

  $("#generateButton").click(function(){
    $("#resetButton").trigger("click");
    var iterations = parseInt($("#seriesLength").val());
    if(iterations >= 0){
      for(var i = 0; i < iterations; i++){
        logOutput(fibonacci(i));
      }
    }
  });

  $("#generateWithWWButton").click(function(){
    $("#resetButton").trigger("click");
    var iterations = $("#seriesLength").val();
    var args = createNewAgrs("start", iterations);
    getWorker().postMessage(args);
  });

  //Calls this.close() from within the worker thread.
  //Closes the worker thread AFTER current processing is completed.
  //Allows for final message to be sent back to UI thread.
  $("#closeButton").click(function(){
    var agrs = createNewAgrs("close");
    getWorker().postMessage(args);
  });

//Immediately ends the worker thread.
//No results returned.
  $("#terminateButton").click(function(){
    getWorker().terminate();
    _worker = undefined;
    logMsg("Terminated worker thread from main UI thread.");
  });

  function createNewAgrs(command, value){
    return {Command: command, Value:value};
  }

  function getWorker(){
    if(_worker == null){
      _worker = new Worker("../JS/webworker-fibonacci.js");
      _worker.onmessage = messageHandler;
      _worker.onerror = errorHandler;
    }
    return _worker;
  };

  function messageHandler(e){
    if(e.data.length){
      for(var i = 0; i < e.data.length; i++){
        logOutput(e.data[i]);
      }
    }
    else{
        logMsg(e.data.Message);
    }
  }

  function errorHandler(e){
    logOutput(e.message);
  }


  function fibonacci(n) {
    if(n <= 1){
      return n;
    }
    else{
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };

  function logMsg(msg){
    $("#messages").append("<p>" + msg + "</p>");
  }

  function logOutput(msg){
    $("#log").append("<li>" + msg + "</li>");
  }
});

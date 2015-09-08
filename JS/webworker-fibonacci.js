var results = [];

function createNewAgrs(message, result){
  return {Message: message, Result: result};
}

function messageHandler(e){
  switch(e.data.Command){
    case "start":
      fibonacciSeries(e.data.Value);
      break;
    case "close":
      this.close();
      var args = createNewAgrs("Closing worker thread");
      postMessage(args);
      break;
    default:
      var args = createNewAgrs("Command: " + e.data.Command + " was not found.");
      postMessage(args);
  }
}

function fibonacciSeries(n){
  for(var i = 0; i < n; i++){
    results.push(fibonacci(i));
  }
  //send message back to UI thread
  postMessage(results);
}

function fibonacci(n) {
  if(n <= 1){
    return n;
  }
  else{
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

addEventListener("message", messageHandler, true);

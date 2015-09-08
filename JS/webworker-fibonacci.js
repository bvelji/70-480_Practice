var results = [];

function messageHandler(e){
  if(e.data > 0){
    fibonacciSeries(e.data);
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

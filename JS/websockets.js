$(function() {

  function log(msg) {
    $('#log').append("<li>" + msg + "</li>");
  }

  var webSocket = window.WebSocket || window.MozWebSocket,
    ws = new webSocket("ws://localhost:8181");

  log('Attempting to connect to server...');

  ws.open = function() {
    log("Connection opened.");
  };

  ws.onclose = function() {
    log('Connection closed.');
  };

  ws.onmessage = function(e) {
    log('Server: ' + e.data);
  };

  ws.onerror = function(e) {
    log('!Error: ' + e);
  };

  $("#messageBox").change(function() {
    ws.send(this.value);
    $("#messageBox").val("");
  });



});

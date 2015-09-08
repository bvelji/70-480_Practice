/**
GEOLOCATION
*/

function get_location(){
  var x = $('#geolocation');
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition, geoError);
  } else {
    x.append("<p>Your browser does not support geolocation</p>")
  }
};

function showPosition(position){
  var x = $('#geolocation');
  x.append("<p>Latitude: " + position.coords.latitude + "</p>");
  x.append("<p>Longitude: " + position.coords.longitude + "</p>");
  insertMap(position);
};

function geoError(err){
  console.log('Error: ' + err.code + '  MSG: ' + err.message);
  var x = $('#geolocation');
  x.append("<p>Error Code: " + err.code + "</p>");
  x.append("<p>Error Message: " + err.message + "</p>");
}

function insertMap(position){
  var latlon = position.coords.latitude + "," + position.coords.longitude;
  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
  $('#map').append("<img src='"+img_url+"'>").toggleClass("outline");
}

$(function() {

  //reset all performed transformations
  $("#reset").click(function() {
    $(".transformable").css("transform", "");
  });

  $("#rotate1").click(function() {
    var degrees = $("#deg1").val();
    var matrix = $("#trans1").css("transform");
    var angle;
    if (matrix !== "none") {
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
      angle = 0;
    }
    if ($.isNumeric(degrees)) {
      degrees = Number(degrees) + angle;
      $("#trans1").css("transform", "rotate(" + degrees + "deg)");
    }
  });

  $("#rotate2").click(function() {
      var degrees = $("#deg1").val();
      $("#trans2").css("transform", "rotateX(" + degrees + "deg)");
  });

  $("#rotate3").click(function() {
      var degrees = $("#deg1").val();
      $("#trans3").css("transform", "rotateY(" + degrees + "deg)");
  });

  $("#rotate4").click(function() {
      var degrees = $("#deg1").val();
      $("#trans4").css("transform", "rotateZ(" + degrees + "deg)");
  });

  $("#translate1").click(function(){
    var degrees = $("#deg1").val();
    $("#trans1").css("transform", "translateX(" + degrees + "px)");
  });

  $("#translate2").click(function(){
    var degrees = $("#deg1").val();
    $("#trans2").css("transform", "translateY(" + degrees + "px)");
  });

  $("#translate3").click(function(){
    var degrees = $("#deg1").val();
    $("#trans3").css("transform", "translateZ(" + degrees + "px)");
  });

  $("#translate4").click(function(){
    var d1 = $("#deg1").val();var d2 = $("#deg2").val();
    var d3 = $("#deg3").val();
    $("#trans1").css("transform", "translate3d(" + d1 + "px,"+ d2 + "px," + d3 + "px)");
  });
});

$(function(){
  function drawGradient() {
  var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d'),
    x0 = 0,
    y0 = 0,
    r0 = 0,
    x1 = 200,
    y1 = 0,
    r1 = 100,
    width = 300,
    height = 50,
    offset = 10;

  var gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 0 * (height + offset), width, height);
  ctx.fillRect(100, 1 * (height + offset), width, height);

  y1 = 300;
  gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 2 * (height + offset), width, height);
  ctx.fillRect(100, 3 * (height + offset), width, height);

  x0 = x1 = width / 2;
  y0 = y1 = 4 * (height + offset) + (height / 2);
  gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 4 * (height + offset), width, height);
  ctx.fillRect(100, 5 * (height + offset), width, height);

  y0 = 5 * (height + offset) + (height / 2);
  y1 = y0 + 100;
  gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 6 * (height + offset), width, height);
  ctx.fillRect(100, 7 * (height + offset), width, height);
}

function addColorStops(gradient) {
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop(".25", "blue");
  gradient.addColorStop(".50", "green");
  gradient.addColorStop(".75", "yellow");
  gradient.addColorStop("1.0", "red");
}

drawGradient();
});

let x = 200;
let y = 200;
let dx = 4;
let dy = 3;
let size = 40;
let pulse = 0.5;
let c;

function setup() {
  createCanvas(400, 400);
  c = color(255, 100, 150);
}

function draw() {
  background(30);
  fill(c);
  ellipse(x, y, size, size);
  x += dx;
  y += dy;
  size += pulse;

  if (size > 60 || size < 30) {
    pulse *= -1;
  }

  if (x < size / 2 || x > width - size / 2) {
    dx *= -1;
    c = color(random(255), random(255), random(255));
  }

  if (y < size / 2 || y > height - size / 2) {
    dy *= -1;
    c = color(random(255), random(255), random(255));
  }
}

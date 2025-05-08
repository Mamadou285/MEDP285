let w = 100;
let h = 100;
let shape = 'rect';
let x = 200;
let y = 200;
let dx = 2;
let dy = 2;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(250);
  if (shape === 'rect') {
    fill(100, 200, 255);
    rect(x, y, w, h);
  } else {
    fill(255, 150, 100);
    ellipse(x, y, w, h);
  }

  x += dx;
  y += dy;
  if (x < 0 || x > width) dx *= -1;
  if (y < 0 || y > height) dy *= -1;
}

function mousePressed() {
  shape = (shape === 'rect') ? 'ellipse' : 'rect';
  dx = random(-3, 3);
  dy = random(-3, 3);
  w = random(50, 150);
  h = random(50, 150);
}

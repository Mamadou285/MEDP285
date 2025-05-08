let hue = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(0, 0, 100, 10);
  fill(hue, 80, 100, 70);
  ellipse(mouseX, mouseY, 60, 60);
  hue = (hue + 1) % 360;
}

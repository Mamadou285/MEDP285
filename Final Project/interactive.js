let particles = [];
let hue = 0;

function setup() {
  let canvas = createCanvas(windowWidth * 0.8, 400);
  canvas.parent("interactive-sketch");
  colorMode(HSB);
  background(0);
}

function draw() {
  background(0, 0.2);
  hue += 0.5;
  for (let p of particles) {
    p.update();
    p.display();
  }
}

function mouseDragged() {
  for (let i = 0; i < 4; i++) {
    particles.push(new Particle(mouseX, mouseY, hue));
  }
  if (particles.length > 100) {
    particles.splice(0, 4);
  }
}

class Particle {
  constructor(x, y, hue) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 2));
    this.alpha = 255;
    this.hue = hue % 360;
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 3;
  }

  display() {
    fill(this.hue, 255, 255, this.alpha);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 10);
  }
}

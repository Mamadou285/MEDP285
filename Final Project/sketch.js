let pulse = [];

function setup() {
  let canvas = createCanvas(windowWidth * 0.8, 300);
  canvas.parent("sketch-container");
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0.1);
  if (frameCount % 3 === 0) {
    pulse.push(new Orb());
    if (pulse.length > 100) pulse.shift();
  }

  for (let orb of pulse) {
    orb.update();
    orb.display();
  }
}

class Orb {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(10, 30);
    this.hue = random(360);
    this.alpha = 255;
  }

  update() {
    this.alpha -= 2;
  }

  display() {
    fill(this.hue, 255, 255, this.alpha);
    ellipse(this.x, this.y, this.r);
  }
}

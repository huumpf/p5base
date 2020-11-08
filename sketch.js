var canvas;
var x = 0;
var y = 0;

function setup() {
  canvas = createCanvas(1920, 1080);
  noLoop();
  noStroke();
}

function draw() {
  makeColors();
}

function makeColors() {
  for (let i = 0; i < 4; i++) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);
    rect(x, y, width/4, height/2); 
    x += width/4;
  }

  x = 0;
  y += height/2;

  for (let i = 0; i < 4; i++) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);
    rect(x, y, width/4, height/2); 
    x += width/4;
  }

  x = 0;
  y = 0;
}

function keyPressed() {
  switch (key) {
    case "s":
      save();
      break;
    case "n":
      makeColors();
      break;
  }
}

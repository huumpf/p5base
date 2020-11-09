var canvas;
var x = 0;
var y = 0;
var colors = [];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
  noStroke();
}

function draw() {
  makeColors();
  makeTwoLinesOfRects();
}

function makeColors() {
  for (let i = 0; i < 24; i++) {
    let col = random(255);
    colors.push(col);
  }
}

function makeTwoLinesOfRects() {
  for (let i = 0; i < 4; i++) {
    let j = i * 3
    fill(colors[j], colors[j+1], colors[j+2]);
    rect(x, y, width/4, height/2); 
    x += width/4;
  }

  x = 0;
  y += height/2;

  for (let i = 4; i < 8; i++) {
    let j = i * 3;
    fill(colors[j], colors[j+1], colors[j+2]);
    rect(x, y, width/4, height/2); 
    x += width/4;
  }

  x = 0;
  y = 0;
}

function makeStripe() {
  for (let i = 0; i < 24; i++) {
    let j = i * 3;
    fill(colors[j], colors[j+1], colors[j+2]);
    rect(x, y, width, height/8); 
    y += height/8;
  }

  x = 0;
  y = 0;
}

function keyPressed() {
  switch (key) {
    case "s":
      canvas = createCanvas(600, 600*8);
      makeStripe();
      save();
      break;
    case "n":
      canvas = createCanvas(window.innerWidth, window.innerHeight);
      colors = [];
      makeColors();
      makeTwoLinesOfRects();
      break;
  }
}

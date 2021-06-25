
// Example 1-1: stroke and fill

function setup() {
    createCanvas(displayWidth, displayHeight);
    stroke('navy');
    strokeWeight(2.5)
    fill('skyblue');
  }
  
  function draw() {
    background(255);
    rect(30,20,75,100);
    ellipse(160,160,100,100);
    triangle(130, 275, 128, 240, 286, 250);
  }

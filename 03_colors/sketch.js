// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-3: RGB Color
function setup() {
    createCanvas(displayWidth, displayHeight);
    noStroke();
}
  
  function draw() {
  
    background(255);
    
    // Bright red -> change my fill!
    fill(125,115,205,200);
    ellipse(100,100,100,100);
  
    // Dark red -> change my fill!
    fill(115,110,150,100);
    ellipse(300,100,100,100);
  
    // Pink (pale red) -> change my fill!
    fill(75,220,25,80);
    ellipse(500,100,100,100);
    
  }

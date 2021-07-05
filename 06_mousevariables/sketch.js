//Code Snippet from Derrick McMillen https://replit.com/@demcrepl/p5js-Spirals?v=1

let backgroundcol;
let length = 10;

function setup() {
    backgroundcol = color(115, 150, 220);
    createCanvas(displayWidth, displayHeight);
    stroke(100, 110, 200);
    noFill();
    background(backgroundcol);
}

function draw() {
    let length = 20;
    let angle = 45;
    let loops = 250;

    for(var i = 0; i < loops; i++) {
        rotate(angle);
        ellipse(mouseX, mouseY, length, length);
        length = length + 1;
    }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(mouseX,mouseY,mouseX-mouseY,20);
  circle(mouseX, mouseY,mouseX-mouseY);
}

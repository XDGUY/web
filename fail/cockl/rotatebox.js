function setup() {
    createCanvas(100, 100, WEBGL);
    rect(15, 10, 55, 55);
  noFill();
  rect(20, 20, 60, 60);
  }
  
  function draw() {
    background(0);
    noFill();
    stroke(100, 100, 240);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(45, 45, 45);
  }
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0, 255, 255);

  let hr = hour(),
    min = minute(),
    sec = second();

  strokeWeight(8);
  stroke(255);
  fill(255);
  ellipse(200, 200, 300, 300);

  strokeWeight(4);
  stroke(255, 255, 0);
  //noFill();
  fill(0);
  let end = map(sec, 0, width, 0, 360);
  arc(200, 200, 300, 300, 0, end, PIE);

  point(20, 30);
  stroke("purple");
  strokeWeight(50);
  //   fill(255);
  //   noStroke();
  //   text(hr + ":" + min + ":" + sec, 10, 200);
  //
}

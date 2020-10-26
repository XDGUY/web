let sec = {
  val: 0,
  ang: 0,
  thick: 0,
};

let min = {
  val: 0,
  ang: 0,
  thick: 0,
};

let hr = {
  val: 0,
  ang: 0,
  thick: 0,
};

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function cocklText(s, m, h) {
  push();
  rotate(90);
  translate(-200, -200);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(h + ":" + m + ":" + s, 50, 30);
  pop();
}

function cocklSec(sAng) {
  fill("yellow");
  //noFill();
  noStroke();
  arc(0, 0, 300, 300, 0, sAng);
}

function cocklPie(ang, thick, colour) {
  fill(colour);
  noStroke();
  arc(0, 0, thick, thick, 0, ang);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  sec.val = second();
  min.val = minute();
  hr.val = hour();

  sec.ang = map(sec.val, 0, 60, 0, 360);
  min.ang = map(min.val, 0, 60, 0, 360);
  hr.ang = map(hr.val % 12, 0, 12, 0, 360);

  cocklText(sec.val, min.val, hr.val);
  //cocklSec(sec.ang);
  cocklPie(sec.ang, 300, "yellow");
  cocklPie(min.ang, 280, "purple");
  cocklPie(hr.ang, 260, "aqua");
}

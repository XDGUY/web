let sec = {
	val: 0,
	ang: 0,
	thick: 0,
	len: 120,
	thicHand: 5,
};

let min = {
	val: 0,
	ang: 0,
	thick: 0,
	len: 80,
	thicHand: 8,
};

let hr = {
	val: 0,
	ang: 0,
	thick: 0,
	len: 60,
	thicHand: 10,
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

function cocklHand(ang, len, thicHand) {
	push();
	rotate(ang);
	strokeWeight(thicHand);
	stroke(255);
	line(0, 0, len, 0);
	pop();
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

	cocklPie(sec.ang, 300, "yellow");
	cocklPie(min.ang, 280, "purple");
	cocklPie(hr.ang, 260, "aqua");

	cocklHand(sec.ang, sec.len, sec.thicHand);
	cocklHand(min.ang, min.len, min.thicHand);
	cocklHand(hr.ang, hr.len, hr.thicHand);
}

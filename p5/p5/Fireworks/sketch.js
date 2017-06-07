var firework;


function setup() {
	createCanvas(800,600);
	stroke(255);
	strokeWeight(4);
	firework = new particle(400,300);
}

function draw() {
	background(51);
	firework.update();
	firework.show();


}
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

var drops = [];
var rSlider, gSlider;

function setup() {
  createCanvas(640, 360);
  colorMode(HSB,255);
  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 330);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(20, 300);


  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();

  }
}

function draw() {
  
  var r= rSlider.value();
  var g= gSlider.value();
  

  background(r);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    stroke(g);
    drops[i].show();
  }
}
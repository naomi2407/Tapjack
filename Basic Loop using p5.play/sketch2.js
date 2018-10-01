var looper;
function preload(){


looper = loadAnimation("b1.jpg","b2.jpg", "b3.jpg","b4.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(12);
}



function draw() {

  animation(looper,width/2, height/2);
}


function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
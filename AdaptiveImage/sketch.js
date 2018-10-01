var img1;


function preload(){
	img1 = loadImage("1e.jpg");

}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
image (img1, 0, 0, width,height);
		
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
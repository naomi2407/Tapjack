var img1;

function preload(){
img = loadImage("logo.png");	
	
	
}
function setup() 
{
  createCanvas(windowWidth, windowHeight);

}


function draw()
{
image (img, 0, 0, width/6);
		
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}

var img1;


function preload(){
	img1 = loadImage("1e.jpg");
	img2 = loadImage("1b.jpg");
	img3 = loadImage("1c.jpg");
	img4 = loadImage("1d.jpg");
	images = [img1, img2, img3, img4,];
    imgNumber = random([0,1,2,3]);

}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}

function draw() 
{
var fr = frameRate();
print(fr);
image (img1, 0, 0, width,height);
image (img2, 0, 0, width,height);
image (img3, 0, 0, width,height);
image (img4, 0, 0, width,height);
		
}

function nextImage(){     
  if (imgNumber == 19){ 
    imgNumber=0         
  }
  else {
  imgNumber++;
  }

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
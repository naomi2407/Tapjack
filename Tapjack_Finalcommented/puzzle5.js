//check puzzle1.js for fully commented code

var numimages = 8; //The number of images
var images = []; // Made array
var currentframe = 0;
var state = 0;
var affirm;
var song;
var yesh;


var des_img = 0;

function preload() {
for (var i = 0; i< numimages; i++) {
img3 =loadImage('images/support4.jpg');
img6 =loadImage('images/support7.jpg');
img9 =loadImage('images/support10.jpg');
img12 =loadImage('images/support13.jpg');
img13 =loadImage('images/support14.jpg');
img14 =loadImage('images/support15.jpg');
img15 =loadImage('images/support16.jpg');
master4 =loadImage('masterpuzzle/5.jpg');

images = [master4, img3, img6, img9, img12, img15, img14, img13];	


affirm = loadImage("Commandnegative.png");
//soundFormats('mp3');
song = loadSound('NO.mp3');
yesh = loadSound('Yay.mp3');
	
}    
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);

	
		
}
function draw (){
    image(images[currentframe], 0,0, width, height);
    currentframe++ //next frame
    if (currentframe == images.length) {
        currentframe=0; //Return to first frame
    }
}


function windowResized() {
    // change canvas size
    createCanvas(windowWidth, windowHeight);
    
}

function touchStarted(){ 
    if(currentframe== des_img)
    {    
    noLoop();
	state=1;
	yesh.play();
    }//stop the loop
    
    else if((currentframe!= des_img)&&(state==0))
        {
			song.play();
			image(affirm, width/2 - 250, height/2 - 250, 500, 500);
			
        }
}
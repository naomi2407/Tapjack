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
img4 =loadImage('images/support5.jpg');
img5 =loadImage('images/support6.jpg');
img6 =loadImage('images/support7.jpg');
img7 =loadImage('images/support8.jpg');
img8 =loadImage('images/support9.jpg');
img9 =loadImage('images/support10.jpg');

master6 =loadImage('masterpuzzle/7.jpg');

images = [master6, img9, img8, img7, img6, img5, img4, img3];	


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

//check puzzle1.js for fully commented code
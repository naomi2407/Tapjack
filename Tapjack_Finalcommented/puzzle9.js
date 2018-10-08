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
img1 =loadImage('images/support2.jpg');
img3 =loadImage('images/support4.jpg');
img5 =loadImage('images/support6.jpg');
img7 =loadImage('images/support8.jpg');
img9 =loadImage('images/support10.jpg');
img11 =loadImage('images/support12.jpg');
img13 =loadImage('images/support14.jpg');
master8 =loadImage('masterpuzzle/9.jpg');
images = [master8, img1, img3, img5, img7, img9, img11, img13];	


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
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
img4 =loadImage('images/support5.jpg');
img7 =loadImage('images/support8.jpg');
img9 =loadImage('images/support10.jpg');
img11 =loadImage('images/support12.jpg');
img12 =loadImage('images/support13.jpg');
img13 =loadImage('images/support14.jpg');
img15 =loadImage('images/support16.jpg');
master1 =loadImage('masterpuzzle/2.jpg');


images = [master1, img4, img7, img9, img11, img15, img12, img13];	


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

function touchStarted(){ //on click
    if(currentframe== des_img)
    {    //if clicked when desired image is displayed
    noLoop();
	state=1;
	yesh.play();



    }//stop the loop
//stop();
    else if((currentframe!= des_img)&&(state==0))
        {
			song.play();
			image(affirm, width/2 - 250, height/2 - 250, 500, 500);
			
        }
}

//function mouseReleased(){
//    loop();
//}

//function stop() {
  
    //currentframe =! 0;
    //currentframe =! 1;
    //currentframe = 2;
    //currentframe =! 3;
    //currentframe =! 4;
    //}



//


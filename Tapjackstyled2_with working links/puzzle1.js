var numimages = 8; //The number of images
var images = []; // Made array
var currentframe = 0;
var state = 0;
var affirm;
var song;
var yesh;
var click = 0;

var des_img = 0;

function preload() {
for (var i = 0; i< numimages; i++) {
img0 =loadImage('images/support1.jpg');
img1 =loadImage('images/support2.jpg');
img2 =loadImage('images/support3.jpg');
img3 =loadImage('images/support4.jpg');
img4 =loadImage('images/support5.jpg');
img5 =loadImage('images/support6.jpg');
img6 =loadImage('images/support7.jpg');
img7 =loadImage('images/support8.jpg');
master0 =loadImage('masterpuzzle/1.jpg');


images = [master0, img1, img2, img3, img4, img5, img6, img7];	


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
			click++;
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


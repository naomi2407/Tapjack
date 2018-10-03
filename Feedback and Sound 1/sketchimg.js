var numimages = 8; //The number of images
var images = []; // Made array
var currentframe = 0;
var state = 0;
var affirm;
var positiveaffirm;
var song;
var yesh;

var des_img = 2;

function preload() {
for (var i = 0; i< numimages; i++) {
var ImageName = "image-" + nf(i,4) + ".jpg";
images[i] = loadImage(ImageName); //load each image   
affirm = loadImage("Commandnegative.png");
positiveaffirm = ("Commandpositive.png");
soundFormats('mp3');
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


function resizeWindow(){
    // change canvas size
    createCanvas(windowWidth, windowHeight);
    
}

function touchStarted(){ //on click
    if(currentframe== des_img)
    {    //if clicked when desired image is displayed
    noLoop();
	state=1;
    image(positiveaffirm, width/2-250,height/2-250,500,500);
    yesh.play();


    }//stop the loop
//stop();
    else if((currentframe!= des_img)&&(state==0))
        {
            image(affirm, width/2 - 250, height/2 - 250, 500, 500);
			song.play();
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


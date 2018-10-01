var numimages = 8; //The number of images
var images = []; // Made array
var currentframe = 0;
var des_img = 2;

function preload() {
for (var i = 0; i< numimages; i++) {
var ImageName = "image-" + nf(i,4) + ".jpg";
images[i] = loadImage(ImageName); //load each image   
}    
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
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
    
    
}

function mouseClicked(){ //on click
    if(currentframe== des_img)  //if clicked when desired image is displayed
    noLoop();            //stop the loop
//stop();
    else
        {
            fill(255,0,0);
            ellipse(500,500,500,500);
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
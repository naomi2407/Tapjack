var numimages = 8; //The number of images
var images = []; // Made array
var currentframe = 0;

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
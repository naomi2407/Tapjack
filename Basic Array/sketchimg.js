var numimages= 8;
var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var currentframe = 0;
var state= 0;
var affrim;

function preload() {
img0=loadImage ("image-0000.jpg")
img1=loadImage ("image-0001.jpg")
img2=loadImage ("image-0002.jpg")
img3=loadImage ("image-0003.jpg")
img4=loadImage ("image-0004.jpg")
img5=loadImage ("image-0005.jpg")
img6=loadImage ("image-0006.jpg")
img7=loadImage ("image-0007.jpg")
for(var i= 0; i< numimages; i++);
var ImageNumber= random(0,1,2,3,4,5,6,7)
images [i] = loadImage (ImageNumber);
}

function setup()
{
createCanvas (windowWidth, widowHeight); 
frameRate (3);    
}

function draw (){

 
}
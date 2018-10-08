var numimages = 8; //The number of images
var images = []; // Made array
var currentframe = 0;
var state = 0;
var affirm;
var song;
var yesh;
var master_des;

var des_img = 3;
var stop_img=0;

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
img8 =loadImage('images/support9.jpg');
img9 =loadImage('images/support10.jpg');
img10 =loadImage('images/support11.jpg');
img11 =loadImage('images/support12.jpg');
img12 =loadImage('images/support13.jpg');
img13 =loadImage('images/support14.jpg');
img14 =loadImage('images/support15.jpg');
img15 =loadImage('images/support16.jpg');
master0 =loadImage('masterpuzzle/1.jpg');
master1 =loadImage('masterpuzzle/2.jpg');
master2 =loadImage('masterpuzzle/3.jpg');
master3 =loadImage('masterpuzzle/4.jpg');
master4 =loadImage('masterpuzzle/5.jpg');
master5 =loadImage('masterpuzzle/6.jpg');
master6 =loadImage('masterpuzzle/7.jpg');
master7 =loadImage('masterpuzzle/8.jpg');
master8 =loadImage('masterpuzzle/9.jpg');
master9 =loadImage('masterpuzzle/10.jpg');


if(des_img==0)
    {
    images = [master0, img1, img2, img3, img4, img5, img6, img7];
    }
    else if(des_img==1)
        {
    images = [master1, img4, img12, img5, img15, img5, img1, img6];
    }
    else if(des_img==2)
        {
    images = [master2, img14, img1, img15, img5, img10, img2, img3];
    }
    else if(des_img==3)
        {
    images = [master3, img15, img12, img6, img8, img5, img11, img9];
    }
    else if(des_img==4)
        {
    images = [master4, img3, img5, img7, img9, img11, img13, img6];
    }
    else if(des_img==5)
        {
    images = [master5, img2, img4, img6, img8, img13, img1, img10];
    }
    else if(des_img==6)
        {
    images = [master6, img13, img1, img7, img3, img6, img9, img11];
    }
    else if(des_img==7)
        {
    images = [master7, img12, img11, img10, img9, img8, img7, img14];
    }
    else if(des_img==8)
        {
    images = [master8, img15, img12, img1, img5, img10, img7, img4];
    }
    else if(des_img==9)
        {
    images = [master9, img11, img1, img5, img6, img4, img3, img15];
    }
        

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


function resizeWindow(){
    // change canvas size
    createCanvas(windowWidth, windowHeight);
    
}

function touchStarted(){ //on click
    if(currentframe== stop_img)
    {    //if clicked when desired image is displayed
    noLoop();
	state=1;
	yesh.play();



    }//stop the loop
//stop();
    else if((currentframe!= stop_img)&&(state==0))
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


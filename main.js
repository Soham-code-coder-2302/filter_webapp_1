function preload(){

}

function setup(){
canvas=createCanvas(450,350);
canvas.center();//position(450,150);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,450,350);
}

function take_snapshot(){

}
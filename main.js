//https://teachablemachine.withgoogle.com/models/L3fTwXp1t/

function setup(){
canvas = createCanvas(300,300);
canvas.position(700,450);
video = createCapture(VIDEO);
video.hide();
console.log(ml5.version)
}


function preload(){

}

function draw(){
image(video,0,0,300,300)
}
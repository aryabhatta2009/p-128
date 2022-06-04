song1="";
song2="";
lwx=0;
rwx=0;
lwy=0;
rwy=0;
function preload(){
    song1=loadSound("harrypottertheme.mp3");
    song2=loadSound("peterpan.mp3");
}
function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded.");
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
     lwx=results[0].pose.leftWrist.x;
     lwy=results[0].pose.leftWrist.y;
     rwx=results[0].pose.rightWrist.x;
     rwy=results[0].pose.rightWrist.y;
    }
    }
function draw(){
    image(video,0,0,600,450);
}
function play(){
    song1.play();
    song2.play();
    song1.setVolume(0.5);
    song1.rate(0.5);
    song2.setVolume(0.5);
    song2.rate(0.5);
}
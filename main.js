song1 = "";
song2 = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;


function preload() 
{
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intilised!');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if (results.length > 0) 
    {
      console.log(results);
      leftWristY = results[0].pose.leftWrist.y;
      leftWristX = results[0].pose.leftWrist.x;
      console.log("leftWristX = " + leftWristX +"leftWristY =" + leftWristY);

      rightWristY = results[0].pose.rightWrist.y;
      rightWristX = results[0].pose.rightWrist.x;
      console.log("rightWristX = " + rightWristX +"rightWristY =" + rightWristY);
    }
}
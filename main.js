noseX=0;
noseY=0;

function preload(){
mustache = loadImage('https://i.postimg.cc/kGcY7FQC/m1.png');
}

function setup(){
    canvas = createCanvas(360,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(360,360);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}
 
function modelLoaded(){
    console.log('PoseNet Is Initialised');
}

function draw(){
  image(video , 0,0,360,360);
  image(mustache , noseX, noseY ,30,30);
}

function take_snapshot(){
    save('filterimg.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 13;
        noseY = results[0].pose.nose.y - 13 ;
        console.log("nose x =" + noseX);
        console.log("nose y = " + noseY);
    
    }
}
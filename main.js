noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video =  createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(500,500);
    canvas.position(500,200);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#0004ff');
    document.getElementById("square_side").innerHTML="WIDTH AND HEIGHT OF THE SQUARE IS : "+  difference  +"px"
    fill('#8cd3ffee');
    stroke('#000000ee');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('posenet initialized');
}
function gotPoses(results){
    if(results.length>1){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY = "+noseY);
leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;
difference = floor(leftwristX-rightwristX);
console.log("leftwristX ="+leftwristX+"rightwristX = "+rightwristX+"difference = "+ difference);

    }
}
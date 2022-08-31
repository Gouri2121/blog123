noseX=0;
noseY=0;

function setup() {
 
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,350,350);
    image(Lips,noseY, noseX,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {  
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        console.log(" nose x = "+ noseX);
        console.log(" nose y ="+ noseY);
     }
}




function preload(){
Lips = loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');
}

















moustacheX=0;
moustacheY=0;


function preload() {
moustache= loadImage("https://i.postimg.cc/7hsM93KJ/Moustache.jpg");
}



function draw() {
image(video,0 , 0, 300, 300);
image(moustache, moustacheX, moustacheY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}




function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    rectangle(moustacheX, moustacheY, 20);
image(moustache, moustacheX, moustacheY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');

}

function setup() {
    canavs = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        moustacheX = results[0].pose.moustache.x;
        moustacheY = results[0].pose.moustache.y;
        console.log("moustache x =" + moustache.x);
        console.log("moustache y =" + moustache.y);
        
    }
}

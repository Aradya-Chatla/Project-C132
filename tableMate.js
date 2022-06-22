Status = "";
mango_image = "";

function preload(){
    mango_image = loadImage("tableMate.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(mango_image,gotResults);
}

function gotResults(error,relts){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(mango_image,0,0,640,350);
}
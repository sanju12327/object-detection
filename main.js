img="";
status="";

function preload()
{
img = loadImage("dog_cat.jpg");
}

function setup()
{
canvas = createCanvas(900,600);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    } else
{
    console.log(results);
}
}

function draw()
{
    image(img, 0, 0, 900, 600);
    fill("#ff0000");
    text("Dog", 100, 100);
    noFill();
    stroke("#ff0000");
    rect(90, 90, 500, 490);
    fill("#ff0000");
    text("Cat", 410, 115);
    noFill();
    stroke("#ff0000");
    rect(400, 100, 380, 490);
}
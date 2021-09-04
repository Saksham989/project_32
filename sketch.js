const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png"

var time;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12){
      text("time "+hour%12+" PM",50,100)
    }else if(hour===0){
      text("time 12AM",100,100)
       }else {
        text("time "+hour%12+" AM",50,100)
       }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    //change the data in JSON format
    var responseJSON = await response.json()
    // write code slice the datetime
    var datetime=responseJSON.datetime
    hour=datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=00 && hour<18){
      bg = "sunrise1.png";
    }
    else {
      bg = "sunset7.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}

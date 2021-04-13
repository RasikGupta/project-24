const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var ball1,ball2;
var box1,box2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball1 = new Rubber(200,200,80);
    ball2 = new Rubber(400,200,80);
    box1 = new Box(400,200,80,40);
    box2 = new Box(800,400,80,40);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball1.display();
    ball2.display();
    box1.display();
    box2.display();

    
 
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball;
var ground;
var block1,block2,block3;


function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ball=new Paperball(100,550);
    ground=new Ground(750,600);
    block1=new Block(1300,50,150,10)
    block2=new Block(1220,50,10,150)
    block3=new Block(1380,50,10,150)

}

function draw(){
    background(0);

    Engine.update(engine);

    ball.display();
    block1.display();
    block2.display();
    block3.display();
    ground.display();

}

function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.positon,{x:85,y:-55})
    }
}
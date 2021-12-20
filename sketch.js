
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj,Ground;
var show;
var display;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  class Ground {
    constructor(x,y,w,h) {
        let options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }}

    show();
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x,pos.y,this.w,this.h);
        pop();

  
  Ground=new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  Ground.display();
  
  drawSprites();
 
}




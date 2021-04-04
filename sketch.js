
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new PaperClass(200,680,20);
	ground = new Ground(400, 685, 800, 10);
	box1 = new Box(610, 675, 80, 10);
	box2 = new Box(565, 640, 10, 80);
	box3 = new Box(645, 640, 10, 80);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();


  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.pos,{x:30, y:-20});
	}
}




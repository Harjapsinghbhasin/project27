
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
    bobDiameter=40


	//Create the Bodies Here.
	bobobject1=new Bob(200,360,40)
	bobobject2=new Bob(250,360,40)
	bobobject3=new Bob(300,360,40)
	bobobject4=new Bob(350,360,40)
	bobobject5=new Bob(400,360,40)
	roofObject=new Roof(width/2, height/4, width/7,20)
	rope1=new Rope(bobobject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Rope(bobobject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobobject3.body,roofObject.body,-bobDiameter*0, 0)
	rope4=new Rope(bobobject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobobject5.body,roofObject.body,bobDiameter*2, 0)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue")
  drawSprites();
  bobobject1.display()
  bobobject2.display()
  bobobject3.display()
  bobobject4.display()
  bobobject5.display()
 
}




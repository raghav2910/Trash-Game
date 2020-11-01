
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;
var bdustbin;
var ground;


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
    ground = new Ground(600,height,1200,30);
    paper= new Paper(180,150,40);
   bdustbin = new Dustbin(950,370,200,200); 
    
    var render=Render.create({
      element:document.body,
      engine:engine,
      options:{
        width:1200,
        height:700,
        wireframes:false
      }
    })
    Render.run(render)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bdustbin.display();
  ground.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-3});
    }}





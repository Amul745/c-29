const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let rope
let engine;
let world;
let ground;
let fruit;
let fruit_con
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  let options = {
    density:0.001
  }
 
 ground = new Ground(250,690,500,20)
 rope = new Rope(7,{x:245,y:30})
  rectMode(CENTER);
  fruit= Bodies.circle(300,300,20,options)
  Matter.Composite.add(rope.body,fruit)
  fruit_con=new Link(rope,fruit)
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   ground.display()
   rope.show();
   ellipse(fruit.position.x,fruit.position.y,15,15)
}





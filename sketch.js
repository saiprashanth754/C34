const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2-200,height-200,width-100,20);
  ball = new Ball(200,200,70,70);
  rope = new Chain(ball.body,{ x:500,y: 70 });
  //boxes
  box1 = new Box(900,100,60,60);
  box2 = new Box(900,100,60,60);
  box3 = new Box(900,100,60,60);
  box4 = new Box(900,100,60,60);
  box5 = new Box(900,100,60,60);
  box6 = new Box(900,100,60,60);
  box7 = new Box(800,100,60,60);
  box8 = new Box(800,100,60,60);
  box9 = new Box(800,100,60,60);
  box10 = new Box(800,100,60,60);
  box11 = new Box(800,100,60,60);
  box12 = new Box(800,100,60,60);
  box13 = new Box(800,100,60,60);
  box14 = new Box(700,100,60,60);
  box15 = new Box(700,100,60,60);
  box16 = new Box(700,100,60,60);
  box17 = new Box(700,100,60,60);
  box18 = new Box(700,100,60,60);
  box19 = new Box(700,100,60,60);
  box20 = new Box(700,100,60,60);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);

  ground.display();
  ball.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}

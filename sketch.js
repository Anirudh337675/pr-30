const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground;



function preload(){
  polygon_img=loadImage("polygon.png")
}

function setup() {
  var Canvas=createCanvas(1200,600);
  engine=Engine.create();


  world=engine.world;
  polygon=Bodies.circle(100,400,20);
  World.add(world,polygon)
 
  slingshot=new Slingshot(polygon,{x:100,y:400});

  box1=new Box(390,425,30,40);
  box2=new Box(420,425,30,40);
  box3=new Box(450,425,30,40);
  box4=new Box(480,425,30,40);
  box5=new Box(510,425,30,40); 

  box6=new Box(420,385,30,40);
  box7=new Box(450,385,30,40);
  box8=new Box(480,385,30,40);

  box9=new Box(450,345,30,40);

  box10=new Box(360,465,30,40);
  box11=new Box(390,465,30,40);
  box12=new Box(420,465,30,40);
  box13=new Box(450,465,30,40);
  box14=new Box(480,465,30,40);
  box15=new Box(510,465,30,40);
  box16=new Box(540,465,30,40);

  ground=new Ground(460,510,300,20);

 

}

function draw() {
  background("darkgreen");

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  Engine.update(engine);

  
 
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
ground.display();
slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


  function mouseReleased(){
  slingshot.fly();
  }

function keyPressed()
{
  if(keyCode===32)
  {
    slingshot.attach(this.polygon)
  }
}
//Declaring constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Declaring variables
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
  	world = engine.world;
    //Creating sprites
    //roof=createSprite(390,220,550,30);
    roof=new Roof(390,220,550,30);
    bob1=new Bob(200,540,40);
    console.log(bob1.body);
	  bob2=new Bob(284,540,40);
	  bob3=new Bob(368,540,40);
	  bob4=new Bob(452,540,40);
	  bob5=new Bob(536,540,40);
    rope1=new Rope({x:200,y:220},bob1.body);
    rope2=new Rope({x:284,y:220},bob2.body);
    rope3=new Rope({x:368,y:220},bob3.body);
    rope4=new Rope({x:452,y:220},bob4.body);
    rope5=new Rope({x:536,y:220},bob5.body);
	  Engine.run(engine);
}

function draw() {
  background("orange");
  Engine.update(engine);
  //Displaying the sprites
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();
}

//Function for making the bobs move
function keyPressed(){
  if (keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-185, y:-185});
  }
}






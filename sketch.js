const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    computerbase= new ComputerBase(300,random(450,height-300),180,150)
    complayer= new ComputerPlayer(295,computerbase.body.position.y-100,50,80)

    playerBase= new PlayerBase(windowWidth-400,random(450,height-300),180,150)
    player= new Player(windowWidth-400,playerBase.body.position.y-100,50,80)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    computerbase.display()
    playerBase.display()
    player.display()
    complayer.display()
   //display Player and computerplayer


}

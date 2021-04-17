const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

const START=0, PLAY=1,END=2,WIN=3,LOSE=4;
var world,engine;
var jack;
var gameState=START;

// shopie,shopie images,
var sophie;
var shopieI;

// pixydust images allcharecters,
var jPixyDustI;
var shopieLocketPixyDustI;
var sThrowPixyDustI;
var pixyDustI;

//mr hooke ,mr hooke Image,

var HookeI;
var ground, casket,casketImg;
var hookeCoinScore=0;
var pixieDust=50;
var hits=0;

var coinGroup;
// bg1 image, bg2 image,
var bg2I,back;
var jack;
var casketI;
var coinCount=0;
function preload(){
 jackHappyI=loadImage("images/jack happy.png");
    /*  jackSwordI=loadImage("images/jack sword.png");
    shopieI=loadImage("images/shophie.png");
    jPixyDustI=loadImage("images/j pixy dust.jpeg");
    shopieLocketPixyDustI=loadImage("images/s pixy dust.jpeg");
    sThrowPixyDustI=loadImage("images/s throw pixy dust.jpeg");
    PixyDustI=loadImage("images/pixy dust.png");*/
    HookeI=loadImage("images/mr hooke.png");
    shopieI=loadImage("images/s throw pixy dust.jpeg");
    coinI=loadImage("images/coins.png");
    
  
    bg2I=loadImage("images/riverbg.jpg");
    casketI=loadImage("images/casket.jpeg")
}
function setup(){
createCanvas(windowWidth,windowHeight);
engine=Engine.create();
world=engine.world;
Engine.run(engine);

back=createSprite(width/2,height/2);
back.addImage("bg2.jpeg",bg2I);
back.scale=10;

casket=createSprite(100,300,20,20);
casket.addImage(casketI);

jack=createSprite(100,100,170,200)
jack.addImage("images/jack happy.png",jackHappyI);

hooke=createSprite(400,300,170,250);
hooke.addImage("images/mr hooke.png",HookeI);
hooke.velocityX=-3;

sophie=createSprite(300,100,75,100)
sophie.addImage("images/shophie.png",shopieI);

gr=new Ground(width/2,height-10,width,20);

ground=createSprite(width/2,height-10,width,20);
coinGroup=new Group();

}

function draw(){
  background("blue"); 
  drawSprites();

if(gameState===START)
{
  background(bg2I);
  textAlign(CENTER);
  fill("#CD5C5C");
  stroke("#F08080");
  strokeWeight(2);
  textSize(30);
  textFont("Optima")
  text("Mr. Hooke is trying to rob the city. He has thrown all the treasure in the city and you should capture them before he runs away with them",width/2,height/2-50);
  text("please help the citizens and our prince jack to get back the coins and stop him.",width/2,height/2)
  text("Press S to start the game",width/2,height/2+50);
} 
else if(gameState===PLAY)
{
  spawnCoins();
  back.velocityX=-8;
  if(back.x<width/4)
  {
    back.x=width/2+660;
  }
  textAlign(CENTER);
  fill("#CD5C5C");
  stroke("#F08080");
  strokeWeight(2);
  textSize(50);
  textFont("Lucida Handwriting")
  text("PixieDust with Jack"+pixieDust,width/2,80);
  text("Hits"+hits,width/2-100,80);
  text("Coins"+coinCount*50,width/2-100,80);
  if (keyDown("up")){
    jack.velocityY=-5;
    pixyDust=pixyDust-2;
  }
  if (keyDown("down"))
  {
    jack.velocity=5
  }
  if (keyDown("left"))
  {
    jack.velocityX=-5;
  }
  if (keyDown("right"))
  {
    jack.velocityX=5;
  }
  jack.collide(ground);
  hooke.collide(ground);
  sophie.collide(ground);
  ground.collide(ground);
 

  if(hooke.x>width-30)
  {
    hooke.x=0;
  }
  if(jack.isTouching(hooke))
  {
    hits+=1;
  }
  if(jack.isTouching(coinGroup))
  {
    coinCount+=1;
  }
  if(coinCount===50)
  {
    gameState=WIN;
  }
  if(pixieDust===0 || hits===5)
  {
    gameState=LOSE;
  }
  drawSprites();
  }
  
}



function keyPressed(){
  if (keyCode===83){
    gameState=PLAY;
  }
}

function spawnCoins()
{
  if(frameCount%80===0)
  {
    var coin=createSprite(random(40,width-100),random(40,200),20,20);
    coin.addImage(coinI);
    coin,velocityY=-3;
    coin.velocityY=coin.velocityY+5;
    coin.scale=0.5;
    coin.lifetime=100;
    coinGroup.add(coin);
    
  }
}
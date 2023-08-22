
var trex ,trex_running;
var edges;
var ground,groundImage,invisibleGround;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  edges= createEdgeSprites();
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2; 
  ground.velocityX = -4;

 //creating invisibleGround
  invisibleGround = createSprite(200,190,400,20);
  invisibleGround.visible= false;

}

function draw(){
  background("lightblue");
  console.log(trex.y);
  if(keyDown("space") && trex.y >= 140){
    trex.velocityY = -8 ;
  }

  trex.velocityY = trex.velocityY + 0.5 ;
  ground.velocityX = -2;
   
  if(ground.x < 0){
    ground.x = ground.width/2;
    
  }
  trex.collide(invisibleGround);
  drawSprites();
}



var sea,ship
var seaSprite

function preload(){
  ship = loadAnimation("ship-1.png","ship-2.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  seaSprite = createSprite(200,200,400,20);
  seaSprite.addImage(sea);
  seaSprite.scale = 0.5;
  seaSprite.velocityX = -5;
  shipSprite = createSprite(100,300,50,50)
  shipSprite.addAnimation("sailing",ship)
  shipSprite.scale = 0.2
  seaSprite.x = seaSprite.width/4
}


function draw() {
  background("blue");
  console.log(seaSprite.x)
  if(seaSprite.x < 0){
    seaSprite.x = seaSprite.width/4
  }
  drawSprites();
}
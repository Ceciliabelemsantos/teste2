 var mar, marImg;
 var navio,navioImg;
 

function preload(){
 
  marImg.loadImage("sea.png");
  navioImg.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

 

}

function setup(){
  createCanvas(400,400);
  
 mar = createSprite(200,200,400,400);
 mar.addImage("marImg",marImg);
 mar.velocityX=1;
 mar.scale=2.0;

 navio = createSprite(100,300,70,70);
 navio.addAnimation("navioImg",navioImg);
 navio.scale=0.5;

}

function draw() {
  background("blue");

 



    drawSprites();

 
}

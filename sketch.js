var fixrect, moverect;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  fixrect = createSprite(500, 300, 50, 100);
  moverect = createSprite(400, 300, 50, 50);

  fixrect.shapeColor = "blue";
  moverect.shapeColor = "blue";

  fixrect.velocityX = -2;
  moverect.velocityX = 2;
}

function draw() {
  background(255,255,255);
  
  if(moverect.x - fixrect.x < moverect.width/2 + fixrect.width/2
    && fixrect.x - moverect.x < moverect.width/2 + fixrect.width/2){
      fixrect.velocityX = (-1)*fixrect.velocityX;
      moverect.velocityX = (-1)*moverect.velocityX;
    }
  
  
  drawSprites();
}
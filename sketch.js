var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 200, 50, 80);
 fixedRect.shapeColor="green"
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.shapeColor="green"
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  //console.log(fixedRect.width/2+movingRect.width/2); 
  //console.log(movingRect.x-fixedRect.x);
  drawSprites();
}
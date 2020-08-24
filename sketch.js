var fixedRect, movingRect

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200,200,150,50)
  movingRect=createSprite(300,50,150,50)
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}

function draw() {
  background(0);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  }
else{
movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}
  drawSprites();


}
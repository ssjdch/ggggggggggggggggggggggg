var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < 65 && 
     fixedRect.x - movingRect.x < 65 &&
     fixedRect.y - movingRect.y < 65 &&
     movingRect.y - fixedRect.y < 65){

       fixedRect.shapeColor = "red";
       movingRect.shapeColor = "red";
     } else {

      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
     }
  drawSprites();
}
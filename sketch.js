function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 rect2=createSprite(300,200,50,50);
 rect2.shapeColor="blue";

}

function draw() {
  background(255,255,255);  
  rect2.y=mouseY;
  rect2.x=mouseX;
  if(rect2.x-fixedrect.x<fixedrect.width/2+rect2.width/2 &&
    fixedrect.x-rect2.x<fixedrect.width/2+rect2.width/2 &&
    rect2.y-fixedrect.y<fixedrect.height/2+rect2.height/2 &&
    fixedrect.y-rect2.y<fixedrect.height/2+rect2.height/2
    ){
    rect2.shapeColor="pink";

  }
  else{
rect2.shapeColor="blue";
  } 
  
  drawSprites();
  
}
var rectangleFix;
var rectanglemove;
var rect1;
var rect2;
var rect3;
var rect4;
function setup() {
  createCanvas(1200,800);
  rectangleFix=createSprite(400, 200, 100, 50);
  rectanglemove=createSprite(200,100,50,100);
  rect1=createSprite(600, 200, 100, 50);
  rect2=createSprite(800, 200, 100, 50);
  rect3=createSprite(1000, 200, 100, 50);
  rect4=createSprite(100, 200, 100, 50);
  rectangleFix.shapeColor="green" ;
  rectanglemove.shapeColor="green";
  rect1.shapeColor="pink" ;
  rect2.shapeColor="pink" ;
  rect3.shapeColor="pink" ;
  rect4.shapeColor="pink" ;
  rectangleFix.debug="true";
  rectanglemove.debug="true";
}

function draw() {
  background(0,0,0);  
  rectanglemove.x=World.mouseX;
  rectanglemove.y=World.mouseY;

  if(isTouching(rectanglemove,rect1)){
    rect1.shapeColor="red" ;
    rectanglemove.shapeColor="red"; 
  }
  else{
    rect1.shapeColor="pink" ;
    rectanglemove.shapeColor="green";
  }
  drawSprites();
}

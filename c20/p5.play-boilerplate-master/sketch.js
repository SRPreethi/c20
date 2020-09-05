var fixed, moving;


function setup() 
{
  createCanvas(1200,800);
  fixed = createSprite(800,600,100,50);
  moving = createSprite(500,400,80,50);
  fixed.shapeColor = "white";
  moving.shapeColor = "white";
  
}

function draw() 
{
  background("black");  

  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(fixed.x - moving.x < fixed.width/2 + moving.width/2)
  {
    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
  }
  else
  {
    fixed.shapeColor = "white";
    moving.shapeColor = "white";

  }


  
  drawSprites();
}
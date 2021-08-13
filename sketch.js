var boy,girlImg,girl,boyImg;
var snowflake,snowflakeImg;
var bgImg;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow3.jpg");
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
}
function setup() {
  createCanvas(800,600);
 
}

function draw() {

  boy = createSprite(370,400,60,60);
  boy.addImage(boyImg);
  girl = createSprite(700,400,500,20);
  girl.scale = 1.0;
  girl.addImage(girlImg);
  boy.scale = 0.8;
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.2;
  }
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
      //Matter.Body.applyForce(boy.body.position,{x:130,y:-145});

    
  	}
}
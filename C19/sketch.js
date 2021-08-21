
var  runner, runner_running, runner_collided;
var background1
var ground, invisibleGround, groundImage;
var bgsprite;






function preload(){
runner_running = loadAnimation("runner gif-1.png.png","runner gif-2.png.png","runner gif-3.png.png","runner gif-4.png.png","runner gif-5.png.png");
background1= loadImage("bg2.png");
groundImage=loadImage("ground2.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(80);
    bgsprite=createSprite(width/2,height/2,1200,800);
    bgsprite.addImage("bgimage",background1);
    bgsprite.scale=1.5;
    bgsprite.width=3*bgsprite.width;

    runner= createSprite(50,height-150,20,50);
    runner.addAnimation("running",runner_running);
    runner.scale= 0.40;
    
    


    invisibleGround = createSprite(200,320,800,10);
  invisibleGround.visible = false;
  
    

    
}

function draw() {
    background("white");
    drawSprites();
    bgsprite.velocityX=-3;
    
    if(bgsprite.x<580){
      bgsprite.x=bgsprite.width/4;
    }
    //console.log(bgsprite.x);








   if(keyDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
   }


   
  
 
}

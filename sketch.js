var ground
var backgroundimage,zombieimage,hunterimage,bulletimage


function preload(){
backgroundimage=loadImage("assets/background.png")
zombieimage=loadAnimation("assets/zombie1.png","assets/zombie2.png","assets/zombie3.png")
hunterimage=loadImage("assets/hunter.png")
bulletimage=loadImage("assets/bullet.png")

}

function setup(){

createCanvas(windowWidth,windowHeight);
ground=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
ground.addImage(backgroundimage)
ground.scale=7
ground.velocityX=-2

hunter=createSprite(200,windowHeight-200,100,100)
hunter.addImage(hunterimage)
hunter.scale=1.5

bullet=createSprite(400,400,5,5)
bullet.addImage(bulletimage)
bullet.scale=0.3

zombie=createSprite(600,600,50,50)
zombie.addAnimation(zombieimage)
}

function draw(){
 background("black")

 if(ground.x<windowWidth/2-100){
    ground.x=windowWidth/2+200
}

drawSprites()
}
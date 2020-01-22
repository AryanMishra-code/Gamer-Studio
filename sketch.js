var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var ball;
var reward;

function setup(){
    createCanvas(1360, 655);
   ball = createSprite(25, 640, 10, 10);
   ball.shapeColor = "green";
   wall1 = createSprite(50, 350, 10, 600);
   wall1.shapeColor = "red";
   wall2 = createSprite(345, 50, 600, 10);
   wall2.shapeColor = "red";
   wall3 = createSprite(650, 295, 10, 500);
   wall3.shapeColor = "red";
   wall4 = createSprite(395, 140, 500, 10);   
   wall4.shapeColor = "red";
   wall5 = createSprite(150, 340, 10, 400);
   wall5.shapeColor = "magenta";
   wall6 = createSprite(800, 250, 10, 500);
   wall6.shapeColor = "purple";
   wall7 = createSprite(895, 550, 500, 10);
   wall7.shapeColor = "purple";
   wall8 = createSprite(300, 450, 10, 400);
   wall8.shapeColor = "purple";
   wall9 = createSprite(450, 400, 10, 350);
   wall9.shapeColor = "blue";
   wall10 = createSprite(1150, 290, 300, 10);
   wall10.shapeColor = "silver";
   reward = createSprite(550, 100, 100, 10);
   reward.shapeColor = "black";


}

function draw(){
    background("yellow");
    

    if(keyDown(LEFT_ARROW)){
ball.velocityX = -7;
ball.velocityY = 0;
    }
    else if(keyDown(RIGHT_ARROW)){
ball.velocityX = 7;
ball.velocityY = 0;

    }
    else if(keyDown(UP_ARROW)){
ball.velocityY = -7;
ball.velocityX = 0;


    }
    else if(keyDown(DOWN_ARROW)){
        ball.velocityY = 7;
        ball.velocityX = 0;

    }
    
    if(ball.x < 0 || ball.x > 1360 || ball.y < 0 || ball.y > 655) {
        ball.velocityX = 0;
        ball.velocityY = 0;
        fontSize = 100 ;
        fill("red");
        text("YOU LOSE", 1100, 325);
    }

    if(ball.isTouching(reward)) {
reward.destroy();        
ball.velocityX = 0;
        ball.velocityY = 0;
        text("YOU WINNNNN !!!!!", 1100, 325);
    }
    ball.bounceOff(wall1);
    ball.bounceOff(wall2);
    ball.bounceOff(wall3);
    ball.bounceOff(wall4);
    ball.bounceOff(wall5);
    ball.bounceOff(wall6);
    ball.bounceOff(wall7);
    ball.bounceOff(wall8);
    ball.bounceOff(wall9);
    ball.bounceOff(wall10);

    drawSprites();
}

5
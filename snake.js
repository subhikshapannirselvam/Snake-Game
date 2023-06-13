 var blocksize=25;
 var row=20;
 var col=20;
 var board;
 var context;

 var snakeX=blocksize*5;
 var snakeY=blocksize*5;

 var foodX;
 var foodY;

 var moveX=0;
 var moveY=0;

 var snakeBody=[];
 var gameOver=false;

window.onload=function(){
    board=document.getElementById("myboard");
    board.height=row*blocksize;
    board.width=col*blocksize;
    context=board.getContext("2d");

    placefood();
    document.addEventListener("keyup",changeDirection);

    setInterval(update,1000);
     
    
 
 }
 function update(){
    if(gameOver){
        return;

    }
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);
    
    
    context.fillStyle="red";
    context.fillRect(foodX,foodY,blocksize,blocksize);
    
    
    if(snakeX==foodX && snakeY==foodY){
        snakeBody.push(foodX,foodY)
        placefood();
    }
    for(let i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }if(snakeBody.length){
        snakeBody[0]=[snakeX,snakeY];
                     

    }


    context.fillStyle="green";
    snakeX+=moveX*blocksize;
    snakeY+=moveY*blocksize;
    context.fillRect(snakeX,snakeY,blocksize,blocksize);
    for(let i=0;i<snakeBody.length;i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blocksize,blocksize)

    }

    if(snakeX<0 || snakeX >col*blocksize ||snakeY<0 || snakeY >row*blocksize){
        gameOver=true;
        alert("game over");
    }
    for(let i=0;i<snakeBody.length;i++){
        if(snakeX==snakeBody[i][0] && snakeY==snakeBody[i][1]){
            gameOver=true;
            alert("game over");
        }
    }


 }
 function changeDirection(e){
    if(e.code=="ArrowUp" && moveY!=1){
        moveX=0;
        moveY=-1;
    }else if(e.code=="ArrowDown" && moveY!=-1){
        moveX=0;
        moveY=1;

    }else if(e.code=="ArrowLeft" && moveX!=1){
        moveY=0;
        moveX=-1;
    }else if(e.code=="ArrowRight" && moveX!=-1){
        moveY=0;
        moveX=1;
    }

 }

 function placefood(){
    foodX=Math.floor(Math.random()*col)*blocksize;
    foodY=Math.floor(Math.random()*row)*blocksize;
 }

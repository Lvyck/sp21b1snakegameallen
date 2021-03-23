var snakeArray;
var direction;
var score;
var bestScore;
var gamePlaying;
var appleX;
var appleY;

function setup() {
    noLoop();
    gamePlyaing = false;
    createCanvas (400,400);
    frameRate(5);
    score = 0;
    bestScore = loadBestScore();

    snakeArray = [];
    makeSnakePiece(60, 200);
    makeSnakePiece(40,200);
    makeSnakePiece(20,200);

    appleX = 200;
    appleY = 200;

    directoin = "RIGHT";
    
    textSize(18);
}

functoin draw() {
    background(255)
    displayScore();
    if(gamePlaying) {
        addApple();
        drawSnake();
    }   else {
        textAlign(CENTER);
        text('Press UP, RIGHT, or DOWN arrow keys to begin', width / 2, height / 2);
        fill(0, 255, 0);
        for(var i = 0; i < snakeArray.length; i++) {
            rect(snakeArray[i].xPos, snakeArray[i].yPos, 19, 19);
        }
        addApple();
    }
}

function loadBestScore() {
    var bestScore = getItem('bestScore');
    if (bestScore) {
        return bestScore;
    }
    return 0;
}

function displayScore() {
    line(0, 38, width, 38);
    line(0, 0, 0, 480);
    line(0, 480, 400, 480);
    line(400, 480, 400, 0);
    line(0, 0, 400, 0);
    line(0, 102, 153);
    textAlign(LEFT);
    text('Score', 30, 27);
    text(score, 100, 27);
}
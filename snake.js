//private fields
var snakeList = [{ x: 30, y: 80 }];
var box = { x: 0, y: 500, width: 650, height: 500 };
var meal = { x: null, y: null, width: 7, height: 7 };
var points = 0;
var playOptions = {
        "init": "init",
        "in progress": "in progress",
        "gameover": "gameover",

}
var playState = playOptions["init"]

function snake() {
    //snake class with public fields
    this.init = init;
    this.setNextMealPosition = setNextMealPosition;
    this.isFoodonPath = isFoodonPath;
    this.move = move;
    this.point = getGamePoints;
    this.getState = getState;
}


function init() {
    console.log("initializing");
    playState = playOptions["init"];
    generateSnakePosition();
    setNextMealPosition();
}
function getState(){
    return playState;
}

function generateSnakePosition() {
    snakeList[0] = { x: Math.floor(Math.random() * 650) + 0, y: Math.ceil(Math.random() * 500) + 0 };
    console.log("snake position:", snakeList[0])

}

function setNextMealPosition() {
    /*function for setting meal position while making sure meal isnt generated
    along snake path
    */
    do {
        meal = { x: Math.floor(Math.random() * 650) + 0, y: Math.ceil(Math.random() * 500) + 0 };
    }
    while (!isMealoffPath)

    console.log("current meal position:", meal)
}

function isFoodonPath() {
    let snakeHead = snakeList[0]
    if (snakeHead.x === meal.x && snakeHead.y === meal.y) {
        //Add meal to top of snakelist if snake is on same y axis and x axis as  
        snakeList.unshift(meal);
        //Increment user score
        points += 5;
        //generate next meal position
        setNextMealPosition();
        console.log("you have " + points + " points")

    }

}
function move(direction) {
    playState = playOptions["in progress"]
    if (!isBound()) {
        //pop from the snakelist(the snake tail) and move it to the front
        let snakeHead = snakeList.pop();
        switch (direction) {
            case "left":
                snakeList.unshift({ x: snakeHead.x - 7, y: snakeHead.y })
                isFoodonPath()

                break;
            case "right":
                snakeList.unshift({ x: snakeHead.x + 7, y: snakeHead.y })
                isFoodonPath()

                break;
            case "up":
                snakeList.unshift({ x: snakeHead.x, y: snakeHead.y - 7 })
                isFoodonPath()
                break;
            case "down":
                snakeList.unshift({ x: snakeHead.x, y: snakeHead.y + 7 })
                isFoodonPath()
                break;
            default:
                break;
        }

        console.log("snake head", snakeList[0])
    }
    else {
        console.log("gameover")
        playState = playOptions["in progress"]
    }
}

function getGamePoints() {
    //return game points
    return points
}

function isBound() {
    //code to check if snake path is within box bounds
    let snakeHead = snakeList[0];
    return snakeHead.x >= box.width || snakeHead.x <= 0 || snakeHead.y <= 0 || snakeHead.y >= box.height
}

function isMealoffPath() {
    //code to make sure meal is generated outside the snake path
    let isMealoffPath = false;
    for (i = 0; i < snakeList.length; i++) {
        if (snakeList[i].x >= meal.x + 1 || snakeList[i].x <= meal.x + 7) {
            isMealoffPath = isMealoffPath || true
        }
    }
    return isMealoffPath
}



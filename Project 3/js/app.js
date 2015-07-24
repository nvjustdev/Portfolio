/*
This file handles all the internal details of the Game. The game comprises of five parts -- the avatar who is the player,
the enemy who's out to get the player's avatar, the gems that the player intends to collect, the time that the player is racing against,
and the points that the player intends to gather.

There are three levels of difficulty. With each level, there's an associated time, points, grace lives and the speed of the enemy.
*/

//All the global variables are declared up front with just a single var command which will save some performance time.
var avatarIndex, difficultyLevel, avatarImages, isGameOn, easy, medium,
hard, gameMinutes, gameLives, gameGemIndex, gamePointsPerGem,
totalPoints, sprites, gemImages, possibleGemX, possibleGemY, possibleGemPoints, selections, gameSpeedMultiplier;

//Initializing the points tally to be zero
totalPoints = 0;

//Creating an array of avatars based on images
avatarImages = ["images/char-boy.png",
"images/char-cat-girl.png",
"images/char-horn-girl.png",
"images/char-pink-girl.png",
"images/char-princess-girl.png"
];

//Creating an array of gem images. The game randomly shows the gems to be collected. Each gem has a different point attached to it.
//Green = 5 points, Blue = 10 points, Orange = 15 points.
gemImages = [
'images/gem-green.png',
'images/gem-blue.png',
'images/gem-orange.png',
'images/Heart.png',
'images/Star.png'
];

selections = [false, false];

possibleGemX = [0, 100, 200, 300, 400];
possibleGemY = [60, 140, 220];
//No points for hearts but extra live. Star has both points and lives.
possibleGemPoints = [5, 10, 15, 0, 20];//Green, Blue, Orange, Heart, Star respectively



//Creating a Difficulty class with lives and time
var Difficulty = function(lives, minutes) {
    this.lives = lives;
    this.minutes = minutes;
};

//Creating a variable for each of the game's levels
easy = new Difficulty(3, 5);
medium = new Difficulty(6, 4);
hard = new Difficulty(10, 3);

/*
Setting the "Game's On" variable to be false and this will be true only when the game is on. This helps in identifying the
timeframe when the canvas has to be rendered. The canvas will not be visible when the game isn't played -- when in the settings pages.
*/

isGameOn = false;

//Creating an Enemy class
var Enemy = function() {
    //Defining some pre-requisites for the Enemy class - x, y, speed and sprite
    this.possibleXloc = [-150, 600];
    this.possibleYloc = [60, 140, 220];
    this.possibleSpeed = [150, 600];
    this.sprites = ['images/enemy-bug.png'];

    this.reset(); //Setting to defaults
}

//Defaults abstracted into a method to be used later to reset the enemy
Enemy.prototype.reset = function() {
    this.x = this.possibleXloc[0];
    this.y = this.randomY();
    this.speed = this.randomSpeed() * gameSpeedMultiplier;
    this.sprite = this.randomSprite();
}

//Helper method to get random y location
Enemy.prototype.randomY = function() {
    return this.possibleYloc[Math.floor(Math.random() * this.possibleYloc.length)];
}

//Helper method to get random speed
Enemy.prototype.randomSpeed = function() {
    return (this.possibleSpeed[0] + Math.floor(Math.random() * (this.possibleSpeed[1] - this.possibleSpeed[0])));
}

//Helper method to get random enemy sprite
Enemy.prototype.randomSprite = function() {
    return this.sprites[Math.floor(Math.random() * this.sprites.length)];
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    //If the enemy has reached the end of the segment, reset to defaults
    if (this.x > this.possibleXloc[1]) {
        this.reset();
    }

    this.checkCollisions();
}

Enemy.prototype.checkCollisions = function() {
    if (this.y === player.y) {
                //Player is in the same row as the enemy
                console.log("Enemy = " + this.x + " Player = " + player.x);
                if ((this.x >= player.x - 30) && (this.x <= player.x + 30)) {
                    //Oops, player lost a life
                    gameLives--;
                    document.getElementById('livesText').innerHTML = "Lives: " + gameLives;

                    //Check if all lives have been exhausted
                    if (gameLives <= 0) {
                        //Stop the game as all the lives have been exhausted
                        stopGame();
                    } else {
                        //Reset the player position
                        player.reset();
                    }
                }
            }
        }

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Creating a Gem class
var Gem = function() {
    this.x = possibleGemX[Math.floor(Math.random() * 5)];
    this.y = possibleGemY[Math.floor(Math.random() * 3)];
}

Gem.prototype.update = function() {
    if (player.y === this.y) {
        if ((this.x >= player.x - 30) && (this.x <= player.x + 30)) {

            if (gameGemIndex === 3) {
                //Got a heart, did you? Awesome. you earned an extra life
                gameLives++;
                //Updating Lives Text
                document.getElementById('livesText').innerHTML = "Lives: " + gameLives;
            } else if (gameGemIndex < 3) {
                //Bull's Eye. Updating points tally
                totalPoints = totalPoints + gamePointsPerGem;

                //Updating score
                document.getElementById('pointsText').innerHTML = "Points: " + totalPoints;
            } else if (gameGemIndex === 4) {
                //Ah ha! Found the star. Earns you a life and points
                gameLives++;
                //Updating Lives Text
                document.getElementById('livesText').innerHTML = "Lives: " + gameLives;

                //Bull's Eye. Updating points tally
                totalPoints = totalPoints + gamePointsPerGem;
                //Updating score
                document.getElementById('pointsText').innerHTML = "Points: " + totalPoints;
            }

            //Set Next Target
            gameGemIndex = this.randomGem();
            gamePointsPerGem = possibleGemPoints[gameGemIndex];

            this.x = possibleGemX[Math.floor(Math.random() * 5)];
            this.y = possibleGemY[Math.floor(Math.random() * 3)];

            //Resetting the player location to default
            player.reset();
        }
    }
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(gemImages[gameGemIndex]), this.x, this.y);
}

Gem.prototype.randomGem = function() {
    return Math.floor(Math.random() * 5);
}

//Creating a Player class
var Player = function() {
    this.xRange = [-2, 402];
    this.yRange = [-20, 380];
    this.sprite = avatarImages[avatarIndex];

    this.reset();
}

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
}

Player.prototype.avatarImage = function() {
    this.sprite = avatarImages[avatarIndex];
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function() {
   if (this.key === 'left' && this.x > 0){
    this.x = this.x - 100;
} else if (this.key === 'right' && this.x != 400){
    this.x = this.x + 100;
} else if (this.key === 'up'){
    this.y = this.y - 80;
} else if (this.key === 'down' && this.y != 400){
    this.y = this.y + 80;
}
this.key = null;
if ((this.y < 60) || (this.y > 380)){
    this.reset();
}
}

Player.prototype.handleInput = function(key) {
    this.key = key;
}

//Defaults
avatarIndex = 0;
gameGemIndex = 0;
gameSpeedMultiplier = 1;

/* Objects */
var allEnemies = [];

var tough = new Enemy();
allEnemies.push(tough);

var tougher = new Enemy();
allEnemies.push(tougher);

var toughest = new Enemy();
allEnemies.push(toughest);

var moreTough = new Enemy();
allEnemies.push(moreTough);

var theToughest = new Enemy();
allEnemies.push(theToughest);

var player = new Player();
var gem = new Gem();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/* Helper Functions */
//This function is invoked when the user has digested the instructions. This function shows the avatar selection.
//It is possible that this method is invoked when the user isn't satisfied with the avatar selection.

function showAvatarSelection() {
    console.log("Hi");
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('avatarSelectionId').style.display = 'block';
    document.getElementById('gameDifficultyId').style.display = 'none';
    document.getElementById('summaryOfSelection').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
};

function avatarClick(imgId, imgIndex) {
    avatarIndex = imgIndex;
    player.avatarImage();
    selections[0] = true;
    document.getElementById('chosenAvatar').src = avatarImage(imgIndex);
    document.getElementById('avatarSelectionId').style.display = 'none';
    document.getElementById('gameDifficultyId').style.display = 'block';
    document.getElementById('summaryOfSelection').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
};

function avatarImage(imageIndex) {
    return avatarImages[imageIndex];
};

function difficultyClick(buttonID, level) {
    difficultyLevel = level;
    switch (level) {
        case 'Easy':
        gameMinutes = easy.minutes;
        gameLives = easy.lives;
        gameSpeedMultiplier = 0.6; //Slower
        break;
        case 'Medium':
        gameMinutes = medium.minutes;
        gameLives = medium.lives;
        gameSpeedMultiplier = 1; //Moderate
        break;
        case 'Hard':
        gameMinutes = hard.minutes;
        gameLives = hard.lives;
        gameSpeedMultiplier = 1.4; //Faster
    }

    //Choosing only a gem (not a heart or star) for the very first time
    gameGemIndex = Math.floor(Math.random() * 3);
    gamePointsPerGem = possibleGemPoints[gameGemIndex];

    selections[1] = true;

    document.getElementById('chosenAvatarInDiff').src = avatarImage(avatarIndex);
    document.getElementById('gameDifficultyId').style.display = 'none';
    document.getElementById('summaryOfSelection').style.display = 'block';

    var myNode = document.getElementById("chosenDifficultyId");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var newHeading = document.createElement('h2');
    newHeading.innerHTML = "You are playing difficulty level: " + difficultyLevel;
    document.getElementById('chosenDifficultyId').appendChild(newHeading);
    document.getElementById('gameOver').style.display = 'none';
};

function showDifficultySelection() {
    document.getElementById('chosenAvatar').src = avatarImage(avatarIndex);
    document.getElementById('avatarSelectionId').style.display = 'none';
    document.getElementById('gameDifficultyId').style.display = 'block';
    document.getElementById('summaryOfSelection').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    var myNode = document.getElementById("chosenDifficultyId");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
};

function startClick() {
    console.log("Started");
    document.getElementById('avatarSelectionId').style.display = 'none';
    document.getElementById('gameDifficultyId').style.display = 'none';
    document.getElementById('summaryOfSelection').style.display = 'none';
    document.getElementById('stats').style.display = 'block';
    document.getElementById('gameOver').style.display = 'none';

    document.getElementById('livesText').innerHTML = "Lives: " + gameLives;
    document.getElementById('pointsText').innerHTML = "Points: " + totalPoints;
    document.getElementById('timerText').innerHTML = "Timer: " + gameMinutes + ": 00 mins";

    if ((selections[0] === true) && (selections[1] === true)) {
        isGameOn = true;
        countdown(gameMinutes);
    } else {
        if (selections[0] === true) {
            alert("Please select the difficulty");
        } else {
            alert("Please select the avatar");
        }
    }
};

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;

    function tick() {
        if (isGameOn) {
            var counter = document.getElementById("timerText");
            var currentMinutes = mins - 1;
            seconds--;

            counter.innerHTML = "Timer: " + currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds) + " mins";
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    setTimeout(function() {
                        countdown(mins - 1);
                    }, 1000);
                }
            }
            if (currentMinutes === 0 && seconds === 0) {
                stopGame();
            }
        }
    }
    tick();
}

function stopGame() {
    //Reseting values
    gameMinutes = 0;
    gameGemIndex = 0;
    avatarIndex = 0;
    gameSpeedMultiplier = 1;
    gameLives = 3;
    isGameOn = false;
    toggleCanvas(false);
    document.getElementById('pointsSummary').innerHTML = totalPoints;
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
}


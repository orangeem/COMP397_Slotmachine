// create Js Boilerplate for COMP 397

// variables --------------------------------
var canvas;
var stage: createjs.Stage;

// Game objects
var game: createjs.Container; //Main Game Container object
var background: createjs.Bitmap;
var spingButton: createjs.Bitmap;
var betMaxButton: createjs.Bitmap;
var betOneButton: createjs.Bitmap;
var resetButton: createjs.Bitmap;
var powerButton: createjs.Bitmap;

// functions --------------------------------
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn on mouse event
    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps.
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

//game loop
function gameLoop() {
    stage.update();
}

function buttonClicked() {
    
}

function buttonOut() {
   
}

function buttonOver() {
   
}

function main() {
	game = new createjs.Container(); // Instantiates the Game container
	
	background = new createjs.Bitmap("");
	game.addChild(background); // Add the background image to the game container
	
	spinButton = new createjs.Bitmap();
	game.addChild(spinButton);
	spinButton.x = 410;
	spinButton.y = 545;


	stage.addChild(game); // Adds the game container to the stage    

    
}


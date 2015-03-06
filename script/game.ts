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

function spinButtonClicked() {
    console.log("Spin Button Clicked");
}

function spinButtonOut(bitmap: createjs.Bitmap) {
	spinButton.alpha = 1; //100% alpha
   //Console.log("spin button out");
}

function spinButtonOver(bitmap: createjs.Bitmap) {
   spinButton.alpha = 0.7;
   //Console.log("spin button over");
}

function createUI() {
background = new createjs.Bitmap("assets/images/background.png");
	game.addChild(background); // Add the background image to the game container
	
	//Spin button
	spinButton = new createjs.Bitmap("assets/images/spinButton.png");
	game.addChild(spinButton);
	spinButton.x = 410;
	spinButton.y = 545;

	//spin button event listeners
	spinButton.addEventListener("click", spinButtonClicked);
	spinButton.addEventListener("mouseover", spinButtonOver, this);
	spinButton.addEventListener("mouseout", spinButtonOut, this);

	//Bet Max button
	betMaxButton = new createjs.Bitmap("assets/images/betMaxButton.png");
	game.addChild(betMaxButton);
	betMaxButton.x = 325;
	betMaxButton.y = 560;

	//Bet One button
	betOneButton = new createjs.Bitmap("assets/images/betOneButton.png");
	game.addChild(spinButton);
	betOneButton.x = 235;
	betOneButton.y = 560;

	//Reset button
	resetButton = new createjs.Bitmap("assets/images/resetButton.png");
	game.addChild(resetButton);
	resetButton.x = 150;
	resetButton.y = 560;

	//Power button
	powerButton = new createjs.Bitmap("assets/images/powerButton.png");
	game.addChild(powerButton);
	powerButton.x = 55;
	powerButton.y = 560;

}


function main() {
	game = new createjs.Container(); // Instantiates the Game container
	
	createUI();

	stage.addChild(game); // Adds the game container to the stage    

    
}


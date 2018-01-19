var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var mode;
var colors;
var pickedColor;

reset.addEventListener("click", resetColor);

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	mode = 3;
	resetColor();
});
hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	mode = 6;
	resetColor();
});


//Initialize the game
init();


//Functions

function init(){
	//Set to the hard mode
	mode = 6;
	//Generate all colors randomly
	colors = generateRandomColors(mode);
	//Pick one color
	pickedColor = pickColor();
	//Set the text rgb in the title
	colorDisplay.textContent = pickedColor;
	//Play the game
	play(mode);
}

function changeColors(color){
	//loop through all squares
	for(var i = 0;i < mode; i++){
	//change each square to math given color
	squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function resetColor(){
	//generate all new colors
	colors = generateRandomColors(mode);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//refresh the message and reset h1 background color
	reset.textContent = "New Colors"
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	//play the game again chaging square colors
	play(mode);
}

function play(mode){
	for(var i = 0; i < mode; i++){
	//add inital colors to squares
	squares[i].style.backgroundColor = colors[i];
	if (mode === 3){
		for(var j = mode;j < squares.length; j++)
			squares[j].style.backgroundColor = "#232323";}

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare color to a pickedColor
		if(clickedColor === pickedColor){
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Wrong";
		}})
											}
				}

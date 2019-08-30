var colors = []
var pickedColor;
var currentDifficulty = 6;

// HTML elements
var squares = document.querySelectorAll(".square");
var pickdColorDisplay = document.querySelector("#pickedColorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var secondRowSquares = document.querySelectorAll(".secondRow");

setUpGame();

resetButton.addEventListener("click", function(){
    restartGame();
});

function restartGame() {
    setUpGame();
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
}

function setUpGame() {

    setUpModeButtons();

    // generate random colors and change squares to them
    colors = generateRandomColors(currentDifficulty);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;

    setUpSquares();
}

function setUpModeButtons() {
    // add event listeners to mode buttons
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            this.textContent === "Easy" ? currentDifficulty = 3: currentDifficulty = 6;
    
            // remove previously selected
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
    
            // make button selected
            this.classList.add("selected");
    
            restartGame();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        // adjust visibility of squares based on mode (difficulty)
        // add colors to squares
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            if (this.style.backgroundColor === pickedColor) {
                // what happens if you win
                // all the colors become the picked color
                changeColor(pickedColor);
                resetButton.textContent = "Play Again?"
                messageDisplay.textContent = "Correct!";
                
            } else {
                // what happens if you got it wrong
                // square you picked disappears
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    } 
}

function changeColor(color) {
    // change square colors
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }
    h1.style.backgroundColor = pickedColor;
}

function pickColor() {
    // pick a random number from 0 to the last index of the color array
    var RandomNumber = Math.floor(Math.random() * colors.length);
    return colors[RandomNumber];
}

function generateRandomColors(amountOfColors) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < amountOfColors; i++) {
        var color = randomColor();
        arr.push(color);
    }
    // return the array
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")"
    return color;
}








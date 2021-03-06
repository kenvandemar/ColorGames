//var colors = [
//    "rgb(255, 0, 0)",
//    "rgb(255, 255, 0)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)",
//    "rgb(255, 0, 255)",
//
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    
    for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
       this.classList.add("selected");
        
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//        if(this.textContent === "Easy"){
//            numSquares = 3;
//        }else{
//            numSquares = 6;
//        }
        reset();
        
        //figure out how many squares to show
        // pick new colors
        // pick a new picked colors
        //update page to reflect changes
    });
 }
}



function reset(){
    colors = generateRandomColors(numSquares); 
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;    
   resetButton.textContent = "New Colors";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
             squares[i].style.display = "block";
             squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }     
        h1.style.background = "steelblue";
}
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");


//easyBtn.addEventListener("click", function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numSquares = 3;    
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//});
//
//hardBtn.addEventListener("click", function(){
//    
//     easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){    
//        squares[i].style.background = colors[i];
//        squares[i].style.display = "block";
//    }
//});

resetButton.addEventListener("click", function(){
    reset();
//    //generate ALl new Colors
//   colors = generateRandomColors(numSquares); 
//    //pick a new random color from array
//    pickedColor = pickColor();
//    //change colorDisplay to match picked Color
//    colorDisplay.textContent = pickedColor;
//    
//   this.textContent = "New Colors";
//    //change colors of squares
//    for(var i = 0; i < squares.length; i++){
//        squares[i].style.background = colors[i];
//    }
//        h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    
    //click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
       var clickedColor = this.style.background;                
        //compare color to pickedColor
     if(clickedColor === pickedColor){
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "Play Again?";
          changeColor(clickedColor);
          h1.style.background = clickedColor;
      
        } else {
            this.style.background="#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColor(color){
    // loop through all squares
    for (var i = 0; i < squares.length; i++){
        // change each color to match given color
    squares[i].style.background = color;
    }        
}

function pickColor(){
    //pick a random number
 var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    // use that number to access array
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0 ; i < num; i++){
         //getRandomColor and push into array
        arr.push(randomColor())             
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
 var r =   Math.floor( Math.random() * 256);    
    //pick a "green" from 0 - 255
 var g =   Math.floor( Math.random() * 256);    
    //pick a "blue" from 0 - 255
 var b =   Math.floor( Math.random() * 256);    
    
return "rgb(" + r + ", " + g + ", " + b + ")";
}


























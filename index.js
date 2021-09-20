// Right Dice
var randomNumer1 = Math.ceil(Math.random()*6); //1-6
var dice1Source = "images/dice"+ randomNumer1 +".png"; //src of dice 1 - dice 6
document.querySelectorAll("img")[0].setAttribute("src", dice1Source); //change the right dice1

//Left dice
var randomNumber2 = Math.ceil(Math.random()*6);
var dice2Source = "images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", dice2Source);

//Result
if (randomNumer1 > randomNumber2){
   document.querySelector("h1").textContent = " 🚩 Player 1 Win!";
} else if (randomNumber2 > randomNumer1){
   document.querySelector("h1").textContent = " Player 2 Win! 🚩";
} else {
   document.querySelector("h1").textContent = "Draw!";
}

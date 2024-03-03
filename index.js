var randomNumber1;
var randomNum1 = Math.floor(Math.random(randomNumber1)*6)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");

var randomNumber2;
var randomNum2 = Math.floor(Math.random(randomNumber2)*6)+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");

if(randomNum1>randomNum2){
 document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else if(randomNum1<randomNum2){
 document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
else{
 document.querySelector("h1").innerHTML="Draw!";
}
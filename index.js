var rand1 = Math.floor(6 * Math.random()) + 1;
var rand2 = Math.floor(6 * Math.random()) + 1;

document.querySelector("#left-dice").setAttribute("src","images/dice"+rand1+".png");
document.querySelector("#right-dice").setAttribute("src","images/dice"+rand2+".png");

if(rand1 > rand2){
    document.querySelector("h1").innerHTML = "✌player1 Wins✔";
}
else if(rand2 > rand1){
    document.querySelector("h1").innerHTML = "✌player2 Wins✔";
}
else{
    document.querySelector("h1").innerHTML = "✌It's a Tie♥";
}
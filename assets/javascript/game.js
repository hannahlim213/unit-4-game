$(document).ready(function(){

// Declare variables for crystals, wins, loses, number

var randNum = randomNumberGenerator(19,120);
var scoreCounter = 0;
var wins = 0;
var loses = 0;
var crystal1 = randomNumberGenerator(1,12);
var crystal2 = randomNumberGenerator(1,12);
var crystal3 = randomNumberGenerator(1,12);
var crystal4 = randomNumberGenerator(1,12);

console.log (randNum)
console.log (crystal1)

// Functions

    // Title Crystal animation
    // $("h1").click(function() {
    //     $("#titleCrystalGame").fadeToggle("slow","linear");
    // });

    // Crsytals should be 1 - 12; Magic number to be guessed should be 19 - 120

    function randomNumberGenerator (min,max) {
        return Math.floor(Math.random() * (max - min +1) + min);
    }
    
    // Update wins and loses
    function updateWinsLoses (){
        if (scoreCounter === parseInt(randNum)) {
            reset();
            wins++;
            $("#wins").html(wins);
            
        }
        else if (scoreCounter> parseInt(randNum)) {
            reset();
            loses++;
            $("#loses").html(loses);
            
        }
    }
    
    // Restart game 
    function reset(){
        randNum = randomNumberGenerator(19,120);
        $("#magic-number").html(randNum)
        scoreCounter = 0;
        crystal1 = randomNumberGenerator(1,12);
        $("#score-counter").html(scoreCounter)
        crystal2 = randomNumberGenerator(1,12);
        crystal3 = randomNumberGenerator(1,12);
        crystal4 = randomNumberGenerator(1,12);
    }


// Main Process

    // When user clicks crystal, update score counter 

    
    $("#blue-crystal").on("click",function() {
        $("#blue-crystal").attr("value", crystal1);
        crystal1 = parseInt(crystal1);
        scoreCounter += crystal1;
        $("#score-counter").html(scoreCounter)
        updateWinsLoses();
    });

    $("#green-crystal").on("click",function() {
        $("#green-crystal").attr("value", crystal2);
        crystal2 = parseInt(crystal2);
        scoreCounter += crystal2;
        $("#score-counter").html(scoreCounter)
        updateWinsLoses();
    });

    $("#red-crystal").on("click",function() {
        $("#red-crystal").attr("value", crystal3);
        crystal3 = parseInt(crystal3);
        scoreCounter += crystal3;
        $("#score-counter").html(scoreCounter)
        updateWinsLoses();
    });

    $("#yellow-crystal").on("click",function() {
        $("#yellow-crystal").attr("value", crystal4);
        crystal4 = parseInt(crystal4);
        scoreCounter += crystal4;
        $("#score-counter").html(scoreCounter)
        updateWinsLoses();
    });
    
    $("#magic-number").html(randNum)
    // If scoreCounter equals randNum, call updateWinsLoses 


   
    
});

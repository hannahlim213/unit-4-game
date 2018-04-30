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
            wins++;
            $("#wins").html(wins);
        }
        else if (scoreCounter> parseInt(randNum)) {
            loses++;
            $("#loses").html(loses);
        }
    }
    
    // Restart game 
    function restart(){
        randNum = randomNumberGenerator(19,120);
        scoreCounter = 0;
        wins = 0;
        loses = 0;
        crystal1 = randomNumberGenerator(1,12);
        crystal2 = randomNumberGenerator(1,12);
        crystal3 = randomNumberGenerator(1,12);
        crystal4 = randomNumberGenerator(1,12);
    }


// Main Process

    // When user clicks crystal, update score counter 

    
    $("#blue-crystal").on("click",function() {
        crystal1 = $("#blue-crystal").attr("value", crystal1);
        crystal1 = parseInt(crystal1);
        scoreCounter += crystal1;
        $("#scoreCounter").html(scoreCounter)
    });

    $("#green-crystal").on("click",function() {
        crystal2 = $("#green-crystal").attr("value", crystal2);
        crystal2 = parseInt(crystal2);
        scoreCounter += crystal2;
        $("#scoreCounter").html(scoreCounter)
    });

    $("#red-crystal").on("click",function() {
        crystal3 = $("#red-crystal").attr("value", crystal3);
        crystal3 = parseInt(crystal3);
        scoreCounter += crystal3;
        $("#scoreCounter").html(scoreCounter)
    });

    $("#yellow-crystal").on("click",function() {
        crystal4 = $("#yellow-crystal").attr("value", crystal4);
        crystal4 = parseInt(crystal4);
        scoreCounter += crystal4;
        $("#scoreCounter").html(scoreCounter)
    });


    // If scoreCounter equals randNum, call updateWinsLoses 

    if (scoreCounter === randNum) {
        wins++;
        $("#wins").html("wins");
    }
    else if (scoreCounter> randNum) {
        loses++;
        $("#loses").html("loses");
        
    }
    restart();
   
    


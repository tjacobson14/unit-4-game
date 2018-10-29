$(document).ready(function () {


    // A game with 4 crystals and Random Result
    // Every crystal needs to have a random number between 1-12
    // A new random number should generate when we win/lose
    // When clicking any crystal, the assosicated value should be added to the previous result
    // Until it equals the total score
    // It it is not equal, then we start over
    // If it is equal, then we increment a win counter



    var magicNumber;
    var win = 0;
    var lose = 0;
    var score = 0;

    var initalize  = function () {

        $(".crystals").empty();

        var images= [
            "https://cdn.dribbble.com/users/315053/screenshots/1938702/diamond-8-2.gif",
            "https://cdn.dribbble.com/users/22930/screenshots/1979812/rupee_flat.gif",
            "https://cdn.dribbble.com/users/1303003/screenshots/3607610/blue-rupee.gif",
            "https://cdn.dribbble.com/users/563509/screenshots/1978545/rupee.gif",
        ];

        magicNumber = Math.floor(Math.random() * 90) + 30;
        // This is generating a random "magic" number 

        $("#magicNumber").html("Magic Number: " + magicNumber);
        // This is writing the magic number to the page
        console.log(magicNumber);

        for (var i = 0; i < 4; i++) {
            // This is generating a random value for each of the four crystals using a number from 1-10.
            var random = Math.floor(Math.random() * 11) + 1;
            console.log(random);

            // Creates four new div's within the crystals class. 
            var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });
            // Adds Gif's to page using an array of Url's, and applying attributes. 
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size" : "cover",
            });
           
        $(".crystals").append(crystal);
        }
        $("#score").html("Total Score:" + score);

    }
    // Write's the score to the html 
    $("#score").html("Total Score:" + score);

    // Start and Reset Game Upon loading. 
    initalize ();

    // Event Delegation? 
    $(document).on("click", ".crystal", function () {

        var num = parseInt($(this).attr("data-random"));

        score += num;

        $("#score").html("Total Score: " + score);

        console.log(score);

        if (score > magicNumber) {
            lose++;

            $("#lose").html("Losses: " + lose);

            score = 0;

            initalize();
        }

        if (score === magicNumber) {
            win++;

            $("#win").html("Wins: " + win);

            score = 0;

            initalize();
        }
    

    })
});


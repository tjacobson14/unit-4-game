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

        magicNumber = Math.floor(Math.random() * 80) + 30;
        // This is generating a random "magic" number 

        $("#magicNumber").html("Magic Number: " + magicNumber);

        // console.log(magicNumber);

        for (var i = 0; i < 4; i++) {

            var random = Math.floor(Math.random() * 9) + 1;
            // console.log(random);


            var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size" : "cover",
            });
           
        $(".crystals").append(crystal);
        }
        $("#score").html("Total Score:" + score);

    }

    $("#score").html("Total Score:" + score);

    initalize ();

    // Event Delegation? 
    $(document).on("click", ".crystal", function () {
        // console.log($(this).attr("data-random"));

        var num = parseInt($(this).attr("data-random"));

        score += num;

        $("#score").html("Total Score:" + score);

        console.log(score);

        if (score > magicNumber) {
            lose++;

            $("#lose").html("LOSSES:" + lose);

            score = 0;

            initalize();
        }
        else if (score === magicNumber) {
            win++;

            $("#win").html("WINS:" + win);

            score = 0

            initalize();
        }

    })
});


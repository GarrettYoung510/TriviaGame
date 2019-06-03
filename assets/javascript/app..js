$(document).ready(function() {
    // variable that will hold our setInterval that runs the timer
    var intervalID;

    // variable for if game is running
    var gameRunning;

    // track score
    let score = 0;

    // variable for timeleft
    let timeleft = 10;

    // variable for answer value
    let answerValue = 0;

    $("#trivia").hide();
    // start the trivia hidden

    $("#submit").hide();
    // submit button hidden

    $("#restart").hide();
    // restart button hidden

    $("#start").on("click", run);

    // submit button that ends game
    $("#submit").on("click", endGame);

    // restart button that runs restart function
    $("#restart").on("click", restart);

    function run() {

        $("#start").hide();
        // hide start button

        $("#trivia").show();
        // shows trivia

        $("#submit").show();
        // show submit button

        $("#restart").show();
        // show restart button 

        clearInterval(intervalID);
        // clear intervalID

        intervalID = setInterval(decrement, 1000);
        // set interval ID as decrement, 1000 ms or 1 second
    }

    function decrement() {
        // lessens time

        timeleft--;
        // subtract 1 from timeleft
        $("#timeleft").text("Timeleft: " + timeleft);
        // update the text
        if (timeleft <= 3 && timeleft > 0) {
            $("#timeleft").addClass("red");
            // add class of .red change the text color to red using hexadecimals
        }
        if (timeleft === 0) {
            // ends game if timeleft equals 0
            endGame();

        }
    }


    function endGame() {
        $("#submit").hide();

        // ending the game function
        clearInterval(intervalID);
        // clear interval ID

        checkAnswers();
        // check answers 

        $('#timeleft').text("Your Score: " + score + " /3");
        // display score


    }

    function checkAnswers() {

        $("input:checked").each(function() {
                // function to check answers

                // var radios = $("#answer");

                // for (var i = 0, length = radios.length; i < length; i++) {
                // if (radios[i].checked) {
                //         // do whatever you want with the checked radio
                // score += parseInt(radios[i].value);

                //         // only one radio can be logically checked, don't check the rest
                // break;
                //     }
                // }

                // $('input[name=name_of_your_radiobutton]:checked').val();
                answerValue = $("input:checked").attr('value');
                // variable for holding the value of selected answer

                score += parseInt(answerValue);
                console.log(answerValue);
                console.log(score);
            })
            // break;
    }



    function restart() {

        // $("radio:").attr(".checked:false");
        // // reset answers

        clearInterval(intervalID);
        // clear intervalID

        intervalID = setInterval(decrement, 1000);
        // set interval ID as decrement, 1000 ms or 1 second

        score = 0;
        // reset score

        // reset timeleft
        timeleft = 10;

        $("#submit").show();
        // reshow submit button
    }
});
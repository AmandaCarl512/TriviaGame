$(document).ready(function() {
    var startTime = 30;
    var questions = [
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
        "question6",
        "question7",
        "question8"
    ];
    var guessesCorrect = 0;
    // correct answers
    var guessesIncorrect = 0;
    // questions guessed wrong
    var noGuess = 0;
    //questions not answered

    function endGame() {
        $("#startPage").css("display", "none");
        $("#quizPage").css("display", "none");
        $("#resultsPage").css("display", "block");
        scoreAnswers();
        $("#guessesCorrect").html(guessesCorrect);
        $("#guessesIncorrect").html(guessesIncorrect);
        $("#noGuess").html(noGuess);
    }

    function updateTimer() {
        $("#timer").html(startTime--);
        if (startTime == 0) {
            endGame();
        }
    }

    function resetAnswers() {
        $("input:checked").prop("checked", false);
    }

    function startGame() {
        $("#startPage").css("display", "none");
        $("#quizPage").css("display", "block");
        $("#resultsPage").css("display", "none");
        guessesCorrect = 0;
        guessesIncorrect = 0;
        noGuess = 0;
        startTime = 30;
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    function scoreAnswers() {
        for (var i=0; i < questions.length; i++) {
            var questionName = questions[i];
            if ($("input[name='"+questionName+"']:checked").val() === "true") {
                guessesCorrect++;
            } else if ($("input[name='"+questionName+"']:checked").val() === "false") {
                guessesIncorrect++;
            } else {
                noGuess++;
            }
        }
    }

    $("#startButton").on("click", startGame);
    $("#submitQuiz").on("click", endGame);
    $("#retry").on("click", startGame);


    // Find the selected answer in the HTML.
    // Handle what happens if the answer is correct.
    // Handle what happens if the answer is wrong.

    // need a way to collect answers - right and wrong
    // need a way to select an answer option - look at help page




});
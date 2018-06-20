$(document).ready(function() {

    var intID 
    var timeLeft = 31;
    var clockIsRunning = false;

    function time_converter(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
    };

    function Question1 () {

        // write the questions and answers to the page
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What becomes wetter the more it dries?</h2><br><p id='wrong_answer1'>Strawberries</p><br><p id='wrong_answer1'>Skin</p><br><p id='answer1'>A Towel</p><br><p id='wrong_answer1'>Water</p><br>"); 
        
        //This is called when id=answer is chosen
        function Question1Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A river</p>")
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question2, 1000*5);
        };
        //This is called when id=wrong answer is chosen
        function Question1Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A river</p>")
            clearInterval (intID);
            timeLeft = 5;
            setTimeout(Question2, 1000*5);
        };
        //This is called when timeout is reached
        function Question1TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A river</p>")
            clearInterval (intID);
            timeLeft = 5;
            setTimeout(Question2, 1000*5);
        };

        $("#answer1").click(Question1Correct) 
        $("#wrong_answer1").click(Question1Incorrect)

        function setTime () {
            timeLeft = 31;
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };

        intID = setInterval(setTime,1000)
        setTimeout(Question1TimeOut,1000*31); 

    };

    function Question2 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>I am invisible, weigh nothing, and if you put me in a barrel, it will become lighter. What am I?</h2><br><p id='wrong_answer2'>Air</p><br><p id='wrong_answer2'>Potatoes</p><br><p id='wrong_answer2'>Magic</p><br><p id='answer2'>A hole</p><br>"); 

        function Question2Correct () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A hole</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question3, 1000*2);
        };

        function Question2Incorrect () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A hole</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question3, 1000*2);
        };

        function Question2TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A hole</p>")
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question3, 1000*2);
        };

        $("#answer2").click(Question2Correct) 
        $("#wrong_answer2").click(Question2Incorrect)

        function setTime () {
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };

        intID = setInterval(setTime,1000)
        setTimeout(Question2TimeOut,1000*2); 

    };

    function Question3 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Throw me off the highest building, and I shall not break, but toss me in the smallest pool, and my life's at stake. What am I?</h2><br><p id='wrong_answer3'>My work laptop</p><br><p id='wrong_answer3'>Watermelon</p><br><p id='answer3'>Paper</p><br><p id='wrong_answer3'>Bowling ball</p><br>"); 

        function Question3Correct () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: Paper</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question4, 1000*2);
        };

        function Question3Incorrect () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: Paper</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question4, 1000*2);
        };

        function Question3TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: Paper</p>")
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question4, 1000*2);
        };

        $("#answer3").click(Question3Correct) 
        $("#wrong_answer3").click(Question3Incorrect)

        function setTime () {
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };

        intID = setInterval(setTime,1000)
        setTimeout(Question3TimeOut,1000*2); 

    };

    function Question4 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What can run but never walks, often murmurs, never talks, has a mouth but never eats, has a bed but never sleeps?</h2><br><p id='answer4'>A river</p><br><p id='wrong_answer4'>Stuffed Animal</p><br><p id='wrong_answer4'>A road</p><br><p id='wrong_answer4'>A door</p><br>"); 

        function Question4Correct () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A river</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question5, 1000*2);
        };

        function Question4Incorrect () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A river</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question5, 1000*2);
        };

        function Question4TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A river</p>")
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question5, 1000*2);
        };

        $("#answer4").click(Question4Correct) 
        $("#wrong_answer4").click(Question4Incorrect)

        function setTime () {
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };

        intID = setInterval(setTime,1000)
        setTimeout(Question4TimeOut,1000*2); 

    };

    function Question5 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What is always too late?</h2><br><p id='wrong_answer5'>My pizza</p><br><p id='wrong_answer5'>My homework</p><br><p id='wrong_answer5'>My bedtime</p><br><p id='answer5'>Regret</p><br>"); 

        function Question5Correct () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: Regret</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question6, 1000*2);
        };

        function Question5Incorrect () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: Regret</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question6, 1000*2);
        };

        function Question5TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: Regret</p>")
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(Question6, 1000*2);
        };

        $("#answer5").click(Question5Correct) 
        $("#wrong_answer5").click(Question5Incorrect)

        function setTime () {
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };

        intID = setInterval(setTime,1000)
        setTimeout(Question5TimeOut,1000*2); 

    };

    function Question6 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>I am always there, some distance away, somewhere between land and sky I lay, you may move toward me, yet distant I'll stay. What am I?</h2><br><p id='answer6'>The horizon</p><br><p id='wrong_answer6'>Bootcamp graduation</p><br><p id='wrong_answer6'>Your reflection</p><br><p id='wrong_answer6'>Shadow</p><br>"); 

        function Question6Correct () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: The horizon</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(EndPage, 1000*2);
        };

        function Question6Incorrect () {
            "<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: The horizon</p>"
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(EndPage, 1000*2);
        };

        function Question6TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: The horizon</p>")
            clearInterval (intID);
            timeLeft = 2;
            setTimeout(EndPage, 1000*2);
        };

        $("#answer6").click(Question6Correct) 
        $("#wrong_answer6").click(Question6Incorrect)

        function setTime () {
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };

        intID = setInterval(setTime,1000)
        setTimeout(Question6TimeOut,1000*2); 

    };

    function EndPage () {
        $("#question_card").html("How did you do?")
    };

    $("#start").click(Question1);
});

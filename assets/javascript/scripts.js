$(document).ready(function() {

    var intID 
    var timeLeft = 30;
    var clockRunning = false;

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    function time_converter(t) {
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

    // This function subtracts one unit of time, converts to readable time and pushes it to html when it is called
    function setTime () {
        timeLeft --
        convertedTime = time_converter(timeLeft) 
        $("#time_remaining").html(convertedTime)
        console.log("tick");
    };

    function Question1 () {

        // write the questions and answers to the page
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What becomes wetter the more it dries?</h2><br><p id='wrong_answer1'>Strawberries</p><br><p id='wrong_answer1'>Skin</p><br><p id='answer1'>A Towel</p><br><p id='wrong_answer1'>Water</p><br>"); 
        console.log("Write Question1 to the page");

        //This is called when id=answer is chosen
        function Question1Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A towel</p>")
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question2, 1000*4);
            console.log("Question1Correct");
        };

        //This is called when id=wrong answer is chosen
        function Question1Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A towel</p>")
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question2, 1000*4);
            console.log("Question1Incorrect");
        };

        //This is called when timeout is reached
        function Question1TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A towel</p>")
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question2, 1000*4);
            console.log("Question1TimeOut");
        };

        $(document).on("click", "#answer1", Question1Correct);
        $(document).on("click", "#wrong_answer1", Question1Incorrect);
        
        //if the clock is not running, sets the clock to running, and runs 'set time' every second
        if (!clockRunning) {
            clockRunning = true;
            timeLeft = 30;
            intID = setInterval(setTime, 1000);

        };

        //set a timeout for 30 seconds
        timeOutVar = setTimeout(Question1TimeOut,1000*30); 

    };

    function Question2 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>I am invisible, weigh nothing, and if you put me in a barrel, it will become lighter. What am I?</h2><br><p id='wrong_answer2'>Air</p><br><p id='wrong_answer2'>Potatoes</p><br><p id='wrong_answer2'>Magic</p><br><p id='answer2'>A hole</p><br>"); 
        console.log("Write Question2 to the page");

        function Question2Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A hole</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question3, 1000*4);
            console.log("Question2Correct");
        };

        function Question2Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A hole</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question3, 1000*4);
            console.log("Question2Incorrect");
        };

        function Question2TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A hole</p>")
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question3, 1000*4);
            console.log("Question2TimeOut");
        };

        $(document).on("click", "#answer2", Question2Correct);
        $(document).on("click", "#wrong_answer2", Question2Incorrect);
        
        //if the clock is not running, sets the clock to running, and runs 'set time' every second
        if (!clockRunning) {
            clockRunning = true;
            timeLeft = 30;
            intID = setInterval(setTime, 1000);
        };

        //set a timeout for 30 seconds
        timeOutVar = setTimeout(Question2TimeOut,1000*30); 

    };

    function Question3 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Throw me off the highest building, and I shall not break, but toss me in the smallest pool, and my life's at stake. What am I?</h2><br><p id='wrong_answer3'>My work laptop</p><br><p id='wrong_answer3'>Watermelon</p><br><p id='answer3'>Paper</p><br><p id='wrong_answer3'>Bowling ball</p><br>"); 
        console.log("Write Question3 to the page");

        function Question3Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: Paper</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question4, 1000*4);
            console.log("Question3Correct");
        };

        function Question3Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: Paper</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question4, 1000*4);
            console.log("Question3Incorrect");
        };

        function Question3TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: Paper</p>")
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question4, 1000*4);
            console.log("Question3TimeOut");
        };

        $(document).on("click", "#answer3", Question3Correct);
        $(document).on("click", "#wrong_answer3", Question3Incorrect);
        
        //if the clock is not running, sets the clock to running, and runs 'set time' every second
        if (!clockRunning) {
            clockRunning = true;
            timeLeft = 30;
            intID = setInterval(setTime, 1000);
        };

        //set a timeout for 30 seconds
        timeOutVar = setTimeout(Question3TimeOut,1000*30); 

    };

    function Question4 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What can run but never walks, often murmurs, never talks, has a mouth but never eats, has a bed but never sleeps?</h2><br><p id='answer4'>A river</p><br><p id='wrong_answer4'>Stuffed Animal</p><br><p id='wrong_answer4'>A road</p><br><p id='wrong_answer4'>A door</p><br>"); 
        console.log("Write Question4 to the page");

        function Question4Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A river</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question5, 1000*4);
            console.log("Question4Correct");
        };

        function Question4Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A river</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question5, 1000*4);
            console.log("Question4Incorrect");
        };

        function Question4TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A river</p>")
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question5, 1000*4);
            console.log("Question4TimeOut");
        };

        $(document).on("click", "#answer4", Question4Correct);
        $(document).on("click", "#wrong_answer4", Question4Incorrect);
        
        //if the clock is not running, sets the clock to running, and runs 'set time' every second
        if (!clockRunning) {
            clockRunning = true;
            timeLeft = 30;
            intID = setInterval(setTime, 1000);
        };

        //set a timeout for 30 seconds
        timeOutVar = setTimeout(Question4TimeOut,1000*30); 

    };

    function Question5 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What is always too late?</h2><br><p id='wrong_answer5'>My pizza</p><br><p id='wrong_answer5'>My homework</p><br><p id='wrong_answer5'>My bedtime</p><br><p id='answer5'>Regret</p><br>");

        function Question5Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: Regret</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question6, 1000*4);
            console.log("Question5Correct");
        };

        function Question5Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: Regret</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question6, 1000*4);
            console.log("Question5Incorrect");
        };

        function Question5TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: Regret</p>")
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(Question6, 1000*4);
            console.log("Question5TimeOut");
        };

        $(document).on("click", "#answer5", Question5Correct);
        $(document).on("click", "#wrong_answer5", Question5Incorrect);
        
        //if the clock is not running, sets the clock to running, and runs 'set time' every second
        if (!clockRunning) {
            clockRunning = true;
            timeLeft = 30;
            intID = setInterval(setTime, 1000);
        };

        //set a timeout for 30 seconds
        timeOutVar = setTimeout(Question5TimeOut,1000*30); 

    };

    function Question6 () {

        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>I am always there, some distance away, somewhere between land and sky I lay, you may move toward me, yet distant I'll stay. What am I?</h2><br><p id='answer6'>The horizon</p><br><p id='wrong_answer6'>Bootcamp graduation</p><br><p id='wrong_answer6'>Your reflection</p><br><p id='wrong_answer6'>Shadow</p><br>");

        function Question6Correct () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: The horizon</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(EndPage, 1000*4);
            console.log("Question6Correct");
        };

        function Question6Incorrect () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: The horizon</p>");
            clearTimeout(timeOutVar);
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(EndPage, 1000*4);
            console.log("Question6Incorrect");
        };

        function Question6TimeOut () {
            $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: The horizon</p>")
            clearInterval (intID);
            clockRunning = false;
            timeLeft = 4;
            setTimeout(EndPage, 1000*4);
            console.log("Question6TimeOut");
        };

        $(document).on("click", "#answer6", Question6Correct);
        $(document).on("click", "#wrong_answer6", Question6Incorrect);
        
        //if the clock is not running, sets the clock to running, and runs 'set time' every second
        if (!clockRunning) {
            clockRunning = true;
            timeLeft = 30;
            intID = setInterval(setTime, 1000);
        };

        //set a timeout for 30 seconds
        timeOutVar = setTimeout(Question6TimeOut,1000*30); 

    };

    function EndPage () {
        $("#question_card").html("How did you do?")
        console.log("Write EndPage to the page");
    };

    //This calls the Question1 function when the start button is clicked
    $(document).on("click", "#start", Question1);

});

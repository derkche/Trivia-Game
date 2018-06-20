$(document).ready(function() {

    var timeLeft = 30;
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
        // write to the dialogue hook in html
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What becomes wetter the more it dries?</h2><br><p id='wrong_answer1'>Strawberries</p><br><p id='wrong_answer1'>Skin</p><br><p id='answer1'>A Towel</p><br><p id='wrong_answer1'>Water</p><br>"); 

        function Question1Correct () {$("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A river</p>")};

        function Question1Incorrect () {$("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A river</p>")};

        function Question1TimeOut () {$("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A river</p>")};

        $("#answer1").click(Question1Correct) 
        $("#wrong_answer1").click(Question1Incorrect)

        function setTime () {
            timeLeft --
            convertedTime = time_converter(timeLeft) 
            $("#time_remaining").html(convertedTime)
        };
        
        setInterval(setTime,1000)
        setTimeout(Question1TimeOut,1000*30); 

    };

    function Question2 () {
        // write to the dialogue hook in html
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>I am invisible, weigh nothing, and if you put me in a barrel, it will become lighter. What am I?</h2><br><p id='wrong_answer'>Air</p><br><p id='wrong_answer'>Potatoes</p><br><p id='wrong_answer'>Magic</p><br><p id='answer'>A hole</p><br>");
    };

    function Question2Correct () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A hole</p>"};
    function Question2InCorrect () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A hole</p>"};
    function Question2TimeOut () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A hole</p>"};

    function Question3 () {
        // write to the dialogue hook in html
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Throw me off the highest building, and I shall not break, but toss me in the smallest pool, and my life's at stake. What am I?</h2><br><p id='wrong_answer'>My work laptop</p><br><p id='wrong_answer'>Watermelon</p><br><p id='answer'>Paper</p><br><p id='wrong_answer'>Bowling ball</p><br>");
    };

    function Question3Correct () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: Paper</p>"};
    function Question3InCorrect () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: Paper</p>"};
    function Question3TimeOut () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: Paper</p>"};

    function Question4 () {
        // write to the dialogue hook in html
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What can run but never walks, often murmurs, never talks, has a mouth but never eats, has a bed but never sleeps?</h2><br><p id='answer'>A river</p><br><p id='wrong_answer'>Stuffed Animal</p><br><p id='wrong_answer'>A road</p><br><p id='wrong_answer'>A door</p><br>");
    };

    function Question4Correct () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: A river</p>"};
    function Question4InCorrect () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: A river</p>"};
    function Question4TimeOut () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: A river</p>"};    

    function Question5 () {
        // write to the dialogue hook in html
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>What is always too late?</h2><br><p id='wrong_answer'>My pizza</p><br><p id='wrong_answer'>My homework</p><br><p id='wrong_answer'>My bedtime</p><br><p id='answer'>Regret</p><br>");
    };

    function Question5Correct () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: Regret</p>"};
    function Question5InCorrect () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: Regret</p>"};
    function Question5TimeOut () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: Regret</p>"}; 

    function Question6 () {
        // write to the dialogue hook in html
        $("#question_card").html("<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>I am always there, some distance away, somewhere between land and sky I lay, you may move toward me, yet distant I'll stay. What am I?</h2><br><p id='answer'>The horizon</p><br><p id='wrong_answer'>Bootcamp graduation</p><br><p id='wrong_answer'>Your reflection</p><br><p id='wrong_answer'>Shadow</p><br>");
    };

    function Question6Correct () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Correct!</h2><br><p>The correct answer was: The horizon</p>"};
    function Question6InCorrect () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Sorry, </h2><br><p>The correct answer was: The horizon</p>"};
    function Question6TimeOut () {"<h4>Time Remaining: <span id='time_remaining'></span></h4><h2>Time Out!</h2><br><p>The correct answer was: The horizon</p>"}; 

    $("#start").click(Question1);
});

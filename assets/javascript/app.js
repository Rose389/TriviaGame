// Open page with only timer, score box, and start button visible

//TIMER
	// timer counts down for ten seconds
		var countdown;
		var questionTimeout = setTimeout(function(){
			countdown = 
			$("#timer").html(countdown);
		}, 10000);

		var timeout = setTimeout("CheckTime()",1000);
        setInterval(function() {
        console.log('Time left: '+total_seconds+'s');
        }, 2000);

	// resets with every new question


//SCORE BOX
var score;

	//if answer is correct - a fun fact, with a relevant image, replaces question
	var answer = $(".answer").attr("value");

	if (answer === "true") {
		console.log("You were right!")

	// increases by one with every correct answer
	// also increases by number of points equal to time remaining
	var timeRemaining = ;
	score = score++
	// decreases by .5 with every incorrect answer

  
  alert(val);
});

getAnswer();



// if answer is not correct - question is replaced with "Too bad...you can try again later."
} else {
	console.log("Try again!")
};

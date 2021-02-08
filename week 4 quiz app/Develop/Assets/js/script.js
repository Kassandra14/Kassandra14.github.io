var testContainer = document.getElementById('test');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.getElementById("start-button");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var pos = test, question, choice, choices, chA, chB, chC, chD, correct = 0;

var score = 0;
var questions = [
    [ "A very userful tool for debugging is:", "console", "dictionary", "for loops", "coffee" "A" ],
    [ "Arrays in javascript are often used to store", "integers", "strings", "other arrays", "all of the above", "D" ]
];
    // {
    //     prompt: "A very useful tool for debugging is:\n(a) console\n(b) dictionary\n(c) for loops",        
    //     correctAnswer: "a"
    // },
    // {
    //     question: "objects have ______functions have _______:"
    //     answers: {
    //         a: 'properties, methods',
    //         b: 'functions, attributes'
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "Arrays in javascript are often used to store"
    //     answers: { 
    //         a: 'integers',
    //         b: 'strings',
    //         c: 'other arrays',
    //         d: 'all of the above'
    //     },
    //     correctAnswer: "d"
    // ),
    // {
    //     question: "The condition of an if/else statement is enclosed within:"
    //     answers: {
    //         a: 'curly brackets',
    //         b: 'square brackets', 
    //         c: 'parentheses'
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "What does the split method do?"
    //     answers: { 
    //         a: 'Turns a string into an array',
    //         b: 'Cuts an array in half',
    // },
    //     correctAnswer: "a"
    // }

//];

// startButton.addEventListener('click', startQuiz);


//  //variable to store html output
// const output = [];


//do we need an init function - like in student project and wat does it do as page loads
//function init() {
//    getWins();
//    getlosses();
//  }

// //start game function is called when the start button is clicked
// function startQuiz(){
//     startButton.classList.add('hide')
//     testContainer.classList.remove('hide')
//     setNextQuestion()
// };

startButton.addEventListener(onclick, renderQuestion, false);

function _(x) {
    return document.getElementById(x);
}
function renderQuestion () {
    test = _("test");
    if(pos >= questions.length) {
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct<h2>";
        pos = 0;
        correct = 0;
        return false;
    };

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='button' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='button' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='button' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='button' name='choices' value='D'> "+chD+"<br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
};
function checkAnswer () {
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }   
    }
    if(choice == questions[pos][5]) {
        correct++    
        alert("Correct");
    } 
    pos++
    renderQuestion();
} else {
    alert("Wrong");
};

submitButton.addEventListener(onclick, renderQuestion, false);


//we want to loop through the questions, user responds to each question and we evaluate whether they got it right before moving to next question

for(var i=0; i<questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].correctAnswer) {
        score++;
        alert("Correct!");
} else {
    alert("Wrong");
    }
};
//  this "/" means out of
alert("you got" + score + "/" + questions.length);


// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// code will go here
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
// }

//   // The loseGame function is called when timer reaches 0
// function loseGame() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
// }

// // These functions are used by init
// function getWins() {
//     // Get stored value from client storage, if it exists
//     var storedWins = localStorage.getItem("winCount");
//     // If stored value doesn't exist, set counter to 0
//     if (storedWins === null) {
//       winCounter = 0;
//     } else {
//       // If a value is retrieved from client storage set the winCounter to that value
//       winCounter = storedWins;
//     }
//     //Render win count to page
//     win.textContent = winCounter;
// }

// function getlosses() {
//     var storedLosses = localStorage.getItem("loseCount");
//     if (storedLosses === null) {
//       loseCounter = 0;
//     } else {
//       loseCounter = storedLosses;
//     }
//     lose.textContent = loseCounter;
// }


// function showQuestions(questions, quizContainer) {
// //store output and answer choices
//     var output = [];
//     var answers;

// // for each question...
// for(var i=0; i<questions.length; i++){
		
//     // first reset the list of answers
//     answers = [];

//     // for each available answer to this question...
//     for(letter in questions[i].answers){

//         // ...add an html radio button
//         answers.push(
//             '<label>'
//                 + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//                 + letter + ': '
//                 + questions[i].answers[letter]
//             + '</label>'
//         );
//     }
//     	// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }
// }

// showQuestions(questions, quizContainer);

// function showResults(){}

// // display quiz right away
// buildQuiz();

// // on submit, show results
// submitButton.addEventListener('click', showResults);

// function resetGame() {
//     // Resets win and loss counts
//     winCounter = 0;
//     loseCounter = 0;
//     // Renders win and loss counts and sets them into client storage
//     setWins()
//     setLosses()
// }

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", resetGame);

// We’ll use object literals to represent the individual questions and an array to hold all of the questions that make up our quiz. Using an array will make the questions easy to iterate over:

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
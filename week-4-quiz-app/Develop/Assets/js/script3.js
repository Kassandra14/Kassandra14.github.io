// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var startButton = document.getElementById('start-button');
var startScreen = document.getElementById('start-screen-container')
var questionContainer = document.getElementById('question-container')
var resultsContainer = document.getElementById('results-page')
const submitButton = document.getElementById('submit-button');

//timer
var timerEl = document.getElementById('timer')
var timer = 99;
var timeInterval;

var allQuestions = [
    {
        question: "What is not a falsy value?",
        possibleAnswers: {
            a:'undefined', 
            b: 'null', 
            c: 'false', 
            d: 'true'
        },
        answerIndex:  "d"
    },
    {
        question: "The contents of an array are enclosed within:",
        possibleAnswers: {
            a:'parentheses', 
            b: 'curly brackets', 
            c: 'quotes', 
            d: 'square brackets'
        },
        answerIndex:  "d"
    },
    {
        question: "String values must be enclosed within:",
        possibleAnswers: {
            a: 'quotes',
            b: 'curly brackets', 
            c: 'square brackets',
            d: 'parentheses'
        },
        answerIndex:  "a"
    },
    {
        question: "The conditions of if/else statements are enclosed within:",
        possibleAnswers: {
            a: 'quotes', 
            b: 'curly brackets', 
            c: 'square brackets', 
            d: 'parentheses'
        },
        answerIndex:  "b"
    },
    {
        question: "A very useful tool for debugging and identifying element content is:",
        possibleAnswers: {
            a: 'inspect console', 
            b: 'google', 
            c: 'console log', 
            d: 'all of these'
        },
        answerIndex:  "d"
    }
];


var questionIndex = 0;
var score = 0

//functin to display quiz
function startQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  allQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const possibleAnswers = [];

      // and for each available answer...
      for(letter in currentQuestion.possibleAnswers){

        // ...add an HTML radio button
        possibleAnswers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.possibleAnswers[letter]}
          </label>`
        );
      }
  // add this question and its answers to the output
  output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${possibleAnswers.join('')} </div>`
  );
}
);
 // finally combine our output list into one string of HTML and put it on the page
 questionContainer.innerHTML = output.join('');
}

//countdown function
function countDown() {
    time--;
    timerEl.textContent = "Time remaining: " + time;
    //once the timer hits 0, the game ends
    if (time === 0) {
        endGame();
    }
};
function showResults(){

    // gather answer containers from our quiz
    const answerContainers = questionContainer.querySelectorAll('.answers');
  //
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    allQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.answerIndex){
        // add to the number of correct answers
        numCorrect++;
      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${allQuestions.length}`;
}

//onsubmit show results
submitButton.addEventListener('click', function(event) { //questionContainer.classlist.toggle('hide')
showResults()
});

//load quiz page on click
startButton.addEventListener('click', function(event) {
    startScreen.style.display = 'none'
    timerEl.classList.toggle('hide')
    questionContainer.classList.toggle('hide')
    startQuiz(questionIndex)
    
    const runTimer = setInterval(function(){
        if(timer === 0 ) {
            clearInterval(runTimer)
            //run some end game scenario or function
        }
        timerEl.innerHTML = timer;
        timer--
    }, 1000)

});
    
startQuiz();  
showResults();
    

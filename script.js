const startBtn = document.querySelector('#startBtn');
const startScreen = document.querySelector('#startScreen');
const quizScreen = document.querySelector('#quizScreen');


// Questions as an array or an object
let questions = [
    {
        question: 'What is my middle name?' ,
        choices: ['choice1', 'Khoa', 'choice3', 'choice4'],
        correct: 'Khoa'
    },
    {
        question: 'How many siblings do I have?',
        choices: ['One', 'Two', 'Three', 'Four'],
        correct: 'Two'
    },
    {
        question: 'Placeholder?',
        choices: ['choice1', 'choice2', 'choice3', 'choice4'],
        correct: 'choice1'
    },
    {
        question: 'Placeholder?',
        choices: ['choice1', 'choice2', 'choice3', 'choice4'],
        correct: 'choice4'
    },
    {
        question: 'Placeholder?',
        choices: ['choice1', 'choice2', 'choice3', 'choice4'],
        correct: 'choice1'
    },
    {
        question: 'Placeholder?',
        choices: ['choice1', 'choice2', 'choice3', 'choice4'],
        correct: 'choice2'
    },
]

// Code a start button that starts a timer and begins the quiz with a question
startBtn.addEventListener('click', startGame())

startGame() {
    startScreen.setAttribute('class', 'hide');
    quizScreen.setAttribute('class','show');
    timer = setInterval(function(){
        
    })
}

// When a question is answered, present next question
function displayQuestion(){


}

// When a question is answered incorrectly, subtract time from clock


// When all questions are answered or when timer reaches 0, end game
function endGame(){


}
// When game is over, save initials and score

const startBtn = document.querySelector('#startBtn');
const startScreen = document.querySelector('#startScreen');
const quizScreen = document.querySelector('#quizScreen');
const time = document.querySelector('#time')
const quizQuestion = document.querySelector('#quizQuestion')
const quizChoices = document.querySelector('#quizChoices')
var count = 60
var currentIndex = 0

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
startBtn.addEventListener("click", startGame)

function startGame() {
    time.textContent = --count + " seconds left" // Displays timer instantly
    startScreen.setAttribute('class', 'hide');
    quizScreen.setAttribute('class','show');
    let timer = setInterval(function(){
        time.textContent = --count + " seconds left";
        if(count <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000)
    displayQuestion()
}

// When a question is answered, present next question
function displayQuestion(){
    let currentQuestion = questions[currentIndex];
    quizQuestion.textContent = currentQuestion.question;
    quizChoices.innerHTML = "";

    for (let i=0;i<questions[currentIndex].choices.length;i++) {
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[currentIndex].choices[i];
        choiceBtn.addEventListener('click', checkAnswer);
        quizChoices.appendChild(choiceBtn);
    }
}

// When a question is answered incorrectly, subtract time from clock
function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentIndex].correct;
    if(selectedAnswer !== correctAnswer) {
        count -= 10;
    } else {
        currentIndex++;
    if (currentIndex === questions.length) {
        endGame();
    } else {
        displayQuestion();
    }
    }

}

// When all questions are answered or when timer reaches 0, end game
function endGame(){
    clearInterval(timer);
    

}
// When game is over, save initials and score

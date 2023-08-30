const startBtn = document.querySelector('#startBtn');
const startScreen = document.querySelector('#startScreen');
const quizScreen = document.querySelector('#quizScreen');
const time = document.querySelector('#time')
const quizQuestion = document.querySelector('#quizQuestion');
const quizChoices = document.querySelector('#quizChoices');
const scoreScreen = document.querySelector('#scoreScreen')
const = document.querySelector('#')
const = document.querySelector('#') 

var count = 60;
var currentIndex = 0;
var timer

// Questions as an array or an object
let questions = [
    {
        question: 'What is my middle name?' ,
        choices: ['Kevin', 'Khoa', 'Khanh', 'Kyle'],
        correct: 'Khoa'
    },
    {
        question: 'How many siblings do I have?',
        choices: ['One', 'Two', 'Three', 'Four'],
        correct: 'Two'
    },
    {
        question: 'What is my birthday month?',
        choices: ['April', 'May', 'June', 'July'],
        correct: 'April'
    },
    {
        question: 'Where do I live?',
        choices: ['Santa Ana', 'Costa Mesa', 'Irvine', 'Tustin'],
        correct: 'Tustin'
    },
    {
        question: 'Where do I work?',
        choices: ['Hospital', 'Fire Department', 'Lululemon', 'Sandwich Emporium'],
        correct: 'Hospital'
    },
    {
        question: 'What is my favorite food?',
        choices: ['Ramen', 'Pho', 'Sushi', 'Pizza'],
        correct: 'Pho'
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
    }
    currentIndex++;
    if (currentIndex === questions.length) {
        endGame();
    } else {
        displayQuestion();
    }
    }

// When all questions are answered or when timer reaches 0, end game
function endGame(){
    clearInterval(timer);
    var ;

    quizScreen.setAttribute('class','hide');

    
}
// When game is over, save initials and score

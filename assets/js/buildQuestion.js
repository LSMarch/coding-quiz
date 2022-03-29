// === list o' variables ===

var timerEl = document.querySelector('#countdown') //timer on quiz start
var startBtn = document.querySelector('#start-button') //start button on start page
var startPage = document.querySelector('#start-page') //initial page
var pageTitle = document.querySelector('#card-title') //title of page
var quizPage = document.querySelector('#quiz-page') // quiz
var userScore = document.querySelector('#user-score')
var highScore = document.querySelector('#highscores')
var highScoreLink = document.querySelector('#highsocre-link')
var answerResult = document.querySelector('#corretAnswer')
var startText = document.querySelector('#start-page')
var quizQuestion = document.querySelector('#quiz-question')
var quizAnswers = document.querySelector('#quiz-answers')
var cTitle = document.querySelector('#card-title')
var userInput = document.querySelector('#user-input')



//var totalQuestions = questionArr.length;
var questionIndex = 0
var time = 20
var correct = 0
//var question, answer1, answer2, answer3, answer4, rightAnswer, previousScores
var totalScores = []
var savedScores = JSON.parse(localStorage.getItem('userData'))
var score = 0
var nextQuestion
var displayQuestion
// === quiz question array ===

var questionArr =[
    {question: "What are two words that every programmer first learns to code",
     mChoice:  ["Hey, you", "Ah, yeah!", "Hello, world", "Now what?"],    
    correctAnswer: "Hello, world"       
    },
    {question: "What is the golden rule of coding?",
     mChoice:  ["If it works, don't touch it", "Chrome DevTools is your friend", "Efficiency is key", "One language is all you need"],     
    correctAnswer: "If it works, don't touch it"       
    },
    {question: "What is the biggest lie in programming?",
    mChoice: ["You'll have fun", "HTML is a programming language", "It's easy once you understand", "It's fulfilling"],
    correctAnswer: "HTML is a programming language"
    },
    {question: "What is the greatest fear of programmers?",
    mChoice: ["Their computer will crash", "All the servers go down","Turning it off and on again doesn't work", "When they forget to save"],
    correctAnswer: "When they forget to save"
}]

// === start the quiz ===

startBtn.addEventListener('click', quizStart)

    //quizTime()
    //grabQuestion()    


// === start the quiz === actually tho ===

function quizStart(){
    cTitle.classList.add('d-none')
    startPage.classList.add('d-none')
    startBtn.classList.add('d-none')
    quizPage.classList.remove('d-none')
    nextQuestion = questionArr[questionIndex]

    //console.log(nextQuestion.question)

    displayQuestion(nextQuestion)
}

// === display question and answers ===

function displayQuestion(question){
    
    quizQuestion.innerHTML=JSON.stringify(questionArr[questionIndex].question)

    // === creating buttons for answers ===
    question.mChoice.forEach(element => {
        var btn = document.createElement('button')
        btn.className='btn btn-primary'
        btn.textContent=element
        quizAnswers.appendChild(btn)
        btn.addEventListener('click', displayNext)
    })
}

function displayNext(e){
    questionIndex++
    if(questionIndex < questionArr.length){
        result(e.target.innerText == nextQuestion.correctAnswer)
        quizAnswers.textContent=''
        if(questionIndex < questionArr.length){
            nextQuestion = questionArr[questionIndex]
            displayQuestion(nextQuestion)
        } else {
            questionIndex = 0
            displayQuestion(nextQuestion)
        }
    } else {
        //console.log(quizOver)
        quizOver()
    }
}

function result(response) {
    if(response) {
        alert.textContent="You betcha!" 
        score++       
    } else {
        alert.textContent = "Ope!"
        time = time -5
        timerEl.innerHTML = time
    }

    setTimeout(function(){
        alert.textContent = ''
    }, 500)

}

function quizOver (){
    userScore.textContent= time
    userInput.classList.remove('d-none')
    quizPage.classList.add('d-none')
    timerEl.classList.add('d-none')
}

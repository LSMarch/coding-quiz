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
var endPage = document.querySelector('#final-page')
var submitBtn = document.querySelector('#submit-score')
var alert = document.querySelector('#response')


var savedScores = JSON.parse(localStorage.getItem('userData'))
var scoreTable = document.querySelector('#highscore-table')
var clearBtn = document.querySelector('#clear-button')
var backBtn = document.querySelector('#back-button')
var hallOfFame = document.querySelector('#hall-of-fame')


var questionIndex = 0
var time = 20
var correct = 0

var totalScores = []

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
    
        


// === start the quiz === actually tho ===

function quizStart(){
    cTitle.classList.add('d-none')
    startPage.classList.add('d-none')
    startBtn.classList.add('d-none')
    quizPage.classList.remove('d-none')
    nextQuestion = questionArr[questionIndex]
    if(savedScores !== null) {
        totalScores = savedScores;
    }

    //console.log(nextQuestion.question)

    displayQuestion(nextQuestion)
    quizTime()
}

// === timer time ===

function quizTime() {
    
    var timeInterval = setInterval(function() {
        time--
        timerEl.textContent = "Time : "+time        
        }, 1000) 
    
}

// === score card ===

function scoreCard(x,y){
    var userInfo = {
        inits: x,
        userScore: y
    }
    totalScores.push(userInfo)
    localStorage.setItem("userInfo", JSON.stringify(totalScores))

}

// === display question and answers ===

function displayQuestion(question){
    
    quizQuestion.innerHTML=JSON.stringify(questionArr[questionIndex].question)

    // === creating buttons for answers ===
    question.mChoice.forEach(element => {
        var btn = document.createElement('button')
        btn.className='btn btn-info col-6 mx-auto'
        btn.textContent=element
        quizAnswers.appendChild(btn)
        btn.addEventListener('click', displayNext)
    })
}

// === display next question ===

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

// === answer response ===

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
    var finalScore = document.createElement('p')
    finalScore.textContent= score
    endPage.appendChild(finalScore)
     

    endPage.classList.remove('d-none')
    userScore.classList.remove('d-none')
    quizPage.classList.add('d-none')
    timerEl.classList.add('d-none')
}

submitBtn.addEventListener('click', function(){
    var name = document.querySelector('#user-input').value 
    scoreCard(name, score)
    hallOfFame.classList.remove('d-none')

})

function showScores() {
    if(savedScores !== null) {
        var playerName = document.createElement('td')
        userInput = playerName
        var playerScore = document.createElement
    }
}

backBtn.addEventListener('click', function(){
    hallOfFame.classList.add('d-none')
    startPage.classList.remove('d-none')
})

clearBtn.addEventListener('click', function(){
    scoreTable.innerHTML = ''
    window.localStorage.clear()
})
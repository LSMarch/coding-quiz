//html skeleton
    //timer and highscore
    //start screen 
        //heading, rules and start button
    //question screen
        //questions and buttons
        //working timer
        //answer feedback
    //end of game
        //final score
        //form and submit
            //preventDefault
    //only what you need
    //stuff will be appended

//javascript
//declare variables and grab em
    //startpage
//create a multiple choice quiz
    //each answer is a button
        //eventListener("click,()")

    //result will pop-up with correct/incorrect on timer
        //if(answer correct){display correct for time} else {display wrong for time}
        //if answer wrong timer penalty issued

    //onclick next question and set of answers pops up

//create timer for quiz
    //done when timer is up
    //done when quiz is finished

//create highscores
    //each correct answer has a point value
    //point tracker
    //user can input initals to store highscore
    //localStorage

//cry and call lyzzi

//create array of objects holding questions...can store in different js file
    //answer choices
    //question text
    //correct answer

//create startquiz() function
    //hide start screen
    //reveal questions screen
    //grab first question in array
    //start timer

//getquestion()
    //create answer buttons

//correctanswer()
    //next question
    //add points
    //increment in index of question array

//incorrectanswer()
    //subtract time
    //next question

//endquiz()
    //hide question
    //reveal end screen
    //reveal final score, submit

//savescore()

console.log('work')

// === questions array ===

// === list o' variables ===

var timerEl = document.getElementById('countdown')
var startBtn = document.getElementById('start-button')
var quizArea = document.getElementById('question-screen')
var answer1 = document.getElementById('1')
var answer2 = document.getElementById('2')
var answer3 = document.getElementById('3')
var answer4 = document.getElementById('4')
var result = document.getElementById('end-screen')
var time
var questionArr = [] 
var score = 0

// === timer time ===

function quizTime() {
    var timeRemain = 4;
    var timeInterval = setInterval(function() {
        if (timeRemain > 1) {
            timerEl.textContent = "Time left: " + timeRemain 
            timeRemain--
        } else {
            timerEl.textContent = ''
            clearInterval(timeInterval)

        }
    }, 1000) //setInterval
    
} //end quizTime()

// === randomize questions === 

var questionArr =[
    {question: "What are two words that every programmer first learned to code",
     answer1:  "Hey, you",
     answer2: "Ah, yeah!",
     answer3: "Hello, world",
     answer4: "Now what?",
    correctAnswer: "answer3"       
    },
    {question: "What is the golden rule of coding?",
     answer1:  "If it works, don't touch it",
     answer2: "Chrome DevTools is your friend",
     answer3: "Efficiency is key",
     answer4: "One language is all you need",
    correctAnswer: "answer2"       
    }
]

// to store randomized questions
var randomQuestions = []

var shuffle = questionArr[Math.floor(Math.random() * (questionArr.length))]
if (!randomQuestions.includes(shuffle)) {
    randomQuestions.push(shuffle);
    console.log(randomQuestions)
}

var showQuestion = randomQuestions.join('')

// === start quiz biz ===

//start page
//on startBtn
    //hide start page
    //reveal queston page
    //call random question
function displayQuestions() {
    var display = document.querySelector(".col-6")
    display.addEventListener("click", function(event){
        if (Element.matches('button')) {
            var state = element.
        }
    })
}
   



startBtn.addEventListener('click', quizTime) 

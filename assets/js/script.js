console.log('work')

// === questions array ===
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

console.log(questionArr?.[0])

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
var totalQuestions = questionArr.length
var questionIndex = 0
var correct = 0
var question, answer1, answer2, answer3, answer4, rightAnswer, previousScores

var score = 0

// === timer time ===

function quizTime() {
    var timeRemain = 4;
    var timeInterval = setInterval(function() {
        timeRemain--
        timerEl.textContent = "Time : "+timeRemain
        if(timeRemain <= 0 || (questionIndex > totalQuestions-1)){
            clearInterval(timeInterval)
            //userScore.classList.add('d-none')
            quizPage.classList.add('d-none')
            //viewScore()
            //clearInterval(timeInterval)
            timerEl.textContent= ''
        }         
        }, 1000) 
    
} //end quizTime()

// === buttons for answers ===

var answersArray = [] //choice array
var btnArray = [] //div array

for(var i =0; i < 4; i++){
    var divEl = document.createElement('div')
    var mcBtns = document.createElement('button')
    mcBtns.setAttribute('data-index',i)
    mcBtns.setAttribute('class', 'btn btn-info')
    answersArray.push(mcBtns)
    btnArray.push(divEl) //mcBtns go in this div    
}
// === display right answer ===

function grabQuestion () {
    
    
    pageTitle.classList.add('d-none')
    startPage.classList.add('d-none')
    quizPage.classList.add('d-none')

    if(questionIndex > totalQuestions - 1) {
        return;
    } else {
        rightAnswer = questionArr[questionIndex].correctAnswer

        //display question
        pageTitle.textContent = questionArr[questionIndex].question;        
        pageTitle.classList.remove('d-none')
    }
        for(var j = 0 ; j < 4 ; j++){
            
            var index = answersArray[j].getAttribute("data-index");
            answersArray[j].textContent = question[questionIndex].mChoice[index]  
            console.log(answersArray[j].textContent)
            //btnArray[j].appendChild(answersArray[j]);
            //quizPage.appendChild(btnArray[j]);
              
        
     }
    quizPage.classList.remove('d-none') // Display options
    }    
 
// === function for answers ===

quizPage.addEventListener('click', function(event){

    var element=event.target
    var userChoice = element.textContent
    var multipleChoice = userChoice.substring(3,userChoice.length)

    if(userChoice === rightAnswer){
        correct++


        // outcome.style.display='block'
        // answerResult.textContent = "Correct!" 
        // setTimeout(function(){
        //     answerResult.textContnet = "" 
        //         },500)
    } else {
        timeRemain -= 5;
        // answerResult.textContent="Wrong!"
        // setTimeout(function(){
        //     answerResult.textContent=''
        // },500)
    }
    questionIndex++
    grabQuestion()
})

// show score
function endScore(){

    pageTitle.textContent= "Quiz Finished";
    pageTitle.classList.remove('d-none')

    var fs = document.createElement('p');
    fs.textContent = "Your score : "+correct;
    userScore.appendChild.apply(fs);

    var form = document.createElement('form')
    var label = document.createElement('label')
    label.textContent = "Enter Initials"

    var text = document.createElement('input')
    text.setAttribute("id", "userName")
    //text.classList.add('ml-3')
}



startBtn.addEventListener('click', function() {
    quizTime()
    grabQuestion()    
}) 

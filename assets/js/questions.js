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

 //displays next question
 function nextQuestion(index) {
    var currentQuestion = randomQuestions[index]
    document.getElementById(question).innerHTML = currentQuestion.question; 
    document.getElementById(1).innerHTML = currentQuestion.answer1;
    document.getElementById(2).innerHTML = currentQuestion.answer2;
    document.getElementById(3).innerHTML = currentQuestion.answer3;
    document.getElementById(4).innerHTML = currentQuestion.answer4;
    //console.log(currentQuestion)
}   

function checkAnswer() {
    var currentQuestion = randomQuestions[indexnumber] //grab current question
    var currentQuestAnswer = currentQuestion.correctAnswer //get answer
    var answers = document.querySelector(".answer"); //grabs elements
    var goodAnswer = null

    // ??????
    answers.forEach((answer) => {
        if(answers.value === currentQuestAnswer) {
            goodAnswer = answers.labels[0].id
        }
    }) 
}

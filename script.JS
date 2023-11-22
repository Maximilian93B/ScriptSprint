const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);

function startGame() {
  startButton.classList.add('hide');
 shuffledQuestion = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0 ;
 questionContainer.classList.remove('hide');
 
  setNextQuestion()
}


function setNextQuestion() {
    showQuestion(shuffledQuestion[currentQuestionIndex]);
  

  
  questionContainer.classList.add('hide');
  startButton.classList.remove('hide');
}

function showQuestion(question) {
    questionElement.innerText = question.question
}



const questions = [ 
    {
        question: "What is 2 + 2",
        answer: [
            {text: "4", correct: true},
            { text: "22", correct: false}
        ]
        }    
]
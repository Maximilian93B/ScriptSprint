const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score")
const nameInput = document.getElementById("name-input");
const saveScoreBtn = document.getElementById("save-score-btn");


let score = 0 ;
let shuffledQuestion, currentQuestionIndex, timer ;
let timerInterval;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);



function startGame() {
    startButton.classList.add("hide");
    shuffledQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    timer = 300; 
    score = 0;
    // Start the timer   
    startTimer();
   
    scoreElement.classList.remove("hide");
    timerElement.classList.remove("hide"); 
    


    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function startTimer() {
    const timerInterval = setInterval(() => {
        timer--;
        updateTimerDisplay();

        if (timer <= 0) {
            clearInterval(timerInterval);
            handleEndOfGame();
        }
    }, 1000);
}


function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function showQuestion(question) {
    questionElement.innerText = question.question;

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = answer.text;
        button.addEventListener('click', (event) => selectAnswer(event, answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(event, selectedAnswer) {
    const selectedButton = event.target;

    if (selectedAnswer.correct) {
        // correct answer logic
        selectedButton.classList.add('correct');
        score += 1;
        console.log("Correct Answer! Score:", score); 
    } else {
        //wrong answer logic
        selectedButton.classList.add('wrong');
        timer -= 20; 
    }

    disableAnswerButtons();
    updateScoreDisplay(); 

    setTimeout(setNextQuestion, 1000);
}






function disableAnswerButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function updateScoreDisplay() {
    scoreElement.innerText = `Score: ${score}`;
}


function setNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestion.length) {
        showQuestion(shuffledQuestion[currentQuestionIndex]);
    } else {
        // No more questions, hide the question container and show the start button
        questionContainer.classList.add('hide');
        startButton.classList.remove('hide');
        clearInterval(timerInterval); // Stop the timer when all questions are answered
    }
}

function handleEndOfGame() {
 
   clearInterval(timerInterval)
    nameInput.classList.remove("hide");
    saveScoreBtn.classList.remove("hide");
   
 
}


///HIGH SCORES + SAVE





















const questions = [
    {
        question: "What does HTML stand for ? ",
        answers: [
            
            
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperTransfer Text Language", correct: false },
            { text: "HyperText Transfer Language", correct: false },
            { text: "HyperText Transcription Language", correct: false }
        ]
    },
    {
        question: " How do you create a hyperlink in HTML? ",
        answers: [
            { text: "<link>", correct: true },
            { text: "<a>", correct: false },
            { text: "<hlink>", correct: false },
            { text: "<hyper>", correct: false }
        ]
    },
    {
        question: "What does CSS stand for? ",
        answers: [
            { text: "Cascading Style Sheets", correct: true },          
            { text: " Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
          
        ]
    },
    {
        question: "When was JavaScript created?",
        answers: [
            { text: "1995", correct: true },
            { text: "1990", correct: false },
            { text: "2000", correct: false },
            { text: "1997", correct: false }
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answers: [
            { text: "2variable", correct: true },
            { text: "myVariable ", correct: false },
            { text: "_variable", correct: false },
            { text: " $variablet", correct: false }
        ]
    },
    {
        question: "How do you write a comment in JavaScript?",
        answers: [
            { text: "// This is a comment ", correct: true },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "/* This is a comment */", correct: false },
            { text: " -- This is a comment", correct: false }
        ]
    },
    {
        question: "What is the purpose of the document.getElementById() method in JavaScript?",
        answers: [
        { text: "To select an HTML element by ID.", correct: true },
        { text: " To select an HTML element by class name.", correct: false },
        { text: "To select an HTML element by tag name.", correct: false },
        { text: " To select all HTML elements on the page. ", correct: false },
    ]
    },
    {
        question: "Where is the recommended place to include the external CSS file in an HTML document?",
        answers: [
            { text: "Inside the <head> section", correct: true },
            { text: "At the end of the <body> section", correct: false },
            { text: "After the <html> tag", correct: false},
            { text: "Before the closing </head> tag", correct: false },
        ]
    },
    {
        question: "What is the purpose of the onclick attribute in HTML?",
        answers: [
            { text: "To specify a function to run when a button is clicked.", correct: true },
            { text: " To define a function in JavaScript.", correct: false },
            { text: "To include an external script file.", correct: false },
            { text: "To link to an external web page.", correct: false },
        ]
    },

];

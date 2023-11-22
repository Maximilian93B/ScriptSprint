const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');

    showQuestion(shuffledQuestion[currentQuestionIndex]);
}
function setNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestion.length) {
        showQuestion(shuffledQuestion[currentQuestionIndex]);
    } else {
        // No more questions, hide the question container and show the start button
        questionContainer.classList.add('hide');
        startButton.classList.remove('hide');
    }
}


function showQuestion(question) {
    questionElement.innerText = question.question;

    // Clear existing answer buttons
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

    // Create and append new answer buttons
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.text));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(selectedAnswer) {
  
    if (selectedAnswer === 'correct') {
        // Handle correct answer logic (e.g., add a class to the button)
        event.target.classList.add('correct');
    } else {
        // Handle wrong answer logic (e.g., add a class to the button)
        event.target.classList.add('wrong');
    }

    // Move to the next question
    setNextQuestion();
}

const questions = [
    {
        question: "What is 2 + 2",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is the next question? ",
        answers: [
            {text: "23", correct: false},
            {text: "45", correct: true}
        ]
    },
    {
        question: "What is is ",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is what ",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is 2 + 7",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is 2 + 8",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is 2 + 10",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is 2 + 3",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is 6 ",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    // Add more questions as needed
];

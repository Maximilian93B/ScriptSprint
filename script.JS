// Questions and Answers- constants and Arrays 
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High-level Text Manipulation Language", "Hyper Transferable Language", "Hyperlink and Text Markup Language"],
        correctAnswer: "Hyper Text Markup"
    },

    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Angular", "Vue", "All of the above"],
        correctAnswer: "All of the above"
    
    }
];

// Quiz tracker variables 

let = currentQuestionIndex = "0";
let = score = 0;
let = timeClock = 300;


//DOMs 

const startBtn = document.getElementById("start-btn");
const quizSection = document.getElementById("quiz-section");
const questionSection = document.getElementById(" question-section")
const resultSeciton = document.getElementById("result-section")


startBtn.addEventListener("click", startQuiz);


//function to make the quiz start 
function startQuiz() {
    startBtn.style.display = "none"// Hide Start button 
    quizSection.style.display = "none"//HIde initial section 
    questionSection.style.display = "block"; // Display the question section 
    displayQuestion();
    startTime();
}


//display questions 

/ Function to start the timer
function startTimer() {
  // Implement logic to decrement timeLeft every second
  // Display the timer on the page
  // If timeLeft reaches 0, end the quiz
}

// Implement the logic to handle user's answer
// Implement the logic to move to the next question
// Implement the logic to end the quiz and display results
// Handle the user's input for saving initials and score
// Define quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        correctAnswer: 0
    }
];

// Function to display quiz questions
function displayQuestion(index) {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const currentQuestion = questions[index];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, i) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            checkAnswer(i, index);
        });
        optionsContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(userAnswer, currentIndex) {
    const correctAnswer = questions[currentIndex].correctAnswer;
    if (userAnswer === correctAnswer) {
        alert("Correct answer!");
    } else {
        alert("Wrong answer. Try again!");
    }

    // Move to the next question
    currentIndex++;
    if (currentIndex < questions.length) {
        displayQuestion(currentIndex);
    } else {
        alert("Quiz completed!");
    }
}

// Start the quiz by displaying the first question
displayQuestion(0);

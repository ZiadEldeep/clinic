const questions = document.querySelectorAll('.question');
const progress = document.querySelector('.progress');
let currentQuestion = 0;

function updateProgressBar() {
    const progressPercentage = (currentQuestion / (questions.length - 1)) * 100;
    progress.style.width = progressPercentage + '%';
}

function goToQuestion(index) {
    if (index >= 0 && index < questions.length) {
        questions[currentQuestion].classList.remove('active');
        currentQuestion = index;
        questions[currentQuestion].classList.add('active');
        updateProgressBar();
    }
}

function goToFirstQuestion() {
    goToQuestion(1);  // Changed to 1 to skip the welcome screen
}

function prevQuestion() {
    if (currentQuestion > 1) {  // Changed to 1 to prevent going back to the welcome screen
        goToQuestion(currentQuestion - 1);
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        goToQuestion(currentQuestion + 1);
    }
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', nextQuestion);
});

document.querySelector('#next').addEventListener('click', nextQuestion);

document.querySelector('#submit-upload').addEventListener('click', () => {
    // Add your upload validation and logic here
    nextQuestion();
});

function previewImage(imgId, event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById(imgId);
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

updateProgressBar();

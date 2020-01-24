var optionsContainer = document.getElementById("questionOptions").querySelectorAll("button");
var questionContainer = document.getElementById("question");
var currentQuestionIndex = 0;
var score = 0;
var sec = 45;
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
correct.hidden = true;
wrong.hidden = true;
var time = setInterval(displayTimer, 1000);
var penalty = 5;

function loadQuestion(questionIndex) {
    var questionObject = questions[questionIndex];
    questionContainer.textContent = questionObject.question;
    optionsContainer.forEach(function (container, index) {
        container.textContent = questionObject.options[index];
    });
}

function loadNextQuestion(button) {
    var length = questions.length - 1;
    if (length >= currentQuestionIndex) {
        var selectedAnswer = button.textContent;
        var actualAnswer = questions[currentQuestionIndex].answer;
        if (selectedAnswer === actualAnswer) {
            score += 1;
            showCorrectAlert();
        } else {
            sec = sec -penalty;
            showWrongAlert();
        }
        currentQuestionIndex += 1;
        if (length !== currentQuestionIndex) {
            loadQuestion(currentQuestionIndex);
        } else {
            gotToInitial();
        }
    }
}


function displayTimer() {
    document.getElementById('timer').innerHTML = sec + " sec left";
    sec--;
    if (sec === -1) {
        clearInterval(time);
        gotToInitial();
    }
}

function gotToInitial() {
    setScore(score);
    document.getElementById("initial").click();
}

function showCorrectAlert() {
    correct.hidden = false;
    setTimeout(() => {
        correct.hidden = true;
    }, 1000);
}

function showWrongAlert() {
    wrong.hidden = false;
    setTimeout(() => {
        wrong.hidden = true;
    }, 1000);
}
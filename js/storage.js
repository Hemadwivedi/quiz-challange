function setScore(score) {
    localStorage.setItem("score", score);
}

function removeScore() {
    localStorage.removeItem("score");
}

function getScore() {
    return localStorage.getItem("score");
}

function setFinalScore(name, score) {
    var finalScore = {
        "name": name,
        "score": score
    };
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
}

function getFinalScore() {
    var finalScore = localStorage.getItem("finalScore");
    return JSON.parse(finalScore);
}

function setHighScore(highscore) {
    localStorage.setItem("highScore", JSON.stringify(highscore));
}

function getHighScore() {
    var highScore = localStorage.getItem("highScore");
    if (highScore) {
        return JSON.parse(highScore);
    }
}
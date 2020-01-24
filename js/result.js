function loadResult() {
    var name = document.getElementById("name");
    var score = document.getElementById("score");
    var finalScore = getFinalScore();
    name.textContent = finalScore.name;
    score.textContent = finalScore.score;
    updateHighScoreIfRequried(finalScore);
}

function updateHighScoreIfRequried(finalScore) {
    var highScore = getHighScore();
    if (highScore) {
        if (finalScore.score > highScore.score) {
            setHighScore(finalScore);
        }
    } else {
        setHighScore(finalScore);
    }
}
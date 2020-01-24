function displayHighScore() {
    var name = document.getElementById("name");
    var score = document.getElementById("score");
    var highScore = getHighScore();
    name.textContent = highScore.name;
    score.textContent = highScore.score;
}
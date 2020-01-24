function loadResult() {
    var textBox = document.getElementById("initials");
    var score = getScore();
    setFinalScore(textBox.value, score);
    removeScore();
    document.getElementById("result").click();
}
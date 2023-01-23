var highscoresList = document.getElementById("highscores");

var savedScores = JSON.parse(localStorage.getItem("scores"));

function renderHighscores() {
  highscoresList.innerHTML = "";

  for (var i = 0; i < savedScores.length; i++) {
    var userInitialsScore = savedScores[i];

    var li = document.createElement("li");
    li.textContent = userInitialsScore;
    li.setAttribute("data-index", i);
    highscoresList.appendChild(li);
  }
}

renderHighscores();

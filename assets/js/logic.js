var startScreen = document.getElementById("start-screen");
var startQuizButton = document.getElementById("start");
var questionsScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var timeOnClock = document.getElementById("time");
var finalScore = document.getElementById("final-score");
var inputInitialsForm = document.getElementById("initials");
var initialsSubmitButton = document.getElementById("submit");

var currentQuestion = 0;
var userScore = 60;
var timer;

var scores = [];

var correctSound = new Audio("./assets/sfx/correct.wav");
var incorrectSound = new Audio("./assets/sfx/incorrect.wav");

function setElementHidden(element) {
  element.classList.add("hide");
}

function setElementVisible(element) {
  element.classList.remove("hide");
}

function startQuiz(event) {
  event.preventDefault();
  setElementHidden(startScreen);
  setElementVisible(questionsScreen);
  renderQuestion(questions[currentQuestion]);
  timeOnClock.textContent = userScore;
  timer = setInterval(countdown, 1000);
}

function renderEndScreen() {
  clearInterval(timer);
  setElementHidden(questionsScreen);
  setElementVisible(endScreen);
  finalScore.textContent = userScore;
}

function renderQuestion(question) {
  questionTitle.textContent = question.title;
  choices.innerHTML = "";

  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var button = document.createElement("button");
    button.textContent = `${i + 1}. ${choice}`;
    button.setAttribute("data-answer", choice);
    choices.appendChild(button);
  }
}

function renderNextQuestion(event) {
  var userAnswer = event.target.getAttribute("data-answer");

  var correctAnswer = questions[currentQuestion].answer;

  if (userAnswer !== correctAnswer) {
    incorrectSound.play();
    userScore -= 10;
    timeOnClock.textContent = userScore;
    choices.innerHTML = "";
  } else {
    correctSound.play();
  }

  if (questions.length - 1 !== currentQuestion) {
    timeOnClock.textContent = userScore;
    currentQuestion++;
    renderQuestion(questions[currentQuestion]);
  } else {
    renderEndScreen();
  }
}

startQuizButton.addEventListener("click", startQuiz);
choices.addEventListener("click", renderNextQuestion);

function countdown() {
  if (userScore <= 0) {
    renderEndScreen();
  } else {
    userScore--;
    timeOnClock.textContent = userScore;
  }
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

initialsSubmitButton.addEventListener("click", addToHighScores);

function addToHighScores(event) {
  event.preventDefault();

  var userInitials = inputInitialsForm.value.trim();

  var storedHighscores = JSON.parse(localStorage.getItem("scores")) || [];

  if (storedHighscores !== null) {
    scores = storedHighscores;
  }
  if (!userInitials) {
    userInitials = "anonymous";
    scores = storedHighscores;
  }

  scores.push(`User: ${userInitials} Points: ${userScore}`);
  storeScores();
  window.location.href = "highscores.html";
}

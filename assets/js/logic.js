var divQuestions = document.getElementById("questions");
var startQuizButton = document.getElementById("start");
var divStartScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var divChoices = document.getElementById("choices");
var divEndScreen = document.getElementById("end-screen");
var spanTime = document.getElementById("time");
var spanFinalScore = document.getElementById("final-score");
var inputInitialsForm = document.getElementById("initials");
var initialsSubmitButton = document.getElementById("submit");

var currentQuestion = 0;
var userScore = 60;
var timer;

var scores = [];

var correctSound = new Audio("/assets/sfx/correct.wav");
var incorrectSound = new Audio("/assets/sfx/incorrect.wav");

function setElementHidden(element) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  element.classList.add("hide");
}

function setElementVisible(element) {
  element.classList.remove("hide");
}

function startQuiz(event) {
  event.preventDefault();
  setElementHidden(divStartScreen);
  setElementVisible(divQuestions);
  renderQuestion(questions[currentQuestion]);
  spanTime.textContent = userScore;
  timer = setInterval(countdown, 1000);
}

function renderEndScreen() {
  clearInterval(timer);
  setElementHidden(divQuestions);
  setElementVisible(divEndScreen);
  spanFinalScore.textContent = userScore;
}

function nextQuestion(event) {
  var userAnswer = event.target.getAttribute("data-answer");
  //   console.log("userAnswer", userAnswer);

  var correctAnswer = questions[currentQuestion].answer;

  if (userAnswer !== correctAnswer) {
    incorrectSound.play();
    userScore -= 10;
    spanTime.textContent = userScore;
  } else {
    correctSound.play();
  }

  if (questions.length - 1 !== currentQuestion) {
    spanTime.textContent = userScore;
    currentQuestion++;
    renderQuestion(questions[currentQuestion]);
  } else {
    renderEndScreen();
  }
}

startQuizButton.addEventListener("click", startQuiz);
divChoices.addEventListener("click", nextQuestion);

function renderQuestion(question) {
  questionTitle.textContent = question.title;
  divChoices.innerHTML = "";

  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var button = document.createElement("button");
    // console.log("button", button, button.target);
    button.textContent = `${i + 1}. ${choice}`;
    button.setAttribute("data-answer", choice);
    divChoices.appendChild(button);
  }
}

function countdown() {
  if (userScore <= 0) {
    renderEndScreen();
  } else {
    userScore--;
    spanTime.textContent = userScore;
  }
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

initialsSubmitButton.addEventListener("click", addToHighScores);

function addToHighScores(event) {
  event.preventDefault();

  var userInitials = inputInitialsForm.value.trim();

  var storedHighscores = JSON.parse(localStorage.getItem("scores"));

  if (storedHighscores !== null) {
    scores = storedHighscores;
  }

  scores.push(`User: ${userInitials} Points: ${userScore}`);
  storeScores();
  window.location.href = "/highscores.html";
}

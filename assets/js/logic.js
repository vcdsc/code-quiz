var divQuestions = document.getElementById("questions");
var startQuizButton = document.getElementById("start");
var divStartScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var divChoices = document.getElementById("choices");
var divEndScreen = document.getElementById("end-screen");
var spanTime = document.getElementById("time");

var currentQuestion = 0;
var userScore = 60;

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
}

function renderEndScreen() {
  setElementHidden(divQuestions);
  setElementVisible(divEndScreen);
}

function nextQuestion(event) {
  var userAnswer = event.target.getAttribute("data-answer");
  console.log("userAnswer", userAnswer);

  var correctAnswer = questions[currentQuestion].answer;

  if (userAnswer !== correctAnswer) {
    userScore -= 10;
    spanTime.textContent = userScore;
  }

  if (questions.length - 1 !== currentQuestion) {
    spanTime.textContent = userScore;
    currentQuestion++;
    renderQuestion(questions[currentQuestion]);
  } else {
    renderEndScreen();
  }

  console.log(userScore, spanTime);
}

startQuizButton.addEventListener("click", startQuiz);
divChoices.addEventListener("click", nextQuestion);

function renderQuestion(question) {
  questionTitle.textContent = question.title;
  divChoices.innerHTML = "";

  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var button = document.createElement("button");
    button.textContent = `${i + 1} ${choice}`;
    button.setAttribute("data-answer", choice);
    divChoices.appendChild(button);
  }
}

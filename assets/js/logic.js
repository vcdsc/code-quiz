var divQuestions = document.getElementById("questions");
var startQuizButton = document.getElementById("start");
var divStartScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var divChoices = document.getElementById("choices");
var divEndScreen = document.getElementById("end-screen");

var currentQuestion = 0;

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
}

function renderEndScreen() {
  setElementHidden(divQuestions);
  setElementVisible(divEndScreen);
}

function nextQuestion(event) {
  if (questions.length - 1 !== currentQuestion) {
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
    button.textContent = `${i + 1} ${choice}`;
    divChoices.appendChild(button);
  }
}

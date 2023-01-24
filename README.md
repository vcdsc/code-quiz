# Bootcamp Module 6 Challenge: Code Quiz

## Description

The goal of this challenge is to create a timed quiz. Quiz should contain at least 5 questions. Once a User clicks on the "Start Quiz" button, the following is expected to happen:

- A timer starts counting down.
- User is presented with multiple choice questions, and they must click on an answer.
- If correct they are alerted to the fact and move on to the next question.
- If incorrect they are alerted to the fact and also move on to the next question but time is deducted of their timer.
- Upon finishing either the quiz (or if the timer runs out) User is prompted to enter their initials into the High Scores page.

## Tasks

In order to achieve the goals outlined in the description above, a certain number of tasks need completing:

- [x] First view of the application displays the "Start Quiz" button.
- [x] Clicking the "Start Quiz" button starts the quiz and the timer:
  - [x] First question is displayed to User.
  - [x] Timer starts counting down.
- [x] There must be at least 5 questions for the user to go through.
- [x] When User clicks an answer, next question gets displayed (as long as time has not run out).
  - If answer is correct:
    - [x] User gets a "Correct" alert. \*
  - If answer is incorrect:
    - [x] (User gets an "Incorrect" alert. \*
    - [x] User gets a time deduction (10 seconds).
- [x] If time runs out, "Game Over".
- [x] Remaining time once questions are through is User final score.
- [x] User should be able to "Submit" their initials into the High Scores page.
  - [x] Once "Submit" is pressed, High Scores page should display list of high scores.
  - [x] Refreshing the page should not remove previous High Scores.

\* _This can be a visual or audio alert - or both._

### **Tools and Plan (subject to change until project is deployed)**

**Topics**

- Will need to use `setInterval()` for anything timer related:
  - Timer starts.
  - Timer runs out.
  - Timer gets deducted 15 seconds for incorrect answers.
- Will need to use `.addEventListener()`:
  - "Start Quiz" button gets clicked.
  - Answer gets clicked.
  - `.preventDefault()` on "Submit" for high score.
  - Button to clear high scores.
- Questions and answers will live in `questions.js`.
- Will need to use `localStorage` to make High Scores persist through refreshes.

**Functions**

- Overarching function that keeps timer running as soon as "Start Quiz" is clicked.
  - This function will need input from a validation function, as time gets deducted if answer is incorrect.
- Will need a function to validate answers as correct/incorrect.
- Will need a function that makes next question pop up after an answer.
  - This will also have to relate to the timer, because no question should be displayed if time has run out.
- Will need a function to submit and persist High Scores in localStorage.

## Resources

List of pages consulted in the making of this project:

- [`Document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [`Element.getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
- [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [`Window.localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## GitHub Pages

Deployed version of this project can be seen [here](https://vcdsc.github.io/code-quiz/).

## License

Please refer to the LICENSE in the repo.

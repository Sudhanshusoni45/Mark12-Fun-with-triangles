const quizForm = document.querySelector(".quiz-form");

const submitAnsBtn = document.querySelector("#btn-submit-answer");

const divOutput = document.querySelector("#div-output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  var score = 0;
  var index = 0;
  const formResults = new FormData(quizForm);
  console.log(formResults);
  for (var value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  divOutput.innerText = "Your score is: " + score;
}

submitAnsBtn.addEventListener("click", calculateScore);

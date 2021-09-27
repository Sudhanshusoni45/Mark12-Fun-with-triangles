const base = document.querySelector("#input-base");
const height = document.querySelector("#input-height");
const divOutput = document.querySelector("#div-output");

const calculateBtn = document.querySelector("#btn-calculate-hypo");

calculateBtn.addEventListener("click", calculateHypo);

function calculateHypo() {
  var hypotenuse = 0;

  var baseValueSq = Math.pow(base.value, 2);

  var heightValueSq = Math.pow(height.value, 2);

  var sumOfSqHeightBase = heightValueSq + baseValueSq;

  hypotenuse = Math.sqrt(sumOfSqHeightBase);
  printOutput(hypotenuse);
}

function printOutput(output) {
  divOutput.innerText = output;
}

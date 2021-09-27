var inputAngles = document.querySelectorAll(".input-angles");
console.log(inputAngles);

document
  .getElementById("angle-check-btn")
  .addEventListener("click", checkSumOfAngle);

var divOutput = document.querySelector("#div-output");

function checkSumOfAngle() {
  var sumOfAngles = 0;
  var angles = 0;

  for (i = 0; i < 3; i++) {
    angles = Number(inputAngles[i].value);
    console.log(angles);

    sumOfAngles = sumOfAngles + angles;
  }

  console.log("sum of angles " + sumOfAngles);

  checkAngles(sumOfAngles);
}

function checkAngles(sumOfAngles) {
  if (sumOfAngles === 180) {
    // console.log("Shape is triangle");
    divOutput.innerText = "Yes the angles form Triangle";
  } else {
    // console.log("Not a triangle");
    divOutput.innerText = "No the angles dont form Triangle";
  }
}

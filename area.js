const height = document.querySelector("#input-height");
const base = document.querySelector("#input-base");
const btnCalculateArea = document.querySelector("#btn-calculate-area");

const divOutput = document.querySelector("#div-output");

btnCalculateArea.addEventListener("click", calculateArea);
var area = 0;

function calculateArea() {
  var heightValue = height.value;
  var baseValue = base.value;
  area = (heightValue * baseValue) / 2;
  console.log("area:", area);

  divOutput.innerText = "Area of the Triangle is : " + area;
}

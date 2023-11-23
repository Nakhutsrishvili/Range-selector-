const rangeInput = document.querySelectorAll(".range-input input");
const rangeSelector = document.querySelectorAll(".range-selector input");
const progress = document.querySelector(".slider .progress");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classNAme === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      } 
    } else {
        rangeSelector[0].value = minVal;
        rangeSelector[1].value = maxVal;
      progress.style.left = (minVal - rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal - rangeInput[1].max) * 100 + "%";
    }
  });
});

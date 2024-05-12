const operations = document.querySelectorAll(".operation");
const mathOperation = document.querySelectorAll(".math-operation");
const numbers = document.querySelectorAll(".number");
const input = document.querySelector("input");

const validateInput = (value) => {
  const inputValue = input.value;
  if (!inputValue.length) return value === "." || !!Number(value);
  if (!Number(inputValue[inputValue.length - 1]) && value !== ".")
    return !!Number(value);
  if (value === ".")
    return !inputValue
      .split(" ")
      [inputValue.split(" ").length - 1].includes(".");

  return true;
};

const handleInput = (innerText) => {
  let value = innerText;
  if (!Number(innerText) && !(innerText === ".")) value = " " + value + " ";
  validateInput(value) ? (input.value += value) : "";
};

const handleClear = (innerText) => {
  if (innerText === "Ac") return (input.value = "");
  input.value = input.value.slice(0, input.value.length - 1);
};

const handleResult = () => {
  const inputArr = input.value
    .split(" ")
    .map((ele) => (Number(ele) ? Number(ele) : ele));
  let result;

  let indexofPov = inputArr.indexOf("^");
  if (indexofPov !== -1) {
    result = Math.pow(inputArr[indexofPov - 1], inputArr[indexofPov + 1]);
    inputArr.splice(indexofPov - 1, 3, result);
  }

  let indexofDiv = inputArr.indexOf("/");
  if (indexofDiv !== -1) {
    result = inputArr[indexofDiv - 1] / inputArr[indexofDiv + 1];
    inputArr.splice(indexofDiv - 1, 3, result);
  }
  let indexofMul = inputArr.indexOf("*");

  if (indexofMul !== -1) {
    result = inputArr[indexofMul - 1] * inputArr[indexofMul + 1];
    inputArr.splice(indexofMul - 1, 3, result);
  }
  let indexofAdd = inputArr.indexOf("+");

  if (indexofAdd !== -1) {
    result = inputArr[indexofAdd - 1] + inputArr[indexofAdd + 1];
    inputArr.splice(indexofAdd - 1, 3, result);
  }
  let indexofSub = inputArr.indexOf("-");

  if (indexofSub !== -1) {
    result = inputArr[indexofSub - 1] - inputArr[indexofSub + 1];
    inputArr.splice(indexofSub - 1, 3, result);
  }

  input.value = inputArr[0];
};

[...numbers, ...mathOperation, ...operations].forEach((btn) => {
  btn.addEventListener("click", function () {
    const innerText = this.innerText;
    if (innerText === "Ac" || innerText === "X") return handleClear(innerText);
    if (innerText === "Sq") return handleResult();
    if (innerText === "=") return handleResult();
    handleInput(innerText);
  });
});

// numbers.forEach((n) => {
//   n.addEventListener("click", function () {
//     handleInput(this);
//   });
// });

// mathOperation.forEach((op) => {
//   op.addEventListener("click", function () {
//     handleInput(this);
//   });
// });

// operations.forEach((op) => {
//   op.addEventListener("click", function () {
//     handleInput(this);
//   });
// });

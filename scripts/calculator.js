const operations = document.querySelectorAll(".operation");
const mathOperation = document.querySelectorAll(".math-operation");
const numbers = document.querySelectorAll(".number");
const input = document.querySelector("input");

const validateInput = (value) => {
  const inputValue = input.value;
  if (!inputValue.length) return !!Number(value);
  if (!Number(inputValue[inputValue.length - 1])) return !!Number(value);
  return true;
};
const handleInput = (innerText) => {
  const value = innerText;
  validateInput(value) ? (input.value += value) : "";
};

const handleClear = (innerText) => {
  if (innerText === "Ac") return (input.value = "");
  input.value = input.value.slice(0, input.value.length - 1);
};

[...numbers, ...mathOperation, ...operations].forEach((btn) => {
  btn.addEventListener("click", function () {
    const innerText = this.innerText;
    if (innerText === "Ac" || innerText === "X") return handleClear(innerText);
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

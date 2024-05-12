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
const handleInput = (self) => {
  const value = self.innerText;
  validateInput(value) ? (input.value += value) : "";
};

numbers.forEach((n) => {
  n.addEventListener("click", function () {
    handleInput(this);
  });
});

mathOperation.forEach((op) => {
  op.addEventListener("click", function () {
    handleInput(this);
  });
});

operations.forEach((op) => {
  op.addEventListener("click", function () {
    handleInput(this);
  });
});

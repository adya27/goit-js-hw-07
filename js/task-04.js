let counterValue = 0;
const valueItem = document.querySelector("#value");

function increment() {
  counterValue += 1;
  return (valueItem.textContent = counterValue);
}
function decrement() {
  counterValue -= 1;
  return (valueItem.textContent = counterValue);
}

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

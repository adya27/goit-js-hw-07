const inputItem = document.querySelector("#validation-input");
let inputLength = Number(inputItem.dataset.length);

// console.log(inputLength);
// console.log(typeof inputLength);

inputItem.addEventListener("change", onInputChange);

function onInputChange(event) {
  event.preventDefault();

  if (event.currentTarget.value.length === 0) {
    inputItem.classList.remove("invalid");
    inputItem.classList.remove("valid");
  } else if (event.currentTarget.value.length === inputLength) {
    inputItem.classList.add("valid");
    inputItem.classList.remove("invalid");
  } else {
    inputItem.classList.add("invalid");
    inputItem.classList.remove("valid");
  }
}

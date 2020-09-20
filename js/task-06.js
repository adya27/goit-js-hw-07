const inputItem = document.querySelector("#validation-input");
let inputLength = ("inputItem", inputItem.dataset.length);

// console.log(inputLength);

inputItem.addEventListener("change", onInputChange);

function onInputChange(event) {
  event.preventDefault();

  if (event.currentTarget.value.length === 0) {
    inputItem.classList.remove("invalid");
    inputItem.classList.remove("valid");
  } else if (event.currentTarget.value.length < inputLength) {
    inputItem.classList.add("invalid");
    inputItem.classList.remove("valid");
  } else {
    inputItem.classList.add("valid");
    inputItem.classList.remove("invalid");
  }
}

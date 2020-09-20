const nameInputItem = document.querySelector("#name-input");
const nameOutputItem = document.querySelector("#name-output");

nameInputItem.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.preventDefault();
  if (event.currentTarget.value === "") {
    return (nameOutputItem.textContent = "незнакомец");
  } else {
    return (nameOutputItem.textContent = event.currentTarget.value);
  }
}

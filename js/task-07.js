const inputElement = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

inputElement.addEventListener("input", onChangeRange);

// function onChangeRange() {
//   spanElement.style.fontSize = inputElement.value + "px";
// }

function onChangeRange() {
  //   console.log(`\"${inputElement.value}px\"`);
  return (spanElement.style.fontSize = `${inputElement.value}px`);
}

// function onChangeRange(event) {
//   console.log(event.currentTarget.value + "px");
//   spanElement.style.fontSize = event.currentTarget.value + "px";
// }

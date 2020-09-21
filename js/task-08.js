const createButton = document.querySelector('#controls [data-action="render"]');
const destroyButton = document.querySelector(
  '#controls [data-action="destroy"]'
);
const inputItem = document.querySelector("#controls input");
const inputItemBoxes = document.querySelector("#boxes");
let string = "";

inputItem.addEventListener("blur", onInputChange);
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function onInputChange(event) {
  let amount = event.currentTarget.value;
  //   console.log("onInputChange -> amount", amount);

  for (let i = 0; i < amount; i += 1) {
    string += `<div
        style="
          display: block;
          width: ${30 + 10 * i}px;
          height: ${30 + 10 * i}px;
          margin: 10px;
          background-color: rgb(
              ${Math.round(Math.random() * (256 - 1) + 1)}, 
              ${Math.round(Math.random() * (256 - 1) + 1)}, 
              ${Math.round(Math.random() * (256 - 1) + 1)});"></div>`;
  }
  //   console.log("onInputChange -> string", string);
  return string;
}

function createBoxes() {
  inputItemBoxes.insertAdjacentHTML("afterbegin", string);
}
function destroyBoxes() {
  string = "";
  inputItemBoxes.innerHTML = "";
}

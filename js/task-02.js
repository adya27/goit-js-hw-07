import ingredients from "./data/ingredients.js";

const ingredientsList = document.querySelector("#ingredients");

let ingredientsItems = ingredients.map((ingredient) => {
  let item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});

ingredientsList.append(...ingredientsItems);
// console.log("ingredientsList", ingredientsList);

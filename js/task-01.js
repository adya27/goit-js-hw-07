const listItem = document.querySelectorAll("li.item");
console.log(`В списке ${listItem.length} категории.`);
listItem.forEach((element) => {
  console.log(
    `\u2022 Категория: ${
      element.querySelector("h2").textContent
    }\n\u2022 Количество: ${element.querySelectorAll("li").length}`
  );
});

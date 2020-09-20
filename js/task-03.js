import images from "./data/images.js";

const list = document.createElement("ul");
const imagesItems = images.map((image) => makeMarkup(image));
const titleItem = document.querySelector('h2[data-attr="task3"]');

list.id = "gallary";
list.style.display = "flex";
list.style.flexDirection = "column";
list.style.listStyleType = "none";
list.style.margin = "0";
list.style.padding = "0";

function makeMarkup({ url, alt }) {
  list.insertAdjacentHTML(
    "afterbegin",
    `<li><img width = "100%" src = \"${url}\" alt = \"${alt}\" /></li>`
  );
}

titleItem.insertAdjacentElement("afterend", list);

// console.log(list);

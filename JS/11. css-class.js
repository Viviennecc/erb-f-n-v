const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
// Use querySelectorAll to get all items for the loop
const items = document.querySelectorAll("li");

function run() {
  console.log(itemList.className);

  text.className = "card dark";
  console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  text.classList.toggle("hidden");
  text.classList.replace("card", "dark");

  text.style.lineHeight = "3";

  // Loop through the 'items' NodeList, not the 'itemList' container
  items.forEach((item, index) => {
    // Default color
    item.style.color = "red";

    // Override color for the third item (index 2)
    if (index === 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;

const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}
clearBtn.onclick = () => alert("Clear Items");
clearBtn.onclick = () => console.log("clear Items");

clearBtn.addEventListener("click", () => console.log("Clear Items"));

clearBtn.addEventListener("clear", () => console.log("Clear Items 2"));
clearBtn.addEventListener("click", onClear);
setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);
setTimeout(() => clearBtn.click(), 5000);

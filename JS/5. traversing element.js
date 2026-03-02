let output;
// case a. get child elements from parent element
const parent = document.querySelector(".parent");
console.log(parent);
output = parent.children;
console.dir(output);
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].style.color = "red";
parent.firstElementChild.style.color = "blue";
parent.lastElementChild.style.color = "green";
// case b. get parent element from child element
output = document.getElementsByClassName("item");
output = secondChild = document.getElementsByClassName("item");
output = secondChild.parentElement;
// case c. get sibling element
output = secondChild.previousElementSibling;
output = secondChild.nextElementSibling;
// ==============================================
// nodelist
// const parent = document.querySelector(".parent");
output = parent.childNodes;
console.log(output);

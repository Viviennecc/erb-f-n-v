// case a. get single element from the dom
console.log(document.getElementById("app-title"));
// case b. get element attributes
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
// case c. get element attributes by getAttribute method
console.log(document.getElementById("app-title").getAttribute("id"));
console.log(document.getElementById("app-title").getAttribute("class"));
// case d. update attributes by dot notation
console.log(document.getElementById("app-title"));
document.getElementById("app-title").id = "new-title";
document.getElementById("new-title").className = "text-red";
// case e. update attributes by setAttribute method (attribute,value)
document.getElementById("new-title").setAttribute("id", "app-title");
document.getElementById("app-title").setAttribute("class", "text-green");
// case f. save the element to a variable for variuos operations
const title = document.getElementById("app-title");
console.log(title.textContent.textContent);
title.textContent = "Hello World";
// title.innerText = "Hello again";

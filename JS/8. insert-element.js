function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacementElement";
  filter.insertAdjacentElement("beforebegin", h1);
  //   filter.insertAdjacentElement("afterend", h1);
}
insertElement();

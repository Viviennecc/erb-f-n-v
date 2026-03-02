function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacementElement";
  //   filter.insertAdjacentElement("beforebegin", h1);
  filter.insertAdjacentElement("beforebegin", h1);
  const h1after = document.createElement("h1");
  //   h1after.textContent = "insertAdjacementElement";
  h1after.textContent = "insertAdjacementElement";
  const filter1 = document.querySelector(".filter");
  //   filter1.insertAdjacentElement("afterend", h1after);
  filter1.insertAdjacentElement("afterend", h1after);
}
insertElement();

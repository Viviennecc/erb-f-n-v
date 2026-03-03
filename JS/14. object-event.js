const logo = document.querySelector("img");
logo.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.currentTarget);
});

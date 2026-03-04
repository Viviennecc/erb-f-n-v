const classNames = [
  ".information",
  ".basicinformatiom",
  ".locationintroduction0",
  ".locationintroduction1-1",
  ".locationintroduction2",
  ".locationintroduction3",
];

const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0; // Starts at 0 (.information)

nextBtn.addEventListener("click", () => {
  // Check if there is a next section available
  if (currentIndex < classNames.length - 1) {
    currentIndex++; // Move to next index (e.g., from 0 to 1)

    const targetElement = document.querySelector(classNames[currentIndex]);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Changes alignment to the top of the screen
      });
    }
  } else {
    alert("You have reached the final section!");
    // Optional: Reset to start
    // currentIndex = 0;
    // document.querySelector(classNames[0]).scrollIntoView({ behavior: "smooth" });
  }
});

const itemInput = document.getElementById("item-input");
const onKeyPress = (e) => console.log("keypress");
itemInput.addEventListener("keypress", onKeyPress);

const onKeyUp = (e) => console.log("keyup");
itemInput.addEventListener("keyup", onKeyUp);
const onKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     console.log("enter");
  //     alert("enter");}
  if (e.keyCode === 13) {
    alert("enter");
  }
  if (e.code === "Digit1") {
    console.log("1 is preesed");
  }
  if (e.repeat) {
    console.log(e.key + " is being held down");
  }
  console.log("shift : " + e.shiftKey);
  console.log("ctrl : " + e.ctrlKey);
  console.log("alt : " + e.alttKey);
  if (e.shiftKey && e.key === "K") {
    console.log("stift + k is pressed");
  }
};
itemInput.addEventListener("keydown", onKeyDown);

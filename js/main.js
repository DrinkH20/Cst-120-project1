import Swup from "https://unpkg.com/swup@4?module";
const swup = new Swup();

function Click() {
  alert("You just clicked the title!");
}

function mouseEnter() {
  document.getElementById("words").style.color = "rgb(200, 20, 120)";
}

function mouseLeave() {
  document.getElementById("words").style.color = "black";
}

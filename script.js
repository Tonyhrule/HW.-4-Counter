function add() {
  x += 1;
  document.querySelector("#counter").innerHTML = "Counter: " + x;
}
function subtract() {
  x -= 1;
  document.querySelector("#counter").innerHTML = "Counter: " + x;
}
function reset() {
  x = 0;
  document.querySelector("#counter").innerHTML = "Counter: " + x;
}
x = 0;

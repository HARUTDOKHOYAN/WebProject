var btn = document.querySelector(".start-point-btn");
var text2 = document.querySelector(".start-point-text2");
var text1 = document.querySelector(".start-point-text1");
document.addEventListener("DOMContentLoaded", (е) => {
  setTimeout(function() {
    text1.classList.add("start-open");
  }, 1000);
  setTimeout(function() {
    text2.classList.add("start-open");
  }, 3000);
  setTimeout(function() {
    btn.classList.add("start-open");
  }, 4000);
}); 
btn.addEventListener("click" , (e) => {
  btn.classList.add("start-close");
  text2.classList.add("start-close");
  text1.classList.add("start-close");
  startPaig.classList.add("start-close")});
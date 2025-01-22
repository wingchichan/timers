// const button = document.getElementById("button");
// button.addEventListener("click", function () {
//   const pTag = document.getElementById("pTag");
//   pTag.innerHTML = " jkskd";

//   setTimeout(function () {
//     pTag.innerHTML = " ";
//   }, 5000);
// });

let counter = 0;
// let timer = setInterval;

// const startButton = document.getElementById("start");
// startButton.addEventListener("click", function () {
//   setInterval(function () {
//     counter += 1;
//     console.log(counter);
//   }, 1000);
// });

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  clearInterval(setInterval);
});

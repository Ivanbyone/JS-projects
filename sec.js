const counterId = document.querySelector("#counter");

let counter = 0;
let timer;

const startButton = document.querySelector("#start");
startButton.onclick = () => {
  timer = setInterval(() => {
    counter++;
    counterId.innerText = counter;
  }, 1000);
};

const stopButton = document.querySelector("#stop");
stopButton.onclick = () => {
    clearInterval(timer); 
};

const resetButton = document.querySelector("#reset");
resetButton.onclick = () => {
  counter = 0;
  counterId.innerText = counter;
  clearInterval(timer);
};

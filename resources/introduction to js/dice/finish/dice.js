const FACES = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/1200px-Dice-1.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/1200px-Dice-2.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/1024px-Dice-3.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/557px-Dice-4.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/1200px-Dice-5.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/1200px-Dice-6.svg.png",
];

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function choose(array) {
  return array[random(0, array.length)];
}

const diceImg = document.getElementById("dice");
const rollBtn = document.getElementById("role-btn");

rollBtn.addEventListener("click", () => {
  diceImg.style.animation = "shake 0.5s";
  diceImg.src = choose(FACES);
  setTimeout(() => {
    diceImg.style.animation = "";
  }, 500);
});

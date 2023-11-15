const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const heading = document.querySelector("#heading");

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
img1.setAttribute("src", `./assets/images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
img2.setAttribute("src", `./assets/images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Wins!🚩";
} else {
  heading.innerHTML = "Draw!";
}

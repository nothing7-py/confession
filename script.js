// Elements
const intro = document.getElementById("intro");
const nameScreen = document.getElementById("nameScreen");
const mainContent = document.getElementById("mainContent");
const gameScreen = document.getElementById("gameScreen");
const finalScreen = document.getElementById("finalScreen");
const letterPopup = document.getElementById("letterPopup");
const credits = document.getElementById("credits");

const enterBtn = document.getElementById("enterBtn");
const letterBtn = document.getElementById("letterBtn");
const questionBtn = document.getElementById("questionBtn");
const closeLetter = document.getElementById("closeLetter");

const title = document.getElementById("title");
const message = document.getElementById("message");
const letterName = document.getElementById("letterName");
const letterText = document.getElementById("letterText");
const finalText = document.getElementById("finalText");

const nameInput = document.getElementById("nameInput");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

let userName = "";

// Intro
setTimeout(() => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    nameScreen.classList.remove("hidden");
  }, 1000);
}, 2000);

// Start
enterBtn.addEventListener("click", () => {
  userName = nameInput.value.trim();
  if (!userName) return;

  nameScreen.classList.add("hidden");
  mainContent.classList.remove("hidden");

  title.innerText = "Hey " + userName + " 🌸";
  message.innerText = "I didn’t need a special day to tell you this… 😌";

  letterName.innerText = userName;
  letterText.innerText =
    "You became my comfort in the softest way. Like cherry blossoms falling quietly at night.";

  bgMusic.volume = 0.5;
  bgMusic.play().catch(() => {});
});

// Letter
letterBtn.addEventListener("click", () => {
  letterPopup.classList.remove("hidden");
});

document.getElementById("closeLetter").addEventListener("click", function() {
  document.getElementById("letterPopup").classList.add("hidden");
});

// Game
questionBtn.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

// Moving No
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

// Yes
yesBtn.addEventListener("click", () => {
  gameScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");

  finalText.innerText =
    "Then let’s make memories together, " + userName + " 🌸💗";

  startConfetti();
  setTimeout(() => credits.classList.remove("hidden"), 3000);
});

// Confetti
function startConfetti() {
  const confetti = document.getElementById("confetti");
  const ctx = confetti.getContext("2d");
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  for (let i = 0; i < 150; i++) {
    ctx.fillStyle = "#ff69b4";
    ctx.fillRect(
      Math.random() * confetti.width,
      Math.random() * confetti.height,
      6,
      6
    );
  }
}

// Sakura
setInterval(() => {
  const petal = document.createElement("span");
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.getElementById("sakura").appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}, 600);

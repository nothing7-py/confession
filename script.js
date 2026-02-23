const intro = document.getElementById("intro");
const nameScreen = document.getElementById("nameScreen");

setTimeout(() => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    nameScreen.classList.remove("hidden");
  }, 1000);
}, 2500);

let userName = "";

function startLove() {
  userName = nameInput.value.trim();
  if (!userName) return;

  nameScreen.classList.add("hidden");
  mainContent.classList.remove("hidden");

  title.innerText = "Hey " + userName + " 🌸";
  jpLine.innerText = "特別な日じゃなくても、伝えたかった。";

  typeWriter("I didn’t need a special day to tell you this… 😌");

  letterName.innerText = userName;
  letterText.innerText =
    "You became my comfort in the softest way. Like cherry blossoms falling quietly at night.";

  sparkleName();
  fadeInMusic();
}

function typeWriter(text) {
  let i = 0;
  typewriter.innerHTML = "";
  function typing() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
}

function sparkleName(){
  title.style.textShadow="0 0 15px pink";
  setTimeout(()=>title.style.textShadow="none",1500);
}

function fadeInMusic() {
  bgMusic.volume = 0;
  bgMusic.play();
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.02;
      bgMusic.volume = vol;
    } else clearInterval(fade);
  }, 200);
}

function openLetter(){ letterPopup.classList.remove("hidden"); }
function closeLetter(){ letterPopup.classList.add("hidden"); }

function startGame(){
  mainContent.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

noBtn.addEventListener("mouseover", ()=>{
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*70+"%";
  noBtn.style.top=Math.random()*70+"%";
});

yesBtn.addEventListener("click", ()=>{
  gameScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  finalText.innerText="Then let’s make memories together, "+userName+" 🌸💗";
  startConfetti();
  startEndingCredits();
});

function startConfetti(){
  const ctx=confetti.getContext("2d");
  confetti.width=window.innerWidth;
  confetti.height=window.innerHeight;
  for(let i=0;i<150;i++){
    ctx.fillStyle="#ff69b4";
    ctx.fillRect(Math.random()*confetti.width,
                 Math.random()*confetti.height,6,6);
  }
}

function startEndingCredits(){
  setTimeout(()=>{
    credits.classList.remove("hidden");
    setTimeout(()=>{
      document.body.style.background="black";
    },20000);
  },3000);
}

/* Sakura */
setInterval(()=>{
  const petal=document.createElement("span");
  petal.innerHTML="🌸";
  petal.style.left=Math.random()*100+"vw";
  petal.style.animationDuration=Math.random()*5+5+"s";
  sakura.appendChild(petal);
  setTimeout(()=>petal.remove(),10000);
},600);

/* Floating JP */
const words=["好き","かわいい","運命"];
setInterval(()=>{
  const word=document.createElement("span");
  word.innerText=words[Math.floor(Math.random()*3)];
  word.style.left=Math.random()*100+"vw";
  word.style.top="100vh";
  floatingJP.appendChild(word);
  setTimeout(()=>word.remove(),10000);
},4000);

/* 3D Heart */
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
threeContainer.appendChild(renderer.domElement);

const geometry=new THREE.TorusKnotGeometry(1,0.4,100,16);
const material=new THREE.MeshBasicMaterial({color:0xff69b4,wireframe:true});
const heart=new THREE.Mesh(geometry,material);
scene.add(heart);
camera.position.z=5;

function animate(){
  requestAnimationFrame(animate);
  heart.rotation.x+=0.005;
  heart.rotation.y+=0.005;
  renderer.render(scene,camera);
}
animate();

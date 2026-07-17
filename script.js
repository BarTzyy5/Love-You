// ========= FUNGSI MODAL FOTO =========
function openModal(imgSrc) {
  const modal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImage');
  modalImg.src = imgSrc;
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('photoModal');
  modal.classList.remove('active');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ========= SPLASH SCREEN =========
const splash = document.getElementById('splashScreen');
const mainContent = document.getElementById('mainContent');
const loadingBar = document.getElementById('loadingBar');

let progress = 0;
const duration = 2000;
const intervalTime = 20;
const step = (intervalTime / duration) * 100;

const splashInterval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(splashInterval);
    splash.classList.add('hide');
    mainContent.classList.add('visible');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 800);
  } else {
    progress = Math.min(progress + step, 100);
    loadingBar.style.width = progress + '%';
  }
}, intervalTime);

splash.addEventListener('click', () => {
  clearInterval(splashInterval);
  splash.classList.add('hide');
  mainContent.classList.add('visible');
  setTimeout(() => {
    splash.style.display = 'none';
  }, 800);
});

// ========= COUNTDOWN TARGET: 25 MEI 2027 =========
const targetDate = new Date("2027-05-25T22:00:00+07:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime();

  if (distance <= 0) {
    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerText = days.toString().padStart(2, '0');
  hoursEl.innerText = hours.toString().padStart(2, '0');
  minutesEl.innerText = minutes.toString().padStart(2, '0');
  secondsEl.innerText = seconds.toString().padStart(2, '0');
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// ========= EFEK HATI BERJATUHAN =========
function createHeart() {
  const heartContainer = document.getElementById("heartContainer");
  if (!heartContainer) return;
  
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const size = Math.random() * 1 + 0.8 + "rem";
  heart.style.fontSize = size;
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 4 + 3 + "s";
  heart.style.animationDelay = Math.random() * 2 + "s";
  heart.innerHTML = ["❤️", "💖", "💗", "💘", "💕", "💞"][Math.floor(Math.random() * 6)];
  heartContainer.appendChild(heart);

  setTimeout(() => {
    if (heart && heart.remove) heart.remove();
  }, 7000);
}

let heartInterval = setInterval(() => {
  if (mainContent.classList.contains('visible')) {
    createHeart();
  }
}, 500);

window.addEventListener("beforeunload", () => {
  if (countdownInterval) clearInterval(countdownInterval);
  if (heartInterval) clearInterval(heartInterval);
});

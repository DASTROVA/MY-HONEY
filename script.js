
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 800);
});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// SECRET ROOM
const passwordModal = document.getElementById("passwordModal");
const secretRoom = document.getElementById("secretRoom");
const secretBtn = document.getElementById("secretBtn");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");

secretBtn.addEventListener("click", () => {
  passwordModal.classList.add("show");
  passwordInput.focus();
});

function unlockSecret() {
  if (passwordInput.value === "0716") {
    passwordModal.classList.remove("show");
    secretRoom.classList.add("show");

    passwordInput.value = "";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Wrong code! Try again ❤️";
    passwordInput.value = "";
  }
}

unlockBtn.addEventListener("click", unlockSecret);

passwordInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    unlockSecret();
  }
});

// CLOSE MODALS
document.getElementById("closeModal").addEventListener("click", () => {
  passwordModal.classList.remove("show");
});

document.getElementById("closeSecret").addEventListener("click", () => {
  secretRoom.classList.remove("show");
});

[passwordModal, secretRoom].forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});

// ESCAPE KEY
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    passwordModal.classList.remove("show");
    secretRoom.classList.remove("show");
  }
});

// FLOATING HEARTS
function createHeart() {
  const heart = document.createElement("div");

  heart.textContent = "♥";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.color = "#ed1745";
  heart.style.opacity = "0.5";
  heart.style.fontSize =
    (10 + Math.random() * 18) + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "5";
  heart.style.transition =
    "transform 7s linear, opacity 7s";

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform =
      `translateY(-${window.innerHeight + 60}px)`;
    heart.style.opacity = "0";
  });

  setTimeout(() => heart.remove(), 7500);
}

setInterval(createHeart, 1200);

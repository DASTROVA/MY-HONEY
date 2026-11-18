
document.addEventListener("DOMContentLoaded", () => {

  // LOADING SCREEN
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 700);
  });

  setTimeout(() => {
    loader.classList.add("hide");
  }, 3000);


  // LANGUAGE SYSTEM
  let currentLanguage = localStorage.getItem("marjona-language") || "uz";

  const translations = {
    uz: {
      navHome: "Bosh sahifa",
      navStory: "Hikoyamiz",
      navLetter: "Maktub",
      navGallery: "Galereya",

      heroSmall: "✨ SEN UCHUN MAXSUS YARATILDI",
      heroText: "Bu kichik dunyo faqat sen uchun. Har bir sahifasida alohida bir mehr yashiringan.",
      heroButton: "Sehrli dunyoga kirish →",
      photoPlaceholder: "Bu yerga surat joylashtiring",

      storyTitle: "Senga atalgan kichik dunyo",
      storyCardTitle: "Marjona, bu sen uchun!",
      storyText: "Ba'zi insonlar hayotimizga kirib keladi va oddiy kunlarga ham o'zgacha ma'no beradi. Ushbu sayt esa sen uchun tayyorlangan kichik bir sovg'a.",

      letterTitle: "Senga bir maktub bor...",
      letterSubtitle: "Konvertni bos va ichidagi so'zlarni o'qi.",
      openLetter: "Maktubni ochish ♥",

      galleryTitle: "Go'zal lahzalar",
      gallerySubtitle: "O'zingiz yoqtirgan suratlarni shu yerga qo'shing.",
      uploadText: "Surat qo'shish",

      surpriseTitle: "Yana bir kichik syurpriz...",
      surpriseText: "Ba'zi sovg'alar ochilishini kutadi.",
      surpriseButton: "Syurprizni ochish 🎁",

      finalText: "Ushbu kichik dunyoga tashrif buyurganing uchun rahmat.",

      modalLetterTitle: "Aziz Marjona...",
      modalLetterText: "Bu saytning har bir qismi senga atab tayyorlandi. Hayoting doimo quvonch, go'zallik va unutilmas lahzalarga boy bo'lsin. Har doim baxtli bo'l!",
      modalSurpriseTitle: "Sen alohida insonsan!",
      modalSurpriseText: "Marjona, ushbu sahifa sen uchun tayyorlangan kichik sovg'a. Doimo yuzingdan tabassum arimasin! ♡"
    },

    en: {
      navHome: "Home",
      navStory: "Our Story",
      navLetter: "Letter",
      navGallery: "Gallery",

      heroSmall: "✨ SPECIALLY CREATED FOR YOU",
      heroText: "This little world is just for you. Every page holds a little piece of affection.",
      heroButton: "Enter the magical world →",
      photoPlaceholder: "Place your photo here",

      storyTitle: "A little world made for you",
      storyCardTitle: "Marjona, this is for you!",
      storyText: "Some people enter our lives and give even ordinary days a special meaning. This website is a little gift created especially for you.",

      letterTitle: "A letter for you...",
      letterSubtitle: "Click the envelope and read the words inside.",
      openLetter: "Open the letter ♥",

      galleryTitle: "Beautiful Moments",
      gallerySubtitle: "Add your favorite photos here.",
      uploadText: "Add a photo",

      surpriseTitle: "One more little surprise...",
      surpriseText: "Some gifts are waiting to be opened.",
      surpriseButton: "Open the surprise 🎁",

      finalText: "Thank you for visiting this little world.",

      modalLetterTitle: "Dear Marjona...",
      modalLetterText: "Every part of this website was created for you. May your life always be full of joy, beauty and unforgettable moments. Always be happy!",
      modalSurpriseTitle: "You are someone special!",
      modalSurpriseText: "Marjona, this page is a little gift made just for you. May your smile never fade! ♡"
    }
  };

  const languageBtn = document.getElementById("languageBtn");

  function updateLanguage() {
    const dictionary = translations[currentLanguage];

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.documentElement.lang = currentLanguage;
    languageBtn.textContent = currentLanguage === "uz" ? "EN" : "UZ";

    localStorage.setItem("marjona-language", currentLanguage);
  }

  languageBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "uz" ? "en" : "uz";
    updateLanguage();
  });

  updateLanguage();


  // LETTER ENVELOPE
  const envelope = document.getElementById("envelope");
  const openLetterBtn = document.getElementById("openLetterBtn");
  const letterModal = document.getElementById("letterModal");

  function openLetter() {
    envelope.classList.add("open");

    setTimeout(() => {
      letterModal.classList.add("show");
      document.body.style.overflow = "hidden";
    }, 500);
  }

  envelope.addEventListener("click", openLetter);
  openLetterBtn.addEventListener("click", openLetter);


  // SURPRISE
  const surpriseBtn = document.getElementById("surpriseBtn");
  const surpriseModal = document.getElementById("surpriseModal");

  surpriseBtn.addEventListener("click", () => {
    surpriseModal.classList.add("show");
    document.body.style.overflow = "hidden";

    createConfetti();
  });


  // CLOSE MODALS
  document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.close);
      modal.classList.remove("show");
      document.body.style.overflow = "";
    });
  });

  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(modal => {
        modal.classList.remove("show");
      });

      document.body.style.overflow = "";
    }
  });


  // PHOTO GALLERY
  const photoUpload = document.getElementById("photoUpload");
  const galleryGrid = document.getElementById("galleryGrid");
  const imageModal = document.getElementById("imageModal");
  const expandedImage = document.getElementById("expandedImage");

  function addGalleryImage(src, alt) {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt || "Marjona memory";

    const heart = document.createElement("span");
    heart.textContent = "♡";

    item.append(img, heart);
    galleryGrid.appendChild(item);
  }

  photoUpload.addEventListener("change", event => {
    const files = Array.from(event.target.files || []);

    files.forEach(file => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();

      reader.onload = result => {
        addGalleryImage(result.target.result, file.name);
      };

      reader.readAsDataURL(file);
    });

    photoUpload.value = "";
  });

  galleryGrid.addEventListener("click", event => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;

    const img = item.querySelector("img");

    if (!img || !img.complete || !img.naturalWidth) return;

    expandedImage.src = img.src;
    imageModal.classList.add("show");
    document.body.style.overflow = "hidden";
  });


  // FLOATING HEARTS
  const heartsBackground = document.getElementById("heartsBackground");

  function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.className = "bg-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (7 + Math.random() * 7) + "s";

    heartsBackground.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 15000);
  }

  setInterval(createFloatingHeart, 900);


  // CONFETTI EFFECT
  function createConfetti() {
    const symbols = ["♥", "♡", "✦", "🌸", "✨"];

    for (let i = 0; i < 35; i++) {
      const piece = document.createElement("span");

      piece.textContent = symbols[
        Math.floor(Math.random() * symbols.length)
      ];

      piece.style.position = "fixed";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = "-30px";
      piece.style.zIndex = "600";
      piece.style.pointerEvents = "none";
      piece.style.fontSize = (15 + Math.random() * 20) + "px";
      piece.style.color = "#e987a9";
      piece.style.transition =
        "top 3s ease-in, transform 3s linear, opacity 3s";

      document.body.appendChild(piece);

      requestAnimationFrame(() => {
        piece.style.top = "105vh";
        piece.style.transform =
          `rotate(${Math.random() * 700}deg)`;
        piece.style.opacity = "0";
      });

      setTimeout(() => piece.remove(), 3500);
    }
  }

});

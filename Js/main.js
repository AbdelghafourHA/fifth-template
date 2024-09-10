// navbar

let menuIcon = document.querySelector(".menu .hamburger"),
  links = document.querySelector(".links");

menuIcon.onclick = function () {
  if (links.clientHeight === 0) {
    links.style.height = "350px";
    links.style.width = "250px";
  } else {
    links.style.height = "0";
    links.style.width = "0";
  }
};

// close links navbar

let check = document.querySelector(".hamburger input");

window.onclick = function () {
  if (document.documentElement.offsetWidth <= 800 && links.clientHeight !== 0) {
    links.style.height = "0";
    links.style.width = "0";
    check.checked = false;
  }
};

// header section

let switchMode = document.querySelector(".slider"),
  section = document.querySelector("header section"),
  overLay = document.querySelector(".overlay");

let mode = "day";

switchMode.addEventListener("click", function () {
  if (mode == "day") {
    section.style.backgroundImage = "url(../imgs/backgroundNight.png)";

    mode = "night";
  } else {
    section.style.backgroundImage = "url(../imgs/backgroundDay.png)";

    mode = "day";
  }
  document.body.classList.toggle("night");
});

// email copy

let email = document.querySelector(".email");
let emailcopy = email.lastElementChild;

email.onclick = function () {
  navigator.clipboard.writeText("abdouhadjoudj24@gmail.com");
  emailcopy.style.display = "block";
  setTimeout(() => {
    emailcopy.style.display = "none";
  }, 1000);
};

// scroll

let sections = [
  document.querySelector(".header"),
  document.querySelector(".about"),
  document.querySelector(".projects"),
  document.querySelector(".contact"),
];

let as = document.querySelectorAll(".links li a");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0 && window.scrollY + 300 < sections[0].clientHeight) {
    addActive(as, 0);
  } else if (
    window.scrollY + 300 >= sections[0].clientHeight &&
    window.scrollY + 300 < sections[0].clientHeight + sections[1].clientHeight
  ) {
    addActive(as, 1);
  } else if (
    window.scrollY + 300 >=
      sections[0].clientHeight + sections[1].clientHeight &&
    window.scrollY + 300 <
      sections[0].clientHeight +
        sections[1].clientHeight +
        sections[2].clientHeight
  ) {
    addActive(as, 2);
  } else if (
    window.scrollY + 300 >=
      sections[0].clientHeight +
        sections[1].clientHeight +
        sections[2].clientHeight &&
    window.scrollY + 300 <
      sections[0].clientHeight +
        sections[1].clientHeight +
        sections[2].clientHeight +
        sections[3].clientHeight
  ) {
    addActive(as, 3);
  } else if (
    window.scrollY + 300 >=
    sections[0].clientHeight +
      sections[1].clientHeight +
      sections[2].clientHeight +
      sections[3].clientHeight
  ) {
    addActive(as, 4);
  }
});

function addActive(links, i) {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  links[i].classList.add("active");
}

// scroll top

let scrollTop = document.querySelector(".scroll-top"),
  scrollTopBtn = document.querySelector(".scroll-top button");

window.addEventListener("scroll", function () {
  if (window.scrollY >= sections[0].clientHeight) {
    scrollTop.style.display = "block";
  }
  if (window.scrollY < sections[0].clientHeight) {
    scrollTop.style.display = "none";
  }
});

scrollTopBtn.onclick = function () {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

// card Image Projects

let proImgs = Array.from(document.querySelectorAll(".projects .card img"));

resize();

window.onresize = function () {
  resize();
};

function resize() {
  if (document.documentElement.offsetWidth <= 800) {
    for (let i = 0; i < proImgs.length; i++) {
      proImgs[i].setAttribute("src", `Imgs/pro0${i + 1}.png`);
    }
  } else {
    for (let i = 0; i < proImgs.length; i++) {
      proImgs[i].setAttribute("src", `Imgs/pro${i + 1}.png`);
    }
  }
}

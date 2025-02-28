//to scroll to sections and highlight the section name on navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul a");

// to show hover effect on home link in navbar when the page is loaded
// window.onload = () => {
//   let homeLink = document.querySelector("nav ul a[href='#HOME']");
//   if (homeLink) {
//     homeLink.classList.add("active");
//   }
// };

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 175;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
};

// to show sidebar
function ShowSideBar() {
  event.preventDefault();
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

// to hide sidebar
function hideSideBar() {
  event.preventDefault();
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// to close the sidebar when clicked at navlinks
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  });
});

// Function to update blur effect based on screen size
function updateBlurEffect() {
  let sections = document.querySelectorAll("section");
  if (window.matchMedia("(max-width: 768px)").matches) {
    sections.forEach((section) => {
      section.classList.remove("faded", "active");
    });
    return;
  }

  let scrollPosition = window.scrollY + window.innerHeight;
  let blurThreshold = window.matchMedia("(max-width: 1024px)").matches ? 120 : 175;

  sections.forEach((section) => {
    let offset = section.offsetTop;
    let height = section.offsetHeight;

    if (scrollPosition - blurThreshold > offset && scrollPosition - blurThreshold < offset + height) {
      section.classList.add("active");
      section.classList.remove("faded");
    } else {
      section.classList.remove("active");
      section.classList.add("faded");
    }
  });
}

window.addEventListener("scroll", updateBlurEffect);
window.addEventListener("resize", updateBlurEffect);
updateBlurEffect();
window.addEventListener("scroll", updateBlurEffect);
window.addEventListener("resize", updateBlurEffect);
updateBlurEffect();


//menubar in the about section
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => button.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const targetContent = document.querySelector(`.${button.dataset.target}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
  document.querySelector(".skillsContent").classList.add("active");
  document.querySelector(".tab-button").classList.add("active");
});

//projects swiper in projects section
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.3,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});

//skillstopics accordion in skills section
let acc = document.querySelectorAll(".accordion");
acc.forEach((button, index) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  if (index === 0) {
    button.classList.add("active");
    let panel = button.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});

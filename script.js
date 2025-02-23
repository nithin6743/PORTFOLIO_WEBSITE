//to scroll to sections and highlight the section name on navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul a");

// to show hover effect on home link in navbar when the page is loaded
window.onload = () => {
  let homeLink = document.querySelector("nav ul a[href='#HOME']");
  if (homeLink) {
    homeLink.classList.add("active");
  }
};

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
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

//to blur the sections when scrolen through navbar
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let scrollPosition = window.scrollY + window.innerHeight - 200;

  sections.forEach((section) => {
    let offset = section.offsetTop;
    let height = section.offsetHeight;

    if (scrollPosition > offset && scrollPosition < offset + height) {
      section.classList.add("active");
      section.classList.remove("faded");
    } else {
      section.classList.remove("active");
      section.classList.add("faded");
    }
  });
});

//menubar in the about section
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(button => button.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

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









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

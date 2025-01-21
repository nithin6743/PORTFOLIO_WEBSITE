// Smooth scrolling and highlighting navigation links on scroll
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                if (links.getAttribute("href").includes(id)) {
                    links.classList.add("active");
                }
            });
        }
    });
};

// Show the sidebar
function showSidebar(event) {
    if (event) event.preventDefault(); // Prevent default behavior for links
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex"; // Show the sidebar
}

// Hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none"; // Hide the sidebar
}

// Close sidebar when clicking on any sidebar link
const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        hideSidebar(); // Hide the sidebar
    });
});

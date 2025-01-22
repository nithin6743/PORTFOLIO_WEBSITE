//to scroll to sections and highlight the section name on navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if(link.getAttribute("href").includes(id)){
                    link.classList.add("active");
                }
            });
        }
    });
};

// to show sidebar
function ShowSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
// to hide sidebar
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

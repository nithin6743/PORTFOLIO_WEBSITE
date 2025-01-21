// Going to particular sections by clicking on the nav links 
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(scrollPosition >= offset && scrollPosition < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove("active");
                if(links.getAttribute("href").includes(id)){
                    links.classList.add("active");
                }
            });
        }
        
    });
};


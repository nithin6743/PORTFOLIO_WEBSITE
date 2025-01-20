// Going to particular sections by clicking on the nav links 
let sections = document.querySelector("section");
let navlinks = document.querySelector("header nav ul li a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getattribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
        
    });
};


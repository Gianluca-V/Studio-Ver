const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav__li a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 600;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("#a-" + id).classList.add("active");
            })
        }
    })
}

navLinks.forEach(link => {
    link.addEventListener("click",()=>{
        let id = link.getAttribute('id');
        document.querySelector("#"+id.slice(2,id.length)).scrollIntoView();
    })
})
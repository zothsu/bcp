const navToggle = document.querySelector('.toggle__btn');
const navLinks = document.querySelectorAll('.nav__li--link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})







// added toggle code
const outerContainer = document.querySelector(".outer-container");
const container = document.querySelector(".container");


container.addEventListener("click", () => {
    outerContainer.classList.toggle("light");
});


let lastScrollMobile = 0;
let lastScrollDesktop = 0;
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const langButtons = document.querySelectorAll(".header__lang, .lang__selector");
const lang = document.querySelectorAll(".lang__selected");
const logo = document.querySelector(".header__logo");


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    loop:false,
    speed: 1000,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); 
        }
    });
}, {
    threshold: 0.2 // 20% visible para activar animación
});

sections.forEach(section => observer.observe(section));



menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("header__nav--open");
    overlay.classList.toggle("active");
    document.body.classList.toggle("noscroll");
    logo.classList.toggle("hide");
    header.classList.toggle("overlayh");

});

langButtons.forEach(element =>{
    element.addEventListener("click",()=>{
        lang.forEach(item =>{
            if(item.textContent === "English"){
                item.textContent = "Spanish";
            }else{
                item.textContent = "English";
            }
        });
    })
});


window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollMobile && currentScroll > 60) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScrollMobile = currentScroll;

});




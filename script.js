const menuBtn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const langButtons = document.querySelectorAll(".header__lang, .lang__selector");
const lang = document.querySelectorAll(".lang__selected");
const header = document.getElementById("header");
const lastScroll = 0;
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect:{
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows:true,
    },
    loop:false,
    speed: 1000,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("header__nav--open");
    menuBtn.classList.toggle("header__menu-btn--open");
    overlay.classList.toggle("active");
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

    if (currentScroll > lastScroll) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

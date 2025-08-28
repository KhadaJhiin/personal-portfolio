const menuBtn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav");
const langButton = document.querySelector(".header__lang");
const lang = document.querySelector(".lang__selected");

menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("header__nav--open");
});

langButton.addEventListener("click", ()=>{
    if(lang.textContent === "en"){
        lang.textContent = "es";
    }else{
        lang.textContent = "en";
    };
});


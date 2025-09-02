const menuBtn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const langButtons = document.querySelectorAll(".header__lang, .lang__selector");
const lang = document.querySelectorAll(".lang__selected");

menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("header__nav--open");
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

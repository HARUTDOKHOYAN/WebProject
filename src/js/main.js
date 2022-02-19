const btnlist = document.querySelector('.btn-list');
const btnContactOn = document.querySelector('.header-contact');
const btnContactOff = document.querySelector('.popup_close');
const menulist = document.querySelector('.header-manu-list');
const menu = document.querySelector('.header-manu');

function menuShow(e){
    menulist.classList.toggle('is-open');
}
function contactPopupShow(e){
    var popup = document.querySelector('.contact-popup');
    popup.classList.add("is_popup_open");
}
function contactPopupHide(e){
    var popup = document.querySelector('.contact-popup');
    popup.classList.remove("is_popup_open");
}
function menuLinksClick(e){
    if(e.target.closest(".about-link")){
        var scrollItem = document.querySelector('.about');
        scrollItem.scrollIntoView();
        window.scrollBy(0,-50);
    }
    if(e.target.closest(".skills-link")){
        var scrollItem = document.querySelector('.skills');
        scrollItem.scrollIntoView();
        window.scrollBy(0,-50);
    }
    if(e.target.closest(".projects-link")){
        var scrollItem = document.querySelector('.project');
        scrollItem.scrollIntoView();
        window.scrollBy(0,-50);
    }
    menulist.classList.toggle('is-open');
}
btnlist.addEventListener("click", menuShow);
btnContactOff.addEventListener("click", contactPopupHide);
btnContactOn.addEventListener("click",contactPopupShow);
menu.addEventListener("click",menuLinksClick);
menulist.addEventListener("click",menuLinksClick);



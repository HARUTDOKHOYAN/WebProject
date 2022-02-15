const btnlist = document.querySelector('.btn-list');
const btnContactOn = document.querySelector('.header-contact');
const btnContactOff = document.querySelector('.popup_close');
const menulist = document.querySelector('.header-manu-list');


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
btnlist.addEventListener("click", menuShow);
btnContactOff.addEventListener("click", contactPopupHide)
btnContactOn.addEventListener("click",contactPopupShow)



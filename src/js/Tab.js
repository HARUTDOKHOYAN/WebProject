var tab1 = document.querySelectorAll(".hard-tab"); 
var tab2 = document.querySelectorAll(".soft-tab");
var btn1 = document.querySelectorAll(".btn-hard");
var btn2 = document.querySelectorAll(".btn-soft");

btn1.forEach(element => {element.addEventListener("click" , events1)});
btn2.forEach(element => {element.addEventListener("click" , events2)});
function events1(e){
    tab1.forEach(element => {
        element.classList.add("tab-on");
    });
    tab2.forEach(element => {
        element.classList.remove("tab-on");
    });
    //console.log('click')
}
function events2(e){
    tab2.forEach(element => {
        element.classList.add("tab-on");
    });
    tab1.forEach(element => {
        element.classList.remove("tab-on");
    });
    //console.log('click')
}
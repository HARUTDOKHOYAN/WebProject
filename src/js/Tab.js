var tab1 = document.querySelectorAll(".hard-tab"); 
var tab2 = document.querySelectorAll(".soft-tab");
var btn1 = document.querySelector(".btn-hard");
var btn2 = document.querySelector(".btn-soft");

function hovorbtn1on(e){
    btn1.classList.add("btn-hard-active");
    btn2.classList.add("btn-soft-inactive");
}
function hovorbnt2on(e){
    btn1.classList.add("btn-hard-inactive");
    btn2.classList.add("btn-soft-active");
}
function hovorbtn1off(e){
    btn1.classList.remove("btn-hard-active");
    btn2.classList.remove("btn-soft-inactive");
}
function hovorbnt2off(e){
    btn1.classList.remove("btn-hard-inactive");
    btn2.classList.remove("btn-soft-active");
}
function events1(e){
    hovorbtn1off();
    tab1.forEach(element => {
        element.classList.add("tab-on");
    });
    tab2.forEach(element => {
        element.classList.remove("tab-on");
    });
}
function events2(e){
    hovorbnt2off();
    tab2.forEach(element => {
        element.classList.add("tab-on");
    });
    tab1.forEach(element => {
        element.classList.remove("tab-on");
    });
    console.log("clik")
}



btn1.addEventListener("click" , events1);
btn2.addEventListener("click" , events2);
btn1.addEventListener("mouseenter",hovorbtn1on);
btn2.addEventListener("mouseenter",hovorbnt2on);
btn1.addEventListener("mouseleave",hovorbtn1off);
btn2.addEventListener("mouseleave",hovorbnt2off);
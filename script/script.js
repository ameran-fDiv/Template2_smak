let progress = document.querySelectorAll("#progress");
let prog = document.querySelectorAll("circle");
Array.from(prog).map((el) => {
    el.setAttribute("r", "50");
    el.setAttribute("cx", "50%");
    el.setAttribute("cy", "50%");
});
// set rayant
let radius = progress[0].r.baseVal.value;
let circumference = radius * 2 * Math.PI;
progress.forEach((el) => (el.style.strokeDasharray = circumference));
let startValue1 = 0;
let startValue2 = 0;
let startValue3 = 0;
let startValue4 = 0;
let timeEnd = 60;
function setElementTarget(index, startV) {
    progress[index].parentElement.nextElementSibling.textContent = `${startV}%`;
    progress[index].style.strokeDashoffset =
        circumference - (startV / 100) * circumference;
}
let timer1 = setInterval(function setPos() {
    startValue1++;
    setElementTarget(0, startValue1);
    if (
        startValue1 ==
        progress[0].parentElement.nextElementSibling.dataset.value
    ) {
        clearInterval(timer1);
    }
}, timeEnd);
let timer2 = setInterval(function setPos() {
    startValue2++;
    setElementTarget(1, startValue2);
    if (
        startValue2 ==
        progress[1].parentElement.nextElementSibling.dataset.value
    ) {
        clearInterval(timer2);
    }
}, timeEnd);
let timer3 = setInterval(function setPos() {
    startValue3++;
    setElementTarget(2, startValue3);
    if (
        startValue3 ==
        progress[2].parentElement.nextElementSibling.dataset.value
    ) {
        clearInterval(timer3);
    }
}, timeEnd);
let timer4 = setInterval(function setPos() {
    startValue4++;
    setElementTarget(3, startValue4);
    if (
        startValue4 ==
        progress[3].parentElement.nextElementSibling.dataset.value
    ) {
        clearInterval(timer4);
    }
}, timeEnd);

document.getElementById(
    "yearCopy"
).textContent = `Ameran ${new Date().getFullYear()}`;
// set list style type to our work section
let listLi = document.querySelectorAll(".box-nav ul li a");
listLi.forEach((el) => {
    el.addEventListener("click", (e) => {
        listLi.forEach((el, index) => {
            el.classList.remove("active");
            if(window.innerWidth<768){
                el.parentElement.style.listStyle = "square";
            }else{
                index !== 0 ? (el.parentElement.style.listStyle = "square") : false;
            }
        });
        e.target.classList.add("active");
        e.target.parentElement.style.listStyle = "none";
    });
});

let btn = document.querySelector('#clr');
let btnname = document.querySelector('#clrname');
let display = document.querySelector('#display');
let body = document.querySelector('#body');

btn.addEventListener("click",genClr);




function genClr(){
    let blue=randomInRange(0,255);
    let red=randomInRange(0,255);
    let green=randomInRange(0,255);
    let b=randomInRange(180,255);
    let r=randomInRange(180,255);
    let g=randomInRange(180,255);
    let brgb =`rgb(${r},${g},${b})`;
    let rgb =`rgb(${red},${green},${blue})`;
    btnname.innerText=`Color is : ${red},${blue},${green}`;
    display.style.backgroundColor = rgb;
    body.style.backgroundColor=brgb;


    return rgb ;

}
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

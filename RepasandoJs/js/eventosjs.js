
function cambiarColor(){
    let Btncolor=document.querySelector('#btnChange');
    console.log('El color es',Btncolor.style.background);
    Btncolor.style.background='red';
if (Btncolor=='red') {
    Btncolor.style.background='black';
} else {
    Btncolor.style.background='red';
}
}
/**
 * AddListener
 */
let btnAdd=document.querySelector('#btnAdd');
let btnAnonima=document.querySelector('#btnAnonima');
let cja=document.querySelector('#cja');
let btnOnclick=document.querySelector('#btnOnclick');
let btnAnonimaOnclick=document.querySelector('#btnAnonimaOnclick');
let Bombillo=document.querySelector('#Bombillo');
let btnOnMouse=document.querySelector('#btnOnmouse');
let btnAmimar=document.querySelector('#btnAnimar');
let btnAmimar2=document.querySelector('#btnAnimar2');
let btnName=document.querySelector('#btnName');
btnAdd.addEventListener('click',changebox);
function changebox() {
    cja.style.height='300px';
    cja.style.width='300px';
    cja.style.background='#cc1';
}
btnAnonima.addEventListener('click',function(){
    cja.style.height='150px';
    cja.style.width='150px'; 
    cja.style.background='#AA1245';
});
// btnOnclick.onclick(changebox2);
// function changebox2(){
//     cja.style.height='300px';
//     cja.style.width='300px';
//     cja.style.background='#cc1';
// };
btnAnonimaOnclick.addEventListener('click',function(){
    cja.style.height='150px';
    cja.style.width='150px'; 
    cja.style.background='#AA1245';
});
Bombillo.onclick=function(){
    Bombillo.src='img/Encendido.jpeg';
};
Bombillo.ondblclick=function(){
    Bombillo.src='img/Apagado.jpeg';
};
btnOnMouse.onmouseover=function(){
    btnOnMouse.style.background='#FFDA33';
    btnOnMouse.style.width='400px';
    btnOnMouse.style.transition='2s';
};
btnOnMouse.onmouseout=function(){
    btnOnMouse.style.background='black';
    btnOnMouse.style.width='300px';
    btnOnMouse.style.transition='2s';
};

btnAmimar.onmouseover=function(){
    this.classList.add('animar');
};
btnAmimar.onmouseout=function(){
    this.classList.remove('animar');
};
btnAmimar2.onmouseover=function(){
    this.classList.toggle('animar2');
};
btnName.onmouseover=function(){
    btnName.innerHTML=('Carlos');
};
btnName.onmouseout=function(){
    btnName.innerHTML=('*');
};
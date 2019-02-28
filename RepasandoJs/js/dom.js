'use strict'
/**-------------------------------
 *       ==ESTILOS EN JS==
 --------------------------------*/
let caja=document.getElementById('cja');
let caja2=document.getElementsByClassName('cajas');
let caja3=document.getElementsByTagName('div');
let caja4=document.querySelector('#cja');
let caja5=document.querySelector('.caja');
let cajatotal=document.querySelectorAll('.cajas');
let principal=document.querySelector('Principal');
let hr=document.createElement('hr');
console.log(caja2);
console.log(caja);
console.log(caja3);
console.log(`Querry selector cajas por id `,caja4);
console.log(`Querry selector cajas por clase `,caja5);
console.log(`Querry selectorAll cajas por clase `,cajatotal);
/**-------------------------------
 *       ==ESTILOS CON ID==
 --------------------------------*/
caja.style.width='10%';
caja.style.height='100px';
caja.style.background='skyblue';
caja.innerHTML='Partes del DOM';
caja.style.color='white';
/**-------------------------------
 *     ==ESTILOS CON CLASES==
 --------------------------------*/
// caja2[2].style.width='10%';
// caja2[2].style.height='100px';
// caja2[2].style.background='chocolate';
// caja2[2].innerHTML='Partes del DOM';
// caja2[2].style.color='white';
/**-------------------------------
 *     ==ESTILOS CON CLASE==
 --------------------------------*/
//  caja3[2].style.width='10%';
//  caja3[2].style.height='100px';
//  caja3[2].style.background='chocolate';
//  caja3[2].innerHTML='Partes del DOM';
//  caja3[2].style.color='white';
var colors=['brow','yellow','rgb(20,0,119)','rgb(255,0,119)','green',
            'rgb(240,0,100)','rgb(200,0,59)','rgb(300,0,100)',
            'rgb(100,0,100)','rgb(90,10,100)','chocolate','brow',
            'yellow','rgb(20,0,119)','rgb(255,0,119)','green',
            'rgb(240,0,100)','rgb(200,0,59)','rgb(300,0,100)',
            'rgb(100,0,100)','rgb(90,10,100)','chocolate'];
for (const key in caja2) {
    caja2[key].style.width= '100px';
    caja2[key].style.height='300px';
    caja2[key].style.background=colors[key];
    caja2[key].style.overflow='left';
    caja2[key].style.marginRight='1%';
    caja2[key].style.marginTop='1%';
    caja2[key].style.borderRadiusLeft='10px';
    caja2[key].innerHTML=key;
    caja2[key].style.textaling='center';
    caja2[key].style.color='white';
    caja2[key].style.fontSize='70px';
    caja2[key].style.lineHeight='3.5';
};
hr.style.clear='both';
principal.append(hr);   
 letname onkeydown =function(tecla){
    console.log('Presionando la tecla ',tecla.keyCode);
    console.log('Presionando la tecla ',String.fromtecla);
}
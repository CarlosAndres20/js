'Use strick '
  /**---------------------------------
 *      ==Evento focus==
 -----------------------------------*/
 let name=document.querySelector('name')
 let valida=document.querySelector('valida')
   /**---------------------------------
 *      ==Evento  fuera del focus==
 -----------------------------------*/
 name.onblur= function (){
     console.log('Estoy fuera del focus');
     name.style.background='white';
     if (name.value=='') {
         alert('Rellenar el campo');
         document.write('Todos los campos son obligatorios');
     }
 }
 /**
  * Teclla .key code saca un numero punto ascii
  */
name.onkeydown =function(tecla){
  console.log('Presionando la tecla ',tecla.keyCode);
  console.log('Presionando la tecla ',String.fromCharCode);
}
/**----------------------------
      ==EVENTO KEY PRESS==
-------------------------------*/
  name.onkeypress=function(tecla){
    console.log('tecla Presionada',tecla.keyCode);
    console.log('tecla Presionada',String.fromCharCode);
  }
  /**
   *  ==Soltar la tecla==
   */
  name.onKeyup=function(tecla){
    console.log('Soltando la tecla',tecla.keyCode);
    console.log('Soltando la tecla',tecla.fromCharCode);
  }
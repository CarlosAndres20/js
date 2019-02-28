// let persona={
//     nombre='carlos',
//     edad=56,
//     Apellido='Mancipe',
//     Trabajo=true,
//     musica=['Rock','Pop','Metal','Tropical'],
//     casas={
//         ciudad:'Medellin',
//         departamento:'Antioquia'      
// },
// AnioNacimiento :function (){
//     return new Date().getFullYear()- this.edad;
//     }
// }
// for (const iterator of persona) {
//     document.write('Recorriendo el objeto '+iterator+' ');
// }
// document.write(`<h2> El objeto del arreglo es </h2> ${persona.musica[3]}`);
// var musica={
//     reproducir : function(cancion){
//        document.write (`play=> ${cancion} <br>`);
//     },
//     pausar : function(){
//        document.write( `Paused <br> ${this.cancion}`);
//     },
//     parar : function(){
//         document.write(`Stop ${this.cancion}`)
//     }
// }
// musica.reproducir[0];
// document.write(`<h2> play </h2> ${musica.reproducir[0]}`)
// document.write(`<h2> `)
/**---------------------------------
 *      ==Object Constructor==
 -----------------------------------*/
function Tarea(nombre,tecnologia) {
    this.nombre=nombre;
    this.tecnologia=tecnologia;
}
let nTarea=new Tarea('Estudiar','JavaScript');
let nTarea2=new Tarea('','');
  /**---------------------------------
 *      ==Object Literal==
 -----------------------------------*/
let tarea={
    nombre:"Aprendiendo",
    tecnologia:"JavaScript"
}
/**---------------------------------
 *      ==Nueva Forma==
 -----------------------------------*/
 /**---------------------------------
 *      []
 -----------------------------------*/
class Tarea3{
    constructor(ojos,pelo,peso){
        this.ojos=ojos;
        this.pelo=pelo;
        this.peso=peso;  
    }  
}
let tarea3=new Tarea3('Verdes','Oscuro','60');
console.log(tarea3);
let tarea4=new Tarea3(8,6,60);

let personas=[
    {nombre:'Juan',edad: 20},
    {nombre:'Andres',edad: 23},
    {nombre:'Alejandra',edad: 25},
    {nombre:'Pepito',edad: 26},
    {nombre:'Juana',edad: 20}
]
console.table(personas);
                 ErrorEvent
 /**-----------------------------------------
 *    Obtener las personas mayores a 25 años
 -------------------------------------------*/
 const mayores=personas.filter(personas=> personas.edad > 25);
 console.log(mayores);
 const Alejandra=personas.find(persona=> persona.nombre === 'Alejandra');
 console.log(Alejandra);
 let Total=personas.reduce((totalidad,personas)=> totalidad+personas.edad,0);
 console.log(Total);
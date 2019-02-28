//Declaraciòn de Funciones
function saludar() {
    console.log('hello');
}
//llamar funcion
saludar();
//Funtion expresiòn
function multi() {
    console.log(1*2);
}
multi();
/**----------------
 == FUNCIONES CON PARAMETROS
 ------------------*/
 function operacion(num1,num2) {
     var res=num1+num2;
     console.log("res",res)
 }
 operacion(5,0);
 operacion(5,0) ;
 operacion(5,0);
 /**----------------
 == FUNCIONES DE RETORNO SIN PARAMETROS
 ------------------*/
 function retorno1() {
     var numero=5;
     return numero;
 }
 retorno1()
     var retorno=retorno1();
     console.log("whitout retorno"+retorno);
     console.log("Whit retorno"+retorno1());
  /**----------------
 == FUNCIONES DE RETORNO CON PARAMETROS
 ------------------*/
 function pote(base,exp) {
     var cal=Math.pow(base,exp);
     return cal;
 }
//  pote();
//  function validN(){
//      let nume=prompt("Enter a paswoord");
//      while (isNaN (nume)){
//          alert("Please enter a numer")
//         nume=prompt("Enter a paswoord");
//      }
//      return nume;
//  }
//  var valb=validN();
//  var vale=validN();
//  var result=pote(valb,vale);
//  console.log("The result is:  "+result);
//  function login() {
//      let user=prompt("Enter a login");
//      while (!isNaN(user)) {
//          alert('Please enter only letters');
//          user=prompt("Enter a login");
//      }
//      return user;
//  }
// var users=login();
// var paswoord=validN();
// document.write(" Gracias por registrarse "+users+"  Bienvenido al sistema ");
  /**----------------
 == FUNCIONES CON PARAMETROS OPCIONALES
 ------------------*/
//  function operaciones(num1,num2,activo=false){
//     if (!activo) {
//         console.log('Suma'+(num1+num2));
//         console.log('Resta'+(num1-num2));
//         console.log('Division'+(num1/num2));
//         console.log('Producto'+(num1*num2));
//         console.log('**************');
//     } else {
//         document.write("Suma"+(num1+num2)+"<br>");
//         document.write("Resta"+(num1+num2)+"<br>");
//         document.write("Division"+(num1+num2)+"<br>");
//         document.write("Producto"+(num1+num2)+"<br>");
//         document.write("************ <br>");
//     }
//  }
//  var numerote=operaciones(2,2);
//  var numerito=operaciones(4,6,true);
//  var nombre=prompt("Ingrese su nombre");
//  function Trabajador(nombre,work='No esta trabajando') {
//     document.write(`Hola ${nombre}Tu trabajo es ${work}`);
//  }
//  Trabajador(`Armando`,'Desarrollador');
//  Trabajador("rodrigo");
 /**-----------------
  ==FUNCIONES IIF
  ------------------*/
 (function () {
     Console.log(`AQUI ESTOY!!`);
 });
 /**----------------
  ==FUNCIONES CON REST Y SPREAD
 ------------------ */
 function lista(fruta1,fruta2,...restfrutas) {
     console.log("Fruta 1",fruta1);
     console.log("fruta 2",fruta2);
     console.log("restfrutas",restfrutas);
 }
 lista("Naranja","Manzana","Fresa","Papaya");

 function listFruits2(fruta1,fruta2,...restfruits) {
     console.log("Fruta1",fruta1);
     console.log("Fruta2",fruta2);
     console.log("Fruta3",restfruits);
 }
 //[…]
 var frutas=["Melon","kiwi","Sandia"];
 listFruits2(frutas,"Naranja","Manzana","Fresa","Papaya");
 //Funcion anonimas
 var resultado= function(num1,num2){
    var res=num1+num2;
    return res; 
 } 
//Funcion landa
Console.log("Resultado de sumar con la funcion anonima",resultado(10,20));
var resultado=(num1,num2)=>{
    var res=num1+num2;
    return res;
}
Console.log("Resultado de sumar con la funcion landa",resultado(90,30));

function wordtravel(Destino) {
    let Travel="Viajando por"+Destino;
    return Travel;
}
let Destino=wordtravel("Londres");
console.log(Destino);
let Destino2=function(Destino){
    let Travel="Viajando por"+Destino;
    return Travel;
}
let Destino2=Destino2
// Funciones collbacks

var Movie = function (Movie) {   
}  
Movie(xmen);
function adicion(num1,num2,suma,prod,resta) {
    console.log("numero 1",num1);
    console.log("numero 2",num2);
    var res=num1+num2;
    suma(res);
    prod(res);
    resta(num1,num2);
}
adicion(5,7,function (total) {
    console.log("la suma es de "+total);
    },function(total) {
        console.log("El doble de "+total+"es"+num1*num2);
    },function (total) {
        console.log("la resta de "+n1+"-"+n2+"="+(n1-n2));
    });
var adicion=(num1,num2,suma,prod,resta) => {
    var res=(num1+num2);resta(num1,num2), suma(res),prod(res);   
} 
adicion(8,4,total1=>{
console.log("la suma es de "+total1);
},total1=>{
console.log("El doble de"+total1+"es"+num1*num2);
},total1=>{("la resta de "+n1+"-"+n2+"="+(n1-n2));
}
)
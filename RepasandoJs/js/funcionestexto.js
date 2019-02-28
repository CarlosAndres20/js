var txt1="Metodos para procesar textos";
var txt2="Utiles en archivos de texto";
var Citys=["pereira","medellin","Tunja","Manizales","Leticia"]; 
/** Longitud de String */
document.write("la longitud de variable es"+String(Number).length+"<br>");
document.write("la longitud de este es"+txt1.length+"<br>");
document.write("la longitud de este es"+txt2.length+"<br>");
document.write("la longitud de este es"+Citys.length+"<br>");
/**Concatenando */
document.write("Concatenando txt1 y txt2"+txt1.concat(txt2));
document.write("pasando a minuscula "+txt1.toLowerCase()+"<br>");
document.write("Pasando a mayuscula"+txt1.toUpperCase()+"<br>");
/** Metodos para procesar textos, imagenes y muchos mas textos */
document.write("primera concidencias de textos"+txt1.indexOf("Textos"));
document.write("primera comilla de textos y concidencias de textos"+txt1.lastindexOf("Textos"));
document.write("primera comilla de textos y concidencias de textos"+txt2.search("Archivos"));
document.write("selecciona parte de un array y devuelve su contenido"+txt1.slice(10,20));
document.write("busca inicio letra"+txt2.startsWith("T"));
document.write("Busca fin letra "+txt2.endsWith("s"));
document.write("Busca Palabra especifica"+txt2.includes("Textos"));
document.write("primera comilla de textos y concidencias de textos"+txt1.indexOf("Textos"));
document.write("busca @"+email.includes("@"))
document.write("convirtiendo a arreglos"+txt2.split(""))
var txt3='            procesando Textos                   '
document.write('El valor de txt3 es:  '+txt3);
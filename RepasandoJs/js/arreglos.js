var pendientes=("Planear ","proyectar ","Presupuestar")
console.log()
var Carrito=[
    {
    id:1,
    articulo: "Guantes"
    },
    {id:2,
    articulo:"Zapatos"
    },
    {
    id:3,
    articulo:"Medias"
    },
    {
    Id:4,
    articulo: "Botas"
    },
    {
    Id:5,
    articulo: "Pantalon"
    }
    ]
    document.write("<ul>");
    for (let index = 0; index < Object.values(Carrito).length; index++) {
        document.write("<li>"+"Elemento"+[index]+"<ul>"+"<li>"+Carrito[index]+"</li>"+"</ul>"+"</li>");
    }
    document.write("</ul>");
    //------------------------
    document.write("<ul>");
    for (const key in Carrito) {
        document.write("<li>"+"Elemento"+[key]+"</li>"); 
        document.write("<ul>");
        Object.values(Carrito[key]).forEach(element =>{
            document.write("<li>"+element+"</li>");
    });
    document.write("</ul>");
    document.write("</ul>");
};

    //------------------------
    document.write("<ul>");
    for (const iterator of Object.values(Carrito)) {
        document.write("<li>"+iterator+"</li>");
    }
    document.write("</ul>");
    //----------------------------
    // document.write("<ul>");
    // array.forEach(element => {
    //     document.write("<li>"+"Elemento"+element+"</li>")});
    // document.write("</ul>");
// var vehiculo=[
//     {
//     Id:1,
//     Marca: "BMW",
//     Modelo: "ClasicoDeportivo",
//     anio:2018
//     }
// ]

/**---------------------------------
 ==Recorriendo el Objeto automovil==
 -----------------------------------*/
//  document.write("</ul>");
//  for (const key in vehiculo) {
//      document.write("<li>"+vehiculo+[key]+"</li>");
//  }
//  //--------------------------------
//  array.forEach(element => {
//      document.write("<li>"+element+"</li>")
//  });
//  //----------------------------------
//  document.write("</ul>");
//  //-------------------------------
// for (const iterator of object.values(vehiculo)) {
//     document.write("<li>"+iterator+"</li>");
// }
//  //-------------------------------
// array.forEach(objetos => {
//     document.write("<li>"+objetos+"</li>");
// });
// //--------------------
// document.write("Recorriendo el Arreglo con for clasico");
// document.write("<ul>");
// for (let index = 0; index < pendientes.length; index++) {
//     document.write("<li>"+pendientes[index]+"</li>");
// }
// //---------------------
// document.write("</ul>");
// document.write("<h1> Recorriendo el Arreglo de pendientes con for in </h1>");
// document.write("<ul>");
// for (const key in pendientes) {
//     document.write("<li>"+pendientes+(key)+"</li>");
// }
// document.write("</ul>");
// //----------------------
// document.write("<h1> Recorriendo el Arreglo de pendientes con foreach </h1>");
// document.write("<ul>");
// //-----------------------
// array.forEach(element =>{
//     document.write("<li>"+element+"</li>");
// });
// document.write("</ul>");
// //-----------------------
// document.write("<h1> Recorriendo el Arreglo de pendientes con forof </h1>");
// document.write("<ul>");
// for (const pendi of pendientes) {
//     document.write("<li>"+pendi+"</li>")
// }document.write("</ul>");

var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("boton")
boton.addEventListener("click", dibujoPorClick );
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
console.log(lienzo, d);
var ancho = d.width;

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;
    
    if ( lineas <= 0) {
       alert('Ingresa un número positivo')
    }
 while (l < lineas)
 {
     yi = espacio * l;
     xf = espacio * (l + 1);
     xf2 = espacio * (lineas - 1);
    dibujarLinea ("purple", 0, yi, xf, 300);
    dibujarLinea ("purple", 300, yi, xf, 0);
    l = l + 1;
 }

 dibujarLinea("green", 0, 0, 0, 300);
 dibujarLinea("green", 0, 300, 300, 300);
 dibujarLinea("green", 300, 0, 0, 0);
 dibujarLinea("green", 300, 300, 300, 0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
 {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();  
 }
    var xxx = parseInt(texto.value);
}
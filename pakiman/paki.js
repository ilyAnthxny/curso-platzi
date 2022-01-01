var imagenes = [];

imagenes["Vacacho"] = "cow.png";
imagenes["Coshon"] = "pig.png";
imagenes["Pollollon"] = "chicken.png";

var coleccion = [];
coleccion.push(new Pakiman("Vacacho", 100, 400));
coleccion.push(new Pakiman("Pollollon", 600, 200));
coleccion.push(new Pakiman("Coshon", 700, 120));

for(var p of coleccion)
{
    p.mostrar(); 
}

 for( var x in coleccion[0])
 {
     console.log(x);
 }

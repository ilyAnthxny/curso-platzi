var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var xL = 100;
var yL = 100;

document.addEventListener("keyup", loboMoviendose);

function loboMoviendose(evento){
    
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

    var movimiento = 20;

    switch (evento.keyCode){

   case teclas.LEFT:
       xL = xL - movimiento;
       dibujar();
       break;
    case teclas.RIGHT:
       xL = xL + movimiento;
       dibujar();
        break;
    case teclas.DOWN:
        yL = yL + movimiento;
        dibujar();
        break;
    case teclas.UP:
        yL = yL - movimiento;
        dibujar();
        break;
    default:
        console.log("Otra tecla");
        break;
    }
}
drawAgain();

var vacaPositions ={
    vacaPosX: [],
    vacaPosY: []
}
var polloPositions ={
    polloPosX: [],
    polloPosY: []
}
var cerdoPositions ={
    cerdoPosX: [],
    cerdoPosY: []
}


var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var lobo = {
    url: "lobo.png",
    cargaOK: false
};

function aleatorio(min, maxi)
{
    var resultado
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
var cantidad = aleatorio(3, 6);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;

fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen.addEventListener("load", cargarVacas);
cerdo.imagen.addEventListener("load", cargarCerdos);
pollo.imagen.addEventListener("load", cargarPollos);
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}


function dibujar()
{
    var i, x, y;

    if (fondo.cargaOK);
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK);
    {
        for(i = 0; i < cantidad; i++){
            x = aleatorio(0, 7);
            y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
            vacaPositions.vacaPosX [i] = x;
            vacaPositions.vacaPosY [i] = y;
        }
    }
    if (cerdo.cargaOK);
    {
        for(i = 0; i < cantidad; i++){
            x = aleatorio(0, 7);
            y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
            cerdoPositions.cerdoPosX [i] = x;
            cerdoPositions.cerdoPosY [i] = y;
        }
    }
    if (pollo.cargaOK);
    {
        for(i = 0; i < cantidad; i++){
            x = aleatorio(0, 7);
            y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
            polloPositions.polloPosX [i] = x;
            polloPositions.polloPosY [i] = y;
        }

        if (lobo.cargaOK);
    {
            papel.drawImage(lobo.imagen, xL, yL);
        }
    }

    function drawAgain(){
        var i;
         papel.drawImage(mapa.imagen, 0, 0);

         for(i = 0; i < aleatorio; i++)
          mapa.drawImage(vaca.imagen, vacaPositions.vacaPosX[i], vacaPositions.vacaPosY[i]);
         
          for(i = 0; i < aleatorio; i++)
           mapa.drawImage(cerdo.imagen, cerdoPositions.cerdoPosX[i], cerdoPositions.cerdoPosY[i]);
          
          for(i = 0; i < aleatorio; i++)
              mapa.drawImage(pollo.imagen, polloPositions.polloPosX[i], polloPositions.polloPosY[i]);
              papel.drawImage(lobo.imagen, xL, yL); 
    }
        
}


var villaCanvas = document.getElementById("villaplatzi");
var sheet = villaCanvas.getContext("2d");

var cowRandom = myRandom(1, 15);
var pigRandom = myRandom(1, 15);
var chickenRandom = myRandom(1, 15);

document.addEventListener("keydown", moveWolf);

var xWolf = myRandom (0, 420);
var yWolf = myRandom (0, 420);

var map = {
    url: "tile.png",
    loadOK: false
}

var cow = {
    url: "cow.png",
    loadOK: false
}

var pig = {
    url: "pig.png",
    loadOk: false
}

var chicken = {
    url: "chicken.png",
    loadOK: false
}

var wolf = {
    url: "wolf.png",
    loadOK: false
}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var cowPositions ={
    cowPosX: [],
    cowPosY: []
}
var chickenPositions ={
    chickenPosX: [],
    chickenPosY: []
}
var pigPositions ={
    pigPosX: [],
    pigPosY: []
}

map.image = new Image();
map.image.src = map.url;

cow.image = new Image();
cow.image.src = cow.url;

pig.image = new Image();
pig.image.src = pig.url;

chicken.image = new Image();
chicken.image.src = chicken.url;

wolf.image = new Image();
wolf.image.src = wolf.url;

map.image.addEventListener("load", loadMap);
cow.image.addEventListener("load", loadCow);
pig.image.addEventListener("load", loadPig);
chicken.image.addEventListener("load", loadChicken);
wolf.image.addEventListener("load", loadWolf);

function myRandom(min, maxi){
    var result
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}

function draw(){
    var i, x, y;

    if (map.loadOK);
    {
        sheet.drawImage(map.image, 0, 0);
    }
    if (cow.loadOK);
    {
        for(i = 0; i < cowRandom; i++){
            x = myRandom(0, 7);
            y = myRandom(0, 7);
            x = x * 60;
            y = y * 60;
            sheet.drawImage(cow.image, x, y);
            cowPositions.cowPosX [i] = x;
            cowPositions.cowPosY [i] = y;
        }
    }
    if (pig.loadOK);
    {
        for(i = 0; i < pigRandom; i++){
            x = myRandom(0, 7);
            y = myRandom(0, 7);
            x = x * 60;
            y = y * 60;
            sheet.drawImage(pig.image, x, y);
            pigPositions.pigPosX [i] = x;
            pigPositions.pigPosY [i] = y;
        }
    }
    if (chicken.loadOK);
    {
        for(i = 0; i < chickenRandom; i++){
            x = myRandom(0, 7);
            y = myRandom(0, 7);
            x = x * 60;
            y = y * 60;
            sheet.drawImage(chicken.image, x, y);
            chickenPositions.chickenPosX [i] = x;
            chickenPositions.chickenPosY [i] = y;
        }

        if (wolf.loadOK);
    {
            sheet.drawImage(wolf.image, xWolf, yWolf);
        }
    }
}

function loadMap(){
    map.loadOK = true;
    draw();
}

function loadCow(){
    cow.loadOK = true;
    draw();
}

function loadChicken(){
    chicken.loadOK = true;
    draw();
}

function loadPig(){
    pig.loadOk = true;
    draw();
}

function loadWolf(){
    wolf.loadOK = true;
    draw();
}

function moveWolf(evento){
    var range = 10;
    switch(evento.keyCode){
        case teclas.UP:
            if(yWolf >= -20){
                yWolf = yWolf - range;
            }else{
                yWolf = yWolf
            }

            drawAgain();
            break;

            case teclas.DOWN:
                if(yWolf < 440){
                    yWolf = yWolf + range;
                }else{
                    yWolf = yWolf
                }
            drawAgain();
            break;

            case teclas.LEFT:
                if(xWolf >= -10){
                    xWolf = xWolf - range;
                }else{
                    xWolf = xWolf
                }
            drawAgain();
            break;

            case teclas.RIGHT:
                if(xWolf < 440){
                    xWolf = xWolf + range;
                }else{
                    xWolf = xWolf
                }
            drawAgain();
            break;
            default:
                console.log("Another key")
    }
}

function drawAgain(){
    var i;
    
    sheet.drawImage(map.image, 0, 0);

    for(i = 0; i < cowRandom; i++){
     sheet.drawImage(cow.image, cowPositions.cowPosX[i], cowPositions.cowPosY[i]);
    }
    for(i = 0; i < pigRandom; i++){
     sheet.drawImage(pig.image, pigPositions.pigPosX[i],pigPositions.pigPosY[i]);
    }
    for(i = 0; i < chickenRandom; i++){
     sheet.drawImage(chicken.image, chickenPositions.chickenPosX[i],chickenPositions.chickenPosY[i]);
    }

    sheet.drawImage(wolf.image, xWolf, yWolf);
}
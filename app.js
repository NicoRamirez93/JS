let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");
let vid = document.getElementById("myVideo");
vid.playbackRate = 0.6;

class rooms {
    constructor (nombre, imagen, precio, personas, dificultad){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.personas = personas;
        this.dificultad = dificultad;
    }

    calculaPrecio (precio, personas){
        return precio*personas;
    }
    cambiaPersonas (personas){
        this.personas = personas;
    }
}

function pausar() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

let arrayRooms = [];

arrayRooms.push(new rooms("sherlock", "imagenes/sherlock.webp", 1500, 0, 4));
arrayRooms.push(new rooms("conjuro", "imagenes/conjuro.webp", 2500, 0, 4));
arrayRooms.push(new rooms("western", "imagenes/western.jpg", 3500, 0, 4));
arrayRooms.push(new rooms("breaking bad", "imagenes/brba.jpg", 4500, 0, 4));

let eleccion = prompt ("ingrese la sala a reservar: sherlock($1500) - conjuro($2500) - western($3500) - breaking bad($4500)");
let cantPersonas = prompt ("ingrese la cantidad de personas (max 4)");

while (eleccion == "" || eleccion == null){
    eleccion = prompt ("ingreso un dato incorrecto, ingrese nuevamente: ");
}

let room = arrayRooms.find(element => element.nombre == eleccion);
if (room){
    alert("el precio es: " + room.calculaPrecio(room.precio, cantPersonas));
}else {
    alert("nombre de sala incorrecto");
    }

let amigos = [];

function agregarAmigo() {
    let ingresarAmigo = document.getElementById("amigo");
    let nombreDeAmigo = ingresarAmigo.value ;

    if (nombreDeAmigo == "") {
        alert("Ingresar un nombre válido, no se admite el ingresado") ;
        return;
    }
    amigos.push(nombreDeAmigo);

    ingresarAmigo.value = ""
    console.log( "Amigos Ingresados:", amigos);
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i<amigos.length; i++) {
        listaAmigos.innerHTML += "<li>"+ amigos[i] +"</li>";
    }
}

function sortearAmigo () {
    if (amigos.length === 0) {
        alert("¡Cuidado! No hay amigos para sortear.");
        return;
    }

    let posicionRandom = Math.floor(Math.random() * amigos.length);

    let AmigoSorteado = amigos[posicionRandom];

    let devolverAmigo = document.getElementById("resultado");
    devolverAmigo.innerHTML = "El amigo que fue sorteado es:" + AmigoSorteado ;
}

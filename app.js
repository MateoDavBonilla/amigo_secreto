// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

let amigos = [];

//funcion para agragar amigos
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    //condicional, verifica si existen datos o no en el input
    if (amigo == "") {
        alert('Por favor, inserte un nombre.')

    } else {

        amigos.push(amigo);
        document.getElementById('amigo').value = '';

        mostrarLista();
        return amigo;
    }
};

//Crea un listado apartir del array para mostrar en el HTML
function mostrarLista() {

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        const texto = document.createTextNode(amigos[i])
        elementoLista.appendChild(texto);
        lista.appendChild(elementoLista);
    }
    return;

};
//Selecciona un amigo aleatorio y lo muestra como resultado en el HTML
function sortearAmigo() {

    if (resultado.innerHTML !== "") {

        alert("Ya se ha seleccionado tu amigo secreto.");
        alert("Si quieres volver a jugar presiona F5.");

    } else if (amigos == "") {
        alert("No has añadido ningun amigo todavia");


    } else {
        let indiceAmigos = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAmigos];
        resultado.innerHTML = "Tu amigo secreto es " + amigoSeleccionado;
    };

    return;
}

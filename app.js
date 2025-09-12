// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista donde se almacenaran los nombres

let listaDeNombres = [];

//función para agregar amigos y cambiar el "h2" temporalmente

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    let titulo = document.getElementById("encabezado2");
    let textoOriginalh2 = "Digite el nombre de sus amigos"

    if (nombre === "") {
        alert("Por favor, inserte un nombre")
        //cambia el "h2"
        titulo.innerText = "Por favor ingrese un nombre correctamente"
        //establece el tiempo de retorno
        setTimeout(() => {
            titulo.innerText = textoOriginalh2;
        }, 2000);
        return;
    } else if (listaDeNombres.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    } else {
        //agregamos el nombre a la lista y limpiamos el campo
    listaDeNombres.push(nombre)
    document.getElementById("amigo").value="";
    }
}

//hasta el momento, todo funciona, pero nada se esta mostrando. Pasemos al siguiente punto.

//Implementa una función para actualizar la lista de amigos

function mostrarLista() {
    let listaDeAmigos =  document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = ""; //limpia la lista para evitar errores de duplicados.
    for (let a = 0; a < listaDeNombres.length;a++) {
        const li = document.createElement("li");
        li.innerText = listaDeNombres[a];
        listaDeAmigos.appendChild[li];
    }
}
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
    mostrarLista();
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
        listaDeAmigos.appendChild(li);
    }
}

//ahora falta agregar la función que sortee los nombres en la lista, una función de reinicio, y una para eliminar nombres especificos.

//Implementa una función para sortear los amigos

function sortearAmigo() {
    let nombre = document.getElementById("amigo").value;
    let titulo = document.getElementById("encabezado2");
    let textoOriginalh2 = "Digite el nombre de sus amigos"

     if (listaDeNombres.length === 0) {
        alert ("No hay amigos para sortear, agrege al menos uno primero");
        //cambia el "h2"
        titulo.innerText = "Por favor ingrese un número primero"
        //establece el tiempo de retorno
        setTimeout(() => {
            titulo.innerText = textoOriginalh2;
        }, 2000);
     }
     //generar un indice random
     let randomizarIndice = Math.floor(Math.random() * listaDeNombres.length);
     //obtener el nombre randomizado.
     let amigoSorteado = listaDeNombres[randomizarIndice];
     //mostremos el resultado
     let resultado = document.getElementById("resultado")
     resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
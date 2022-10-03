const frutas = ["laranja", "limão", "uva"];

// exercicio 1
const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

// exercicio 2 e 3

function registraFruta() {
    const input = document.getElementById("fruta");
    const fruta4 = document.getElementById("fruta-4");
    console.log(fruta.value)
    fruta4.innerHTML = input.value
}

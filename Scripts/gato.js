'use strict'

var limpiar = document.getElementById("limpiar")
limpiar.addEventListener("click", () => {
    
    document.getElementById("a1").innerHTML = ""
    document.getElementById("a2").innerHTML = ""
    document.getElementById("a3").innerHTML = ""
    document.getElementById("b1").innerHTML = ""
    document.getElementById("b2").innerHTML = ""
    document.getElementById("b3").innerHTML = ""
    document.getElementById("c1").innerHTML = ""
    document.getElementById("c2").innerHTML = ""
    document.getElementById("c3").innerHTML = ""
})

mandarId(this)

function mandarId(element){
    console.log(element)
    obtenerId(element)
}

var turno = 0
function obtenerId(id){

    var simbolo = ["X", "O"]
    var asignar = document.getElementById(id)

    if(turno == 0){
        asignar.innerHTML = simbolo[1]
        turno = 1
    }else{
        asignar.innerHTML = simbolo[0]
        turno = 0
    }
}
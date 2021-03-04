'use strict'

mandarId(this)

function mandarId(element){
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
    console.log(turno)
}
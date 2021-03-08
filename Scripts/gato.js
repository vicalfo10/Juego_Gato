'use strict'
var simboloGanador = ""
var Ganados = [0, 0, 0]
var turno = 1
var resultado = false
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var botonX = document.getElementById("contadorX")
var botonO = document.getElementById("contadorO")
var botonE = document.getElementById("empate")

var limpiar = document.getElementById("limpiar")
limpiar.addEventListener("click", () => {
    limpiarBtn()
})

function limpiarBtn(){
    a1.innerHTML = ""
    a2.innerHTML = ""
    a3.innerHTML = ""
    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    c1.innerHTML = ""
    c2.innerHTML = ""
    c3.innerHTML = ""
    simboloGanador = ""
    resultado = false
    turno = 1
}

mandarId(this)

function mandarId(element){
    obtenerId(element)
}

function obtenerId(id){

    let simbolo = ["X", "O"]
    let asignar = document.getElementById(id)

    if(turno == 0){
        asignar.innerHTML = simbolo[1]
        turno = 1
    }else{
        asignar.innerHTML = simbolo[0]
        turno = 0
    }
    validaGanador(asignar.innerHTML)
}

function validaGanador(valor){
    if(a1.innerHTML == valor && a2.innerHTML == valor && a3.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(b1.innerHTML == valor && b2.innerHTML == valor && b3.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(c1.innerHTML == valor && c2.innerHTML == valor && c3.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(a1.innerHTML == valor && b2.innerHTML == valor && c3.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(a3.innerHTML == valor && b2.innerHTML == valor && c1.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(a1.innerHTML == valor && b1.innerHTML == valor && c1.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(a2.innerHTML == valor && b2.innerHTML == valor && c2.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(a3.innerHTML == valor && b3.innerHTML == valor && c3.innerHTML == valor){
        resultado = true
        simboloGanador = valor
    }else if(a1.innerHTML != "" && a2.innerHTML != "" && a3.innerHTML != "" && b1.innerHTML != "" && b2.innerHTML != "" && b3.innerHTML != "" && c1.innerHTML != "" && c2.innerHTML != "" && c3.innerHTML != ""){
        resultado = false
        simboloGanador = "E"
    }

    if(simboloGanador == "X"){
        Ganados[0] += 1
        botonX.innerHTML = "X: " + Ganados[0]
    }else if(simboloGanador == "O"){
        Ganados[2] += 1
        botonO.innerHTML = "O: " + Ganados[2]
    }else if(simboloGanador == "E"){
        Ganados[1] += 1
        botonE.innerHTML = "E: " + Ganados[1]
    }
    muestraGanador(resultado, simboloGanador)
}

function muestraGanador(resultado, simboloGanador){
    if(resultado){
        if(simboloGanador == "X" || simboloGanador == "O"){
            swal("Buen Trabajo!", "Felicidades, Ganador: " + simboloGanador, "success");
            limpiarBtn()
        }
    }else if(simboloGanador == "E"){
        swal("No hay gandor!", "Empate en el resultado", "info");
        limpiarBtn()
    }
}

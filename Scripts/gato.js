'use strict'
var simboloGanador = ""
var Ganados = [0, 0, 0]
var turno = 1
var resultado = false
var jugador1 = document.getElementById("jugador1")
var jugador2 = document.getElementById("jugador2")
var botonX = document.getElementById("contadorX")
var botonO = document.getElementById("contadorO")
var botonE = document.getElementById("empate")
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")

var reiniciar = document.getElementById("reiniciar")
reiniciar.addEventListener("click", () => {
    reiniciarBtn()
})

var limpiar = document.getElementById("limpiar")
limpiar.addEventListener("click", () => {
    limpiarBtn()
})

function reiniciarBtn(){
    jugador1.disabled = false
    jugador2.disabled = false
    jugador1.value = ""
    jugador2.value = ""
    botonX.innerHTML = "X: 0"
    botonE.innerHTML = "E: 0"
    botonO.innerHTML = "O: 0"
    limpiarBtn()
}

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

    if(asignar.innerHTML == ""){
        if(jugador1.value == ""){
            swal("Se requiere un jugador válido", "Jugador #1 no puede estar vacío", "warning")
        }else if(jugador2.value == ""){
            swal("Se requiere un jugador válido", "Jugador #2 no puede estar vacío", "warning")
        }else{
            jugador1.disabled = true
            jugador2.disabled = true
            if(turno == 0){
                asignar.innerHTML = simbolo[1]
                turno = 1
            }else{
                asignar.innerHTML = simbolo[0]
                turno = 0
            }
            validaGanador(asignar.innerHTML) 
        }
    }
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
        if(simboloGanador == "X"){
            swal("Buen Trabajo!", "Felicidades, Ganador es: " + jugador1.value, "success");
            
        }else{
            swal("Buen Trabajo!", "Felicidades, Ganador es: " + jugador2.value, "success");
        }
        limpiarBtn()
    }else if(simboloGanador == "E"){
        swal("No hay gandor!", "Empate en el resultado", "info");
        limpiarBtn()
    }
}

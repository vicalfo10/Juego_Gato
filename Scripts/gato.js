'use strict'

load()

function load(){

    var simboloX = "X"
    var simboloO = "O"
    var formulario = document.getElementById("formulario")
    var a1 = document.getElementById("a1")
    var b2 = document.getElementById("b2")
    var a3 = document.getElementById("a3")
    var limpiar = document.getElementById("limpiar")

    var botones = document.getElementsByTagName("button")
    
    for(var i = 0; i <= botones.length; i++){
        if(botones[i] == a1){
            console.log("hola a todos")
        }

    }
    
    /*a1.addEventListener("click", () => {
        
        a1.innerHTML = simboloX
        b2.innerHTML = simboloO
    })

    limpiar.addEventListener("click", () => {
        
        a1.innerHTML = ""
        b2.innerHTML = ""
    })*/
}
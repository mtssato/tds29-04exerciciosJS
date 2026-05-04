function somar(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var res = document.getElementById("res")
    res.textContent = numero1 + numero2
}

function dividir(){
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respDiv")

    if(n4 !==0){
        resp.textContent = (n3 / n4)
    }else{
        resp.textContent = "Não se divide por 0"
    }
}

function mult(){
    var n1 = document.getElementById ("n5").valueAsNumber
    var n1 = document.getElementById ("n6").valueAsNumber
    var resp = document.getElementById ("respMult")
    resp.textContent = n1 * n2
}

function sub(){
    var n1 = document.getElementById ("n7").valueAsNumber
    var n1 = document.getElementById ("n8").valueAsNumber
    var resp = document.getElementById ("respSub")
    resp.textContent = n1 - n2
}
    

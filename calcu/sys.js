var operationSpace = document.querySelector("#operation")
var totalSpace = document.querySelector("#tot")

operationSpace.setAttribute("readonly",true)
totalSpace.setAttribute("readonly",true)

document.querySelector("#add").addEventListener("click", function(){
    operationSpace.value = "+";    
})
document.querySelector("#sub").addEventListener("click", function (){
    operationSpace.value = "-";
})

document.querySelector("#mult").addEventListener("click", function(){
    operationSpace.value = "X";
})

document.querySelector("#divd").addEventListener("click", function(){
    operationSpace.value = "/";
})


document.querySelector("#equals").addEventListener("click", function(){
    let num1 = parseInt(document.querySelector("#fNum").value)
    let num2 = parseInt(document.querySelector("#sNum").value)
    if (operationSpace.value == "+") {
        totalSpace.value = (num1 + num2)
    }else if (operationSpace.value == "-") {
        totalSpace.value = (num1 - num2)
    }else if (operationSpace.value == "X") {
        totalSpace.value = (num1 * num2)
    }else if (operationSpace.value == "/") {
        totalSpace.value = (num1 / num2)
    } 
})
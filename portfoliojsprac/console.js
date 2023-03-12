var add = 1 + 1;
var sub = 6 - 2;
var mon = "June";
var x = 20;
var y = 13;
var protein = "High";
let comppart = ["CPU", "Mouse", "Keyboard", "Display"];

console.log(mon + add + sub)

if (protein == "High") {
    console.log("Nag ngangaw ngaw")
} else {
    console.log("Low protein")
}

function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition (x, y))

for (let i = 0; i < comppart.length; i++) {
    console.log(comppart[i]);
}

// function clickMe() {  
//     document.getElementById("click").innerHTML = "Rasengan";
// }

// var singleClick = document.querySelector("#click").style.color
// = "blue";

// function headerColor = var singleClickdocument.querySelectorAll()

var data = document.querySelector("#click");

document.querySelector("#my-btn").addEventListener("click", function(){
    data.innerHTML = "Rasengan";
    data.style.color = "blue";
    document.querySelector("#head1").style.color = "magenta";

})

document.getElementsByTagName("table")
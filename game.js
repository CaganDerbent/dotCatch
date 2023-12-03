var playground = document.querySelector(".playground");
var button = document.getElementById("button");
var shape = document.createElement("div");
var i = 100;
var timerVar = setInterval(timer, 1000);
var totalSeconds = 0;

function timer(){
    totalSeconds = totalSeconds +1;
}


function start(){
    var x = Math.floor(Math.random() * 1840);
    var y = Math.floor(Math.random() * 810);
    shape.style.top = y+"px";
    shape.style.left = x+"px";
    shape.style.position = "absolute";
    shape.style.background = "red";
    shape.style.width = "50px";
    shape.style.height = "50px";
    shape.style.borderRadius = "50px";
    playground.append(shape);
    document.getElementById("button").disabled = "True";


    
}

var i = 0;
function dest(){
    i = i + 1;
    var z = Math.floor(Math.random() * 5);
    var x = Math.floor(Math.random() * 1840) +20;
    var y = Math.floor(Math.random() * 810) + 75;
    console.log(i)
    shape.style.position = "absolute";
    shape.style.top = y+"px";
    shape.style.left = x+"px";
    if(z == 0){
        shape.style.background = "red";
    }
    if(z == 1){
        shape.style.background = "blue";
    }
    if(z == 2){
        shape.style.background = "purple";
    }
    if(z == 3){
        shape.style.background = "yellow";
    }
    if(z == 4){
        shape.style.background = "green";
    }
    if(z == 5){
        shape.style.background = "black";
    }

}
function finish(){
    window.alert("Total: "+i+"\n"+"Time: "+totalSeconds);
    
    document.getElementById("finish").disabled = "True";
    shape.style.display = "none";

}

shape.addEventListener("click",dest)
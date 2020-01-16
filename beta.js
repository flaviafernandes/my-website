console.log("oi gente");

var mx = document.getElementById("mouseX");
var my = document.getElementById("mouseY");
console.log(mx, my);


var colorBox = document.getElementById("color-box");
var body = document.body;

document.onmousemove = function handleMouseMove(event) { 
    var clientX = event.clientX;
    var clientY = event.clientY;

    mx.innerHTML = "mouse x : " + clientX;
    my.innerHTML = "mouse y : " + clientY;

    var cx = clientX % 255;
    var cy = clientY % 255;

    colorBox.style.backgroundColor = `rgba(${clientX % 255}, ${clientY % 255}, ${3 * (clientX + clientY) % 255}, 0.3)`;
    body.style.backgroundColor = `rgba(${clientY % 255}, ${clientX % 255}, ${(clientX + clientY + 100) % 255}, 0.3)`;
}
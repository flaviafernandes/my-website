console.log("oi gente");

let mx = document.getElementById("mouseX");
let my = document.getElementById("mouseY");
console.log(mx, my);


let colorBox = document.getElementById("color-box");
let body = document.body;

document.onmousemove = function handleMouseMove(event) { 
    let clientX = event.clientX;
    let clientY = event.clientY;

    mx.innerHTML = `mouse x : ${clientX}`;
    my.innerHTML = `mouse y : ${clientY}`;

    colorBox.style.backgroundColor = `rgba(${clientX % 255}, ${clientY % 255}, ${3 * (clientX + clientY) % 255}, 0.3)`;
    body.style.backgroundColor = `rgba(${clientY % 255}, ${clientX % 255}, ${(clientX + clientY + 100) % 255}, 0.3)`;
}
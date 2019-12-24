console.log("oi gente");

let mx = document.getElementById("mouseX");
let my = document.getElementById("mouseY");
console.log(mx, my);



document.onmousemove = function handleMouseMove(event) { 
    let clientX = event.clientX;
    let clientY = event.clientY;

    mx.innerHTML = `mouse x : ${clientX}`;
    my.innerHTML = `mouse y : ${clientY}`;

}
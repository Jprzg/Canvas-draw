
window.addEventListener('load', ()=>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    //Definimos el tamaño que va a ocupar nuestro canvas
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //De esta forma podemos indicar si estamos clickando para "pintar"
    let painting = false;


    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        //Si no clickamos no va a pintar
        if(!painting) return; 
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        // Aquie indicamos donde empieza el dibujo que vamos a hacer
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        //Le volvemos a indicar para que relocalice el cursor y no junte el inicio y el fin del dibujo
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }



    //EventListeners que indican la posicion inicial de dibujo y la final usando las funciones. Tambien utiliza la funcion draw para mover mientras pintamos
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

});

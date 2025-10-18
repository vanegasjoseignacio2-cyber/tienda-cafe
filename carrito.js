document.addEventListener("DOMContentLoaded", () =>{
    const comprar = document.querySelectorAll(".comprar");
    const carrito = document.getElementById("carrito");
    const contador = document.getElementById("contador");

    let cantidad = 0;

    comprar.forEach(boton => {
        boton.addEventListener("click", () =>{
            cantidad++;
            contador.textContent = cantidad;

            carrito.classList.add("mostrar");
        });
    });
});
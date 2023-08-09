let productos = document.querySelectorAll(".item");

function ver_descripcion () {
    let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");
    caja_descripcion_DOM.innerHTML = caja_descripcion(this.id);

    let main = document.querySelector("#main");
    main.classList.add("ocultar");
}


productos.forEach((cada_item) => {
    cada_item.addEventListener("click", ver_descripcion);
})

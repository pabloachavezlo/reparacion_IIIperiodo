import { data } from "./data.js";
import { descripcion } from "./descripcion_del_producto.js";

let main_DOM = document.querySelector(".main");

data.forEach((cada_item) => {
    let docu_item = document.createElement("div");
    docu_item.className = "item";

    docu_item.innerHTML = `
        <div class="caja_img">
            <img src="${cada_item.img}" alt="">
        </div>
        <h2>${cada_item.titulo}</h2>
        <p>${cada_item.descripción}</p>
        <span>${cada_item.precio}</span>
    `;
    
    main_DOM.appendChild(docu_item);
});

let productos = document.querySelectorAll(".item");

function mostrarDescripcion(event) {
  let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");

  let index = Array.from(productos).indexOf(event.currentTarget);

  let productDescriptionHTML = descripcion(data, index);
  caja_descripcion_DOM.innerHTML = productDescriptionHTML;
}

productos.forEach((cada_elemento) => {
  cada_elemento.addEventListener("click", mostrarDescripcion);
})
import { data } from "./data.js";
import { caja_descripción } from "./descripcion_del_producto.js";

let main_DOM = document.querySelector(".main");

data.forEach((cada_item) => {
    let docu_item = document.createElement("div");
    docu_item.className = "item";

    docu_item.innerHTML = `
        <div class="caja_img">
            <img src="${cada_item.img}">
        </div>
        <h2>${cada_item.titulo}</h2>
        <p>${cada_item.descripción}</p>
        <span>${cada_item.precio}</span>
    `;
    
    main_DOM.appendChild(docu_item);
});

let productos = document.querySelectorAll(".item");
console.log(productos);

function saludar (){
    let descripción_DOM = document.querySelectorAll(".descripcion_del_producto");

    descripción_DOM.innerHTML = caja_descripción;

}

productos.forEach((cada_elemento) => {
    console.log(cada_elemento);

    cada_elemento.addEventListener("click", saludar);
})
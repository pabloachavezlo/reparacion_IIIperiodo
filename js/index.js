import { data } from "./data.js";

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
export function descripcion(data, index) {
    
  return `
    <div class="Descript">

      <div class="big-box">
        <section class="img">
          <img class="imagen" src="${data[index].img}" alt="${data[index].titulo}">
        </section>
    
        <section class="middle">
          <h1 class="titulo_principal">${data[index].titulo}</h1>
          <h2 class="descripcion">${data[index].descripción}</h2>

          <span class="lista3">
            <h5>Razones para hacerlo:</h5>
            <p>${data[index].razon}</p>
          </span>

          <div class="botones">
            <span class="precio-valor">Valor: ${data[index].precio} 💸</span>
            <button class="comprar-btn">Comprar 🛒</button>
            <button class="do_it">Hagalo usted mismo 🫵</button>
          </div>
          
        </section>
      </div>
    </div>
  `;
}

/*
    <h3 class="lista3">
      <p>Razones</p>
      ${data[index].razon}
    </h3>
*/


/*
  <ul class="lista">
    <p>Herramientas: </p>${data[index].herramientas.map((herramienta) => 
    `<li>${herramienta}</li>`).join("")}
  </ul>
  <ul class="lista2">
    <p>Pasos: </p>${data[index].pasos.map((pasos) => 
    `<li>${pasos}</li>`).join("")}
  </ul>
*/

 

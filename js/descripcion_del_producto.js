export function descripcion(data, index) {
    
  return `
    <div class="Descript">

      <div class="big-box">
        <section class="img">
          <img class="imagen" src="${data[index].img}" alt="${data[index].titulo}">
        </section>
    
        <section class="middle">
          <h1 class="titulo_principal">${data[index].titulo}</h1>
          <h2 class="descripciones">${data[index].descripción}</h2>
          <div class="precios">
            <button class="precio-valor">Q100.00</button>
            <button class="comprar-btn">Comprar</button>
            <button class="do_it">Hagalo usted mismo</button>
          </div>
          <ul class="lista">Herramientas: ${data[index].herramientas.map((herramienta) => `<li>${herramienta}</li>`).join("")}</ul>
          <ul class="lista">Pasos: ${data[index].pasos.map((pasos) => `<li>${pasos}</li>`).join("")}</ul>
        </section>
      </div>
    </div>
  `;
}


 

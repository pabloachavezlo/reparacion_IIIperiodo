function addItemToDescripcion(item) {
    const descripcion = document.querySelector('.descripcion_del_producto');

    // Crear un nuevo elemento para la descripción
    const newItem = document.createElement('div');
    newItem.innerHTML = item.innerHTML;

    // Verificar si el contenido ya existe en la descripción
    const descripcionItems = descripcion.querySelectorAll('.item');
    for (const descripcionItem of descripcionItems) {
        if (descripcionItem.innerHTML === newItem.innerHTML) {
            // Si ya existe, no se agrega nuevamente
            return;
        }
    }

    // Agregar el nuevo elemento a la descripción
    descripcion.appendChild(newItem);
}

// Obtener todos los elementos con la clase 'item'
const items = document.querySelector('.item');

// Agregar el event listener a cada elemento con la clase 'item'
items.forEach((item) => {
    item.addEventListener('click', function() {
        addItemToDescripcion(item);
    });
});

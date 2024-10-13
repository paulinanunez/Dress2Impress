// Asegúrate de que el array productos esté definido antes de llamar a esta función
function representarCardsProductos() {
    let cards = '';

    if (productos.length) {
        cards = productos.map((producto, i) => `
            <section>
                <h3>${producto.nombre}</h3>
                <img src="${producto.foto}" alt="foto de ${producto.nombre} ${producto.marca}">
                <p><b>Precio:</b> $${producto.precio}</p>
                <p><b>Marca:</b> ${producto.marca}</p>
                <p><b>Categoría:</b> ${producto.categoria}</p>
                <p><b>Detalles:</b> ${producto.detalles}</p>
                <p><b>Stock:</b> ${producto.stock}</p>
                <p><b>Envío:</b> ${producto.envio ? 'Sí' : 'No'}</p>
                <button class="add-to-cart-btn" data-index="${i}">Añadir al carrito</button>
            </section>
        `).join(''); // Unir el array en una sola cadena
    } else {
        cards = '<h2>No se encontraron productos para mostrar</h2>';
    }

    document.querySelector('.section-cards-body').innerHTML = cards;

    // Agregar eventos a los botones "Añadir al carrito"
    agregarEventosBotonesCarrito();
}

// Función de inicio
function start() {
    console.warn(document.title);
    representarCardsProductos();
}

// Asegúrate de que start se ejecute cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", start);

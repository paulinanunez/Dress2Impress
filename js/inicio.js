function representarCardsProductos() {
    var cards = '';

    if (productos.length) {
        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];
            cards += `
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
            `;
        }
    } else {
        cards += '<h2>No se encontraron productos para mostrar</h2>';
    }

    document.querySelector('.section-cards-body').innerHTML = cards;

    // Agregar eventos a los botones "Añadir al carrito"
    agregarEventosBotonesCarrito();
}

function agregarEventosBotonesCarrito() {
    // Seleccionar todos los botones de "Añadir al carrito"
    var botonesAgregar = document.getElementsByClassName('add-to-cart-btn');

    for (var i = 0; i < botonesAgregar.length; i++) {
        botonesAgregar[i].addEventListener('click', function() {
            // Obtener el índice del producto desde el atributo data-index
            var index = this.getAttribute('data-index');
            var producto = productos[index]; // Obtener el producto correspondiente

            // Llamar a la función para agregar al carrito
            agregarAlCarrito(producto);
        });
    }
}

function agregarAlCarrito(producto) {
    // Obtener el carrito desde localStorage, si no existe inicializar un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Añadir el nuevo producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mensaje de éxito o para verificar que se agregó correctamente
    console.log('Producto añadido al carrito:', producto);
    alert(`${producto.nombre} ha sido añadido al carrito.`);
}

function start() {
    console.warn(document.querySelector('title').innerText);

    representarCardsProductos();
}

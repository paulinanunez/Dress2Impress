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
                <p><b>Descripción Corta:</b> ${producto.descripcionCorta}</p>
                <p><b>Stock:</b> ${producto.stock}</p>
                <p><b>Envío:</b> ${producto.envio ? 'Sí' : 'No'}</p>
                <button class="add-to-cart-btn" data-index="${i}">Añadir al carrito</button>
            </section>
        `).join('');
    } else {
        cards = '<h2>No se encontraron productos para mostrar</h2>';
    }

    var sectionCardsBody = document.getElementsByClassName('section-cards-body')[0];
    sectionCardsBody.innerHTML = cards;

    agregarEventosBotonesCarrito();
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} ha sido añadido al carrito.`);
}

// Función para asignar eventos a los botones "Añadir al carrito"
function agregarEventosBotonesCarrito() {
    const botonesAgregar = document.getElementsByClassName('add-to-cart-btn');

    for (let i = 0; i < botonesAgregar.length; i++) {
        botonesAgregar[i].onclick = function() {
            const index = parseInt(this.getAttribute('data-index'), 10);
            const producto = productos[index];
            agregarAlCarrito(producto);
        };
    }
}

// Función de inicio
function start() {
    console.warn(document.title);
    representarCardsProductos();
}

// Cargar el carrito al inicio
window.onload = function() {
    cargarCarrito();
};

// Asegúrate de que start se ejecute cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", start);

// Función para cargar el carrito al inicio
function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    if (carrito.length === 0) {
        cartList.innerHTML = '<li>Tu carrito está vacío.</li>';
    } else {
        for (var i = 0; i < carrito.length; i++) {
            const producto = carrito[i];
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${producto.nombre}</strong> - $${producto.precio}
                <button class="eliminar-btn" data-index="${i}">Eliminar</button>
            `;
            cartList.appendChild(li);
        }
        agregarEventosEliminar();
    }
}

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

// Función para agregar eventos a los botones de eliminar
function agregarEventosEliminar() {
    const botonesEliminar = document.getElementsByClassName('eliminar-btn');
    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].onclick = function() {
            const index = parseInt(this.getAttribute('data-index'), 10);
            eliminarProducto(index);
        };
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    cargarCarrito();
}

// Evento para vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

// Función para guardar el carrito en la base de datos
function guardarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        alert("Tu carrito está vacío. No se puede guardar.");
        return;
    }

    console.log("Enviando carrito:", carrito); 

    fetch('http://localhost:5000/api/carrito', {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productos: carrito.map(p => p._id),  // Enviar solo los IDs
            total: calcularTotal(carrito), 
            usuario: "usuario_id"  // Se puede modificar según el usuario logueado
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al guardar el carrito');
        }
        return response.json();
    })
    .then(data => {
        alert("Carrito guardado con éxito");
        vaciarCarritoDePagina(); 
    })
    .catch(error => {
        console.error("Error al guardar el carrito:", error);
    });
}

// Función para calcular el total del carrito
function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => total + (producto.precio * (producto.cantidad || 1)), 0);
}

// Función para vaciar el carrito en la página
function vaciarCarritoDePagina() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '<li>Tu carrito está vacío.</li>';
}

// Asignar el evento al botón de guardar carrito
document.getElementById('guardar-carrito').addEventListener('click', guardarCarrito);

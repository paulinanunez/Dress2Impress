// Función principal que se ejecuta al cargar la página
function start() {
    console.warn(document.title);
}

// Función para cargar el carrito al inicio
window.onload = function() {
    cargarCarrito();
};

function cargarCarrito() {
    // Obtener el carrito desde localStorage o inicializar como un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartList = document.getElementById('cart-list'); // Selección del elemento donde se mostrará el carrito
    cartList.innerHTML = ''; // Limpiar contenido previo

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        cartList.innerHTML = '<li>Tu carrito está vacío.</li>'; // Mensaje de carrito vacío
    } else {
        // Iterar sobre los productos en el carrito y mostrarlos en la lista
        for (var i = 0; i < carrito.length; i++) {
            const producto = carrito[i];
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${producto.nombre}</strong> - $${producto.precio}
                <button class="eliminar-btn" data-index="${i}">Eliminar</button>
            `;
            cartList.appendChild(li);
        }
        agregarEventosEliminar(); // Agregar eventos a los botones de eliminar
    }
}

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Eliminar el producto del array
    carrito.splice(index, 1);
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Recargar la lista del carrito
    cargarCarrito();
}

// Función para agregar eventos a los botones de eliminar
function agregarEventosEliminar() {
    const botonesEliminar = document.getElementsByClassName('eliminar-btn');
    
    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].onclick = function() {
            const index = parseInt(this.getAttribute('data-index'), 10); // Obtener el índice del atributo data-index
            eliminarProducto(index); // Llamar a la función de eliminar
        };
    }
}


function vaciarCarrito() {
    localStorage.removeItem('carrito');
    cargarCarrito();
}

document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

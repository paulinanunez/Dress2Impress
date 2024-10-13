/* ------------------------------------ */
/*          variables globales          */
/* ------------------------------------ */


/* ------------------------------------ */
/*          funciones globales          */
/* ------------------------------------ */

function start() {
    console.warn( document.querySelector('title').innerText )
}
function cargarCarrito() {
    // Obtener el carrito desde localStorage o inicializar como un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    // Obtener el contenedor donde se va a mostrar la lista de productos del carrito
    const cartList = document.getElementById('cart-list')

    // Limpiar el contenido actual de la lista
    cartList.innerHTML = ''

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        cartList.innerHTML = '<li>El carrito está vacío.</li>'
    } else {
        // Iterar sobre los productos en el carrito y mostrarlos en la lista
        carrito.forEach((producto, index) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <strong>${producto.nombre}</strong> - $${producto.precio}
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            `
            cartList.appendChild(li)
        })
    }
}

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    // Eliminar el producto del array
    carrito.splice(index, 1)

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    // Recargar la lista del carrito
    cargarCarrito()
}

// Cargar el carrito cuando se carga la página
cargarCarrito()



// Función para vaciar el carrito
function vaciarCarrito() {
    // Limpiar el carrito en localStorage
    localStorage.removeItem('carrito');

    // Recargar la página para actualizar la lista
    cargarCarrito();
}

// Asignar el evento al botón "Vaciar carrito"
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

// Cargar el carrito cuando se carga la página
cargarCarrito();
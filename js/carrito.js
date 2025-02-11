// Simulering av produkter i varukorgen
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar los productos en el carrito
function mostrarCarrito() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ''; // Rensa listan innan vi fyller på

    if (carrito.length === 0) {
        cartList.innerHTML = '<li>Tu carrito está vacío.</li>';
        return;
    }

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio} 
            <input type="number" value="${producto.cantidad}" min="1" id="cantidad-${index}" />
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;

        // Lägg till event listener för att uppdatera mängden
        const inputCantidad = li.querySelector(`#cantidad-${index}`);
        inputCantidad.addEventListener('change', () => {
            const nuevaCantidad = parseInt(inputCantidad.value, 10);
            if (nuevaCantidad > 0) {
                producto.cantidad = nuevaCantidad;
                mostrarCarrito(); // Uppdatera varukorgen efter ändringen
                guardarCarrito(); // Spara ändringarna till localStorage
            } else {
                alert("La cantidad debe ser al menos 1");
                inputCantidad.value = producto.cantidad; // Återställ till ursprunglig mängd
            }
        });

        cartList.appendChild(li);
    });
}

// Eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1); // Ta bort produkten vid det indexet
    mostrarCarrito(); // Uppdatera varukorgen
    guardarCarrito(); // Spara ändringarna till localStorage
}

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener('click', () => {
    carrito = []; // Rensa varukorgen
    mostrarCarrito(); // Uppdatera varukorgen
    guardarCarrito(); // Spara ändringarna till localStorage
});

// Guardar el carrito en el localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Spara varukorgen i localStorage
}

// Agregar productos al carrito (ejemplo)
function agregarProducto(nombre, precio) {
    const producto = { nombre, precio, cantidad: 1 };
    carrito.push(producto); // Lägg till produkten i varukorgen
    mostrarCarrito(); // Uppdatera varukorgen
    guardarCarrito(); // Spara varukorgen i localStorage
}

// Mostrar carrito cuando la página se carga
mostrarCarrito();

// Función para guardar el carrito en la base de datos
function guardarCarritoEnBaseDeDatos() {
    const carritoData = {
        productos: carrito,
        total: carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    };

    fetch('http://localhost:5000/api/carrito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carritoData) // Skickar varukorgen som JSON till backend
    })
    .then(response => response.json())
    .then(data => {
        alert('Carrito guardado correctamente');
    })
    .catch(error => {
        console.error('Error al guardar el carrito:', error);
        alert('Hubo un error al guardar el carrito');
    });
}

// Lägg till en knapp för att spara varukorgen i MongoDB
document.getElementById("guardar-carrito").addEventListener('click', guardarCarritoEnBaseDeDatos);

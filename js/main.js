// Llamar a la función start cuando la ventana se carga
window.onload = start;

function start() {
    console.warn(document.title); // Puede ser útil para depurar
    representarCardsProductos(); // Llama a la función que representa los productos (asegúrate de que esté definida)
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} ha sido añadido al carrito.`);
}

// Asignar eventos a los botones "Añadir al carrito"
function agregarEventosBotonesCarrito() {
    document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            // Verifica que el producto exista antes de agregar
            if (typeof productos !== 'undefined

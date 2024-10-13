let productos = [];

function agregar(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;
    const marca = document.getElementById('marca').value;
    const categoria = document.getElementById('categoria').value;
    const detalles = document.getElementById('detalles').value;
    const foto = document.getElementById('foto').value;
    const envio = document.getElementById('envio').checked;

    const nuevoProducto = { nombre, precio, stock, marca, categoria, detalles, foto, envio };
    productos.push(nuevoProducto);
    representarTablaProductos();
}

function representarTablaProductos() {
    let filasTabla = '';

    if (productos.length) {
        filasTabla += `
            <tr>
                <th>nombre</th>
                <th>precio</th>
                <th>stock</th>
                <th>marca</th>
                <th>categoría</th>
                <th>detalles</th>
                <th>foto</th>
                <th>envío</th>
            </tr>
        `;

        for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            filasTabla += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.det

let productos = [];

function agregar(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;
    const marca = document.getElementById('marca').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion1 = document.getElementById('descripcion1').value;
    const descripcion2 = document.getElementById('descripcion2').value; // Captura la descripción larga
    const foto = document.getElementById('foto').value;
    const envio = document.getElementById('envio').checked;

    const edadDesde = parseInt(document.getElementById('edad-desde').value, 10); // Convertir a entero
    const edadHasta = parseInt(document.getElementById('edad-hasta').value, 10); // Convertir a entero

    // Comprobar si los campos de edad están vacíos
    if (isNaN(edadDesde) || isNaN(edadHasta)) {
        alert('Por favor, ingresa valores válidos para edad desde y hasta.');
        return;
    }

    const nuevoProducto = {
        nombre,
        precio,
        stock,
        marca,
        categoria,
        descripcion1,
        descripcion2, 
        foto,
        envio,
        edadDesde,
        edadHasta
    };

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
                <th>descripción corta</th>
                <th>descripción larga</th>
                <th>foto</th>
                <th>envío</th>
                <th>edad desde</th>
                <th>edad hasta</th>
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
                    <td>${producto.descripcion1}</td>
                    <td>${producto.descripcion2}</td> 
                    <td><img src="${producto.foto}" alt="${producto.nombre}" style="width: 50px; height: auto;"></td>
                    <td>${producto.envio ? 'Sí' : 'No'}</td>
                    <td>${producto.edadDesde}</td>
                    <td>${producto.edadHasta}</td>
                </tr>
            `;
        }
    } else {
        filasTabla = '<tr><td colspan="11">No hay productos agregados</td></tr>';
    }

    const tabla = document.getElementById('tabla-productos'); // Asegúrate de tener un elemento con este ID en tu HTML
    tabla.innerHTML = filasTabla;
}

var productos = [
    { nombre: 'Vestido negro', precio: 77000, stock: 44, marca: 'Lily Phellera', categoria: 'Vestidos', detalles: 'XS-S-M-L-XL', envio: true, foto: 'https://res.cloudinary.com/wolfandbadger/image/upload/s--l4hF7K42--/q_auto:eco/products/nora-strap-maxi-dress-with-open-back-in-midnight-black__66d1fb551459e0ffdf9a4f90d9bd9d69' },
    { nombre: 'Tacones plateados', precio: 64000, stock: 32, marca: 'UP2STEP', categoria: 'Zapatos', detalles: '36-40', envio: true, foto: 'https://es.up2step.com/media/catalog/product/cache/6a6d315cae86edd96c1befecf2b28a4c/s/l/sliver_sequined_wedding_2_.jpg' },
    { nombre: 'Aros de plata', precio: 84000, stock: 103, marca: 'Lilly & Rose', categoria: 'Joyas', detalles: 'Sterling silver 925', envio: true, foto: 'https://arthurgulddesign.se/wp-content/uploads/2023/02/63061.jpg' },
    { nombre: 'Collar de plata', precio: 72000, stock: 21, marca: 'Mery Satt', categoria: 'Joyas', detalles: 'Sterling silver 925', envio: true, foto: 'https://merysattjoyas.cl/wp-content/uploads/2022/09/99-3-2-341897-scaled-600x600.jpg' },
    { nombre: 'Bolso negro de cuero', precio: 93000, stock: 20, marca: 'Furla', categoria: 'Bolsos', detalles: 'Cuero italiano certificado', envio: true, foto: 'https://images.furla.com/public/edited/jpg/bags/furla-1927/mini/nero/WB00109_ARE000_1007_O6000_M1.jpg?im=Resize%3D%28375%2C375%29&format=webp&quality=high' },
];

// Función para representar la tabla de productos
function representarTablaProductos() {
    var filasTabla = '';

    if (productos.length) {
        filasTabla += `
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Detalles</th>
                <th>Foto</th>
                <th>Envío</th>
            </tr>
        `;

        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];
            filasTabla += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.detalles}</td>
                    <td><img src="${producto.foto}" alt="Foto de ${producto.nombre} ${producto.marca}"></td>
                    <td>${producto.envio ? 'Sí' : 'No'}</td>
                </tr>
            `;
        }
    } else {
        filasTabla += '<tr><td colspan="8">No se encontraron productos para mostrar</td></tr>';
    }

    document.getElementById('tabla-productos').innerHTML = filasTabla;
}

// Llama a la función para que se represente la tabla al cargar la página
representarTablaProductos();

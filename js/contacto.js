function start() {
    console.warn(document.getElementsByTagName('title')[0].innerText);
}

// Obtener el formulario por su ID
const formulario = document.getElementById('contacto-form');

// Agregar un evento de escucha para el evento 'submit'
formulario.addEventListener('submit', function(event) {
    // Prevenir el comportamiento predeterminado del formulario (recargar la página)
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mail = document.getElementById('mail').value;
    const comentarios = document.getElementById('comentarios').value;

    // Mostrar los resultados en la consola
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Email:', mail);
    console.log('Comentarios:', comentarios);

    // Aquí puedes agregar más lógica, como enviar los datos a un servidor
});


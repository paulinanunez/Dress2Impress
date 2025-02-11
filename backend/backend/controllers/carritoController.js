const Carrito = require('../models/carritoModel');

// Función para recibir y guardar el carrito
exports.guardarCarrito = (req, res) => {
  const { productos, total } = req.body; // Se espera un objeto con "productos" y "total"

  const nuevoCarrito = new Carrito({
    productos: productos,
    total: total
  });

  nuevoCarrito.save()
    .then(() => {
      console.log('Carrito guardado en la base de datos.');
      res.status(201).json({ message: 'Carrito guardado!' });
    })
    .catch((err) => {
      console.error('Error al guardar el carrito:', err);
      res.status(500).json({ error: 'No se pudo guardar el carrito' });
    });
};

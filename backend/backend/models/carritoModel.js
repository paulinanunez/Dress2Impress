const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  productos: [
    {
      nombre: { type: String, required: true },
      precio: { type: Number, required: true },
      cantidad: { type: Number, required: true },
      stock: { type: Number, required: true },
      marca: { type: String, required: true },
      categoria: { type: String, required: true },
      envio: { type: Boolean, required: true },
      foto: { type: String, required: true },
      descripcionCorta: { type: String, required: true },
      descripcionLarga: { type: String, required: true }
    }
  ],
  total: { type: Number, required: true }
});

const Carrito = mongoose.model('Carrito', carritoSchema);
module.exports = Carrito;

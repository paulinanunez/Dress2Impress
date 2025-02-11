const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  envio: {
    type: Boolean,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  descripcionCorta: {
    type: String,
    required: true
  },
  descripcionLarga: {
    type: String,
    required: true
  }
});

const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto;

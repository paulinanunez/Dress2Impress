const Producto = require("../models/productoModel");

// Función para obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos', details: error.message });
  }
};

// Función para obtener un producto por su ID
const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
  }
};

// Función para crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Error al crear el producto', details: error.message });
  }
};

// Función para actualizar un producto por ID
const actualizarProducto = async (req, res) => {
  try {
    const productoId = req.params.id;  // Hämta ID från URL-parametern

    // Logga den data som tas emot för att felsöka
    console.log('Data som tas emot för uppdatering:', req.body);

    // Uppdatera produkt i databasen
    const productoActualizado = await Producto.findByIdAndUpdate(
      productoId,      // Produktens ID som ska uppdateras
      req.body,        // Data som ska uppdateras (från request body)
      { new: true, runValidators: true } // new: true returnerar den uppdaterade produkten, runValidators: true kör valideringar
    );

    // Om produkten inte finns
    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Svara med den uppdaterade produkten
    res.json(productoActualizado);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
  }
};

// Función para eliminar un producto por ID
const eliminarProducto = async (req, res) => {
  try {
    const productoId = req.params.id;
    const deletedProduct = await Producto.findByIdAndDelete(productoId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto', details: error.message });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};

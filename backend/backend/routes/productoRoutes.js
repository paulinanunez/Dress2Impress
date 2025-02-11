const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/productoController");

// Validación para crear y actualizar productos
const validarProducto = [
  body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
  body("precio").isNumeric().withMessage("El precio debe ser un número"),
  body("stock").isInt({ min: 0 }).withMessage("El stock debe ser un número entero positivo"),
  body("marca").notEmpty().withMessage("La marca es obligatoria"),
  body("categoria").notEmpty().withMessage("La categoría es obligatoria"),
  body("descripcionCorta").notEmpty().withMessage("La descripción corta es obligatoria"),
  body("descripcionLarga").notEmpty().withMessage("La descripción larga es obligatoria"),
  body("foto").notEmpty().withMessage("La foto es obligatoria"),
  body("envio").isBoolean().withMessage("El campo de envío debe ser verdadero o falso"),
];

// Función para manejar los errores de validación
const validarErrores = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errors: errores.array() });
  }
  next();
};

// Definir las rutas CRUD
router.get("/", obtenerProductos); // Obtener todos los productos
router.get("/:id", obtenerProductoPorId); // Obtener un producto por ID
router.post("/", validarProducto, validarErrores, crearProducto); // Crear un nuevo producto
router.put("/:id", validarProducto, validarErrores, actualizarProducto); // Actualizar un producto por ID
router.delete("/:id", eliminarProducto); // Eliminar un producto por ID

module.exports = router;


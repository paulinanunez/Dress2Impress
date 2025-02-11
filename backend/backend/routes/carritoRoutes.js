const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// POST para recibir el carrito
router.post('/', carritoController.guardarCarrito);

module.exports = router;

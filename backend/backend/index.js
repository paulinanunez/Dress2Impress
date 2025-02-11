const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const carritoRoutes = require('./routes/carritoRoutes');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

// Lista de productos como ejemplo
const productos = [
    { 
        id: '67a6413d2fd94e32471f64ba', 
        nombre: 'Vestido negro', 
        precio: 77000, 
        stock: 44, 
        marca: 'Lily Phellera', 
        categoria: 'Vestidos', 
        envio: true, 
        foto: 'https://res.cloudinary.com/wolfandbadger/image/upload/s--l4hF7K42--/q_auto:eco/products/nora-strap-maxi-dress-with-open-back-in-midnight-black__66d1fb551459e0ffdf9a4f90d9bd9d69',
        descripcionCorta: 'Elegante vestido de noche en color negro.',
        descripcionLarga: 'Este vestido negro es perfecto para ocasiones especiales. Su diseño elegante lo convierte en una opción ideal para cualquier evento nocturno.'
    },
    { 
        id: '67a642142fd94e32471f64be', 
        nombre: 'Tacones plateados', 
        precio: 64000, 
        stock: 32, 
        marca: 'UP2STEP', 
        categoria: 'Zapatos', 
        envio: true, 
        foto: 'https://es.up2step.com/media/catalog/product/cache/6a6d315cae86edd96c1befecf2b28a4c/s/l/sliver_sequined_wedding_2_.jpg',
        descripcionCorta: 'Tacones brillantes perfectos para eventos especiales.',
        descripcionLarga: 'Tacones de alta calidad con brillo. Perfectos para combinar con cualquier outfit elegante.'
    },
    { 
        id: '67a642212fd94e32471f64c0', 
        nombre: 'Aros de plata', 
        precio: 84000, 
        stock: 103, 
        marca: 'Lilly & Rose', 
        categoria: 'Joyas', 
        envio: true, 
        foto: 'https://arthurgulddesign.se/wp-content/uploads/2023/02/63061.jpg',
        descripcionCorta: 'Aros elegantes de Sterling silver 925 para cualquier ocasión.',
        descripcionLarga: 'Estos aros de plata son un clásico que nunca pasa de moda. Perfectos para añadir un toque de elegancia a cualquier look.'
    },
    { 
        id: '67a6422f2fd94e32471f64c2', 
        nombre: 'Collar de plata', 
        precio: 72000, 
        stock: 21, 
        marca: 'Mery Satt', 
        categoria: 'Joyas', 
        envio: true, 
        foto: 'https://merysattjoyas.cl/wp-content/uploads/2022/09/99-3-2-341897-scaled-600x600.jpg',
        descripcionCorta: 'Collar delicado de Sterling silver 925, ideal para regalar.',
        descripcionLarga: 'Este collar delicado es perfecto para un regalo especial. Su diseño elegante lo hace adecuado para cualquier ocasión.'
    },
    { 
        id: '67a6423f2fd94e32471f64c4', 
        nombre: 'Bolso negro de cuero', 
        precio: 93000, 
        stock: 20, 
        marca: 'Furla', 
        categoria: 'Bolsos', 
        envio: true, 
        foto: 'https://images.furla.com/public/edited/jpg/bags/furla-1927/mini/nero/WB00109_ARE000_1007_O6000_M1.jpg?im=Resize%3D%28375%2C375%29&format=webp&quality=high',
        descripcionCorta: 'Bolso de cuero negro, clásico y versátil.',
        descripcionLarga: 'Un bolso de cuero negro que combina con cualquier atuendo. Su diseño atemporal lo convierte en una elección perfecta para el día a día.'
    }
];

// Ruta para obtener los productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// Rutas
app.use('/api/carrito', carritoRoutes);
app.use('/api/productos', productoRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Manejo de errores genérico
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));

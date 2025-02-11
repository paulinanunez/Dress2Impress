# Dress2Impress
Proyecto Integrador 

💫 Ecommerce de Moda 

Este proyecto es una plataforma de ecommerce para la venta de productos de moda, donde se implementa un CRUD de productos usando Node.js, Express, y MongoDB. Los productos incluyen ropa, accesorios y calzado de marcas reconocidas.

💻 Tecnologías Utilizadas

Frontend: React, Vite, React Router
Backend: Node.js, Express, MongoDB Atlas
Base de Datos: MongoDB (con Mongoose)
API Cliente: Fetch / Axios

🚀 Cómo Levantar el Proyecto

 1. Clonar el repositorio

bash
git clone https://github.com/epzylo0n/proyecto-integrador.git
cd proyecto-integrador

📦 2. Instalar dependencias

Ejecuta estos comandos en dos terminales separadas:
⚪ Backend:
bash
cd backend
npm install


⚪ Frontend:
bash
cd frontend
npm install


🔑 3. Configurar Variables de Entorno

Crea un archivo .env en la carpeta backend/ con el siguiente contenido:

env
MONGODB_URI=mongodb+srv://paulinanunez6:Dress2Impress@ecommerce.wrlvn.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce
PORT=5000


▶ 4. Ejecutar el Proyecto

⚪ Levantar el backend (desde backend/):
bash
npm start

⚪ Levantar el frontend (desde frontend/):
bash
npm run dev
Luego, accede a http://localhost:5000 en el navegador.

🌐 Rutas de la API
Método	Endpoint	Descripción
GET	/api/productos	Obtiene todos los productos
GET	/api/productos/:id	Obtiene un producto por ID
POST	/api/productos	Agrega un nuevo producto
PUT	/api/productos/:id	Actualiza un producto
DELETE	/api/productos/:id	Elimina un producto

Ejemplo de JSON para agregar un producto:
json

{
      "nombre": "Vestido negro",
      "precio": 77000,
      "stock": 44,
      "marca": "Lily Phellera",
      "categoria": "Vestidos",
      "descripcionCorta": "Elegante vestido de noche en color negro.",
      "descripcionLarga": "Este vestido negro es perfecto para ocasiones especiales. Su diseño elegante lo convierte en una opción ideal para cualquier evento 
       nocturno.",
      "foto": "https://res.cloudinary.com/wolfandbadger/image/upload/s--l4hF7K42--/q_auto:eco/products/nora-strap-maxi-dress-with-open-back-in-midnight- 
      black__66d1fb551459e0ffdf9a4f90d9bd9d69",
      "envio": true
     }


🛒 Productos Disponibles

Vestido negro
Precio: 77,000
Stock: 44
Marca: Lily Phellera
Categoría: Vestidos
Foto:
Descripción corta: Elegante vestido de noche en color negro.
Descripción larga: Este vestido negro es perfecto para ocasiones especiales. Su diseño elegante lo convierte en una opción ideal para cualquier evento nocturno.

Tacones plateados
Precio: 64,000
Stock: 32
Marca: UP2STEP
Categoría: Zapatos
Foto:
Descripción corta: Tacones brillantes perfectos para eventos especiales.
Descripción larga: Tacones de alta calidad con brillo. Perfectos para combinar con cualquier outfit elegante.

Aros de plata
Precio: 84,000
Stock: 103
Marca: Lilly & Rose
Categoría: Joyas
Foto:
Descripción corta: Aros elegantes de Sterling silver 925 para cualquier ocasión.
Descripción larga: Estos aros de plata son un clásico que nunca pasa de moda. Perfectos para añadir un toque de elegancia a cualquier look.

Collar de plata
Precio: 72,000
Stock: 21
Marca: Mery Satt
Categoría: Joyas
Foto:
Descripción corta: Collar delicado de Sterling silver 925, ideal para regalar.
Descripción larga: Este collar delicado es perfecto para un regalo especial. Su diseño elegante lo hace adecuado para cualquier ocasión.

Bolso negro de cuero
Precio: 93,000
Stock: 20
Marca: Furla
Categoría: Bolsos
Foto:
Descripción corta: Bolso de cuero negro, clásico y versátil.
Descripción larga: Un bolso de cuero negro que combina con cualquier atuendo. Su diseño atemporal lo convierte en una elección perfecta para el día a día.


📄 Notas Finales
No se sube el archivo .env al repositorio, por lo que se debe configurar manualmente.
Para instalar dependencias, recuerda usar npm install en ambas carpetas (frontend/ y backend/).
Si necesitas restablecer la base de datos, puedes eliminar los documentos manualmente desde MongoDB Atlas.

Github: 
https://github.com/paulinanunez/Dress2Impress.git

Glitch:
https://glitch.com/edit/#!/opaque-careful-opportunity?path=README.md%3A1%3A0


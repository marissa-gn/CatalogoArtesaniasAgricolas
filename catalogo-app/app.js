// app.js
const express = require('express');
const app = express();
const catalogoController = require('./controllers/catalogoController');

app.set('view engine', 'ejs');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para el catálogo
app.get('/catalogo', catalogoController.getCatalogo);

// Ruta para dudas
app.get('/dudas', catalogoController.getDudas);

// Ruta para ¿Quiénes somos?
app.get('/quienes-somos', catalogoController.getQuienesSomos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
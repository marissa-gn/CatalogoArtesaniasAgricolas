const db = require('../db');

const getCatalogoData = (searchQuery, callback) => {
  let query = `
    SELECT Adulto.Nombre, Ubicacion.LugarDeUbicacion, Producto.ArtesaniaOProducto, Producto.Descripcion
    FROM Adulto
    INNER JOIN Ubicacion ON Adulto.Id = Ubicacion.Id
    INNER JOIN Producto ON Adulto.Id = Producto.Id
  `;

  if (searchQuery) {
    query += ` WHERE Producto.ArtesaniaOProducto LIKE ? OR Adulto.Nombre LIKE ?`;
  }

  const queryParams = searchQuery ? [`%${searchQuery}%`, `%${searchQuery}%`] : [];

  db.query(query, queryParams, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

module.exports = { getCatalogoData };
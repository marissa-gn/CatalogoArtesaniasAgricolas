const catalogoModel = require('../models/catalogoModel');

const imageUrls = [
  'https://www.alfareriaraimundosanchez.com/wp-content/uploads/2023/07/jarra-vino-barro-madrid.jpg',
  'https://lajornadaestadodemexico.com/wp-content/uploads/2023/01/quexquemetl-otomi-en-el-edomex.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaa_xXn091IKFaaQDmw7tcp462KQi5cL0bA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefu64JtAz731TA9Zhq--H1r8FPe01-DEMdQ&s',
  'https://bromatoblog.es/wp-content/uploads/2018/05/Frutas-y-verduras-de-temporada-octubre-e1475247478128-640x427.jpg',
  'https://i.etsystatic.com/31422140/r/il/1572ae/5854834600/il_570xN.5854834600_tfrl.jpg',
  'https://alfarerianunez.com/wp-content/uploads/2024/07/vasijas-barro-historia-tipos.jpg',
  'https://www.adhocflores.com/wp-content/uploads/ramo-fiori-500x500.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NmNjN_Fp4gtnt7ckE-gljAVR1LWqiH8mDA&s',
  'https://www.wikiduca.com/images/easyblog_articles/1037/b2ap3_large_22beneficios-de-los-juguetes-de-madera-para-los-ninos22.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjTVJu8me8n3MMjjwIjvWA1OVAnXNu6wLeQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVR6U6BJLpdsnQRzDts6eshjBJtbtr_H77cQ&s',
  'https://i.pinimg.com/236x/d8/fe/d9/d8fed919b0b8ad1814e5d2bee7df3da1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS_KZ2v5NZhlX7aK9s0EdHLIF77gUzdVszg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3K_uUosvmGc3_l3ZyFCM3qBn2T6J3k2e1hWZywcEe-qjBGpuEsuzZwnd_6JWs5R8FGU&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_FuwwlhuZdMEGeoigLm0-9ZL_oer6JcH0g&s',
  'https://thumbs.dreamstime.com/b/placas-tradicionales-de-cer%C3%A1mica-decorativas-del-uzbek-126493627.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrsCoftGqaXXb2T3tqaoVSwMJ21eIkuVB9w&s',
  'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2023/05/tiendas-velas-flor-devenus.jpg?fit=1080%2C1080&ssl=1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwpYDYhRhFAj7Tp52v9-soXWsqpM3rtU75w&s',
  'https://i.pinimg.com/474x/77/00/53/770053d94052f5a405fae994b7028e45.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJH21zMmcQpYbD7GKuwdwf8f5WK_8hX-dmA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLREeQu3wvKoJqtJQtnRcig-OXKxROUjL-VBGOYGpgjXjdEzTM5Wkk5xpE-v2kMd8Ed20&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxNXrAW9ETA9_2Dz55341bwIgwdvQrAadVw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydoISi_sFye05Fmudi15UGsofvn6bOLtJqA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZGRtB0l9hIZNCl2fgAkQBe-NMKWZb-i_tg&s',
  'https://www.viverosamaryllis.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/9/a/9adce7e0-fdc8-4ca9-a619-fdc65d003c6c.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdK2PLlsm4qoIRzPzx9tLnTFol70RR3KwZw&s',
  'https://i.etsystatic.com/10172021/r/il/7257d1/3802856005/il_570xN.3802856005_3j86.jpg',
  'https://resources.sears.com.mx/medios-plazavip/mkt/63c031b68e98d_canasta-g-con-asa-opng.jpg?scale=500&qlty=75',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_PyUTptTN-YgQmhethoiUgdTIHQH3cY17A&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0uGG0EfEQ01TrhFclJxi9IGx8BxK5ujMhw&s'
];

const getCatalogo = (req, res) => {
  const searchQuery = req.query.search || '';

  catalogoModel.getCatalogoData(searchQuery, (data) => {
    // Asignar URLs de imágenes de ejemplo si no están en la base de datos
    const dataWithImages = data.map((item, index) => ({
      ...item,
      ImagenURL: item.ImagenURL || imageUrls[index % imageUrls.length] // Asignar una imagen de manera cíclica si no está en la base de datos
    }));

    res.render('catalogo', { data: dataWithImages, searchQuery });
  });
};

const getDudas = (req, res) => {
  res.render('dudas');
};

const getQuienesSomos = (req, res) => {
  res.render('quienes-somos');
};

module.exports = { getCatalogo, getDudas, getQuienesSomos };
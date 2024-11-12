function buscarProductos() {
    const input = document.getElementById('search').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.getAttribute('data-nombre').toLowerCase();
        if (nombre.includes(input)) {
            producto.style.display = '';
        } else {
            producto.style.display = 'none';
        }
    });
}
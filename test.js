const ProductManager = require('./ProductManager'); 

// Crear una instancia de ProductManager con un archivo de datos
const productManager = new ProductManager('products.json');

// Agregar un producto de ejemplo
const newProduct = {
    title: 'Producto de prueba',
    description: 'Este es un producto de prueba',
    price: 10.99,
    thumbnail: 'thumbnail.jpg',
    code: 'P123',
    stock: 100
};

try {
    productManager.addProduct(newProduct);
    console.log('Producto agregado con éxito');
} catch (error) {
    console.error('Error al agregar el producto:', error.message);
}

// Obtener la lista de productos
const products = productManager.getProducts();
console.log('Lista de productos:', products);

// Obtener un producto por su ID
const productId = 1; // Reemplaza con un ID válido
try {
    const productById = productManager.getProductById(productId);
    console.log('Producto encontrado por ID:', productById);
} catch (error) {
    console.error('Error al obtener el producto por ID:', error.message);
}

// Actualizar un producto
const productToUpdate = {
    title: 'Producto Actualizado'
};

try {
    productManager.updateProduct(productId, productToUpdate);
    console.log('Producto actualizado con éxito');
} catch (error) {
    console.error('Error al actualizar el producto:', error.message);
}

// Eliminar un producto
try {
    productManager.deleteProduct(productId);
    console.log('Producto eliminado con éxito');
} catch (error) {
    console.error('Error al eliminar el producto:', error.message);
}

const productos = [
    { id: "1", nombre: "iPhone 11", precio: 320, img: "../img/yerba.jpg", idCat: "2" },
    { id: "2", nombre: "iPhone 13", precio: 560, img: "../img/fideos.jpg", idCat: "2" },
    { id: "3", nombre: "iPhone 14", precio: 640, img: "../img/arroz.jpg", idCat: "3" },
    { id: "4", nombre: "Iphone 15", precio: 890, img: "../img/aceite.jpg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

//Funcion similar pero que ahora me retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una función que retorne toda la categoria. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
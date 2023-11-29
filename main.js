//Mensaje de Bienvenida
let mensajeBienvenida = "Bienvenido a la app de Stock y Facturación";
alert(mensajeBienvenida);
//Array "productos" que contiene los productos de la tienda (Objetos)
const productos = [];
let continuar = prompt("Desea comenzar con la carga de productos al stock?");
while (continuar != "no") {
    let nombre = prompt("Ingrese el nombre del nuevo producto");
    let stock = prompt("Ingrese la cantidad");
    let precioSiva = parseInt(prompt("Ingrese el precio sin IVA del nuevo producto"));
    let producto = {
        id: productos.length + 1,
        nombre,
        stock,
        precioSiva,
    };
    productos.push(producto);
    continuar = prompt("Desea continuar?");
}
//Aquí termina la carga de datos en el Array
//Aquí lista todos los objetos cargados
const verStock = prompt("Desea ver los items cargados?")
if (verStock === "si") {
    alert(JSON.stringify(productos, null, 2));
};
//Comienza la carga de items para la facturación
const carrito = [];
carritoTotal = 0;
let carritoContinuar = prompt("Desea comenzar con la carga de productos a facturar?");
while (carritoContinuar != "no") {
    const carritoId = parseInt(prompt("Ingrese el id del item"));
    for (const index of productos) {
        if (index.id === carritoId) {
            //Funcion para el calculo del IVA
            function precio(precioSiva, iva) {
                precioFinal = precioSiva + iva;
            }
            valor1 = index.precioSiva;
            valor2 = valor1 * 0.21;
            precio(valor1, valor2);
            //Finaliza el calculo de IVA
            let mensaje = `
            Id: ${index.id}
            Producto: ${index.nombre}
            Precio Final: ${precioFinal}
            `;
            alert(mensaje);
            //Genera un objeto "carritoItem" con el precio final con IVA
            let carritoItem = {
                id: index.id,
                nombre: index.nombre,
                precio: precioFinal,
            }
            index.stock--;
            productos.stock = index.stock;
            carrito.push(carritoItem);
            carritoTotal = carritoTotal + precioFinal;
        }
    }
    carritoContinuar = prompt("Desea continuar?");
}
carritoMensaje = `El total de la compra es de AR$ ${carritoTotal}`
alert("Items del carrito de compras");
alert(JSON.stringify(carrito, null, 2));
alert(carritoMensaje);
alert("Items actualizados del stock")
alert(JSON.stringify(productos, null, 2));
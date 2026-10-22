// Base de datos inicial (NO cambiar estos valores)
const DB_INICIAL = {
    menu: [
        { id: 1, nombre: "Tacos al Pastor (Orden)", precio: 110.00 },
        { id: 2, nombre: "Enchiladas Verdes", precio: 135.00 },
        { id: 3, nombre: "Guacamole con Totopos", precio: 85.00 },
        { id: 4, nombre: "Agua de Horchata (Litro)", precio: 45.00 }
    ],
    comandas: []
};

// Inicialización
if (!localStorage.getItem('restauranteDB')) {
    localStorage.setItem('restauranteDB', JSON.stringify(DB_INICIAL));
}


function obtenerMenu() {
    const db = JSON.parse(localStorage.getItem('restauranteDB'));
   return db.menu;
}


function guardarComanda(totalOrden) {
    // Implementación para guardar una nueva comanda
    const db = JSON.parse(localStorage.getItem('restauranteDB'));
    db.comandas.push({ fecha: new Date(), total: totalOrden });
    localStorage.setItem('restauranteDB', JSON.stringify(db));
}

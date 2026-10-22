let totalActual = 0;


function cargarMenu() {
    // Implementación para cargar el menú desde la base de datos y mostrarlo en el HTML
    const menu = obtenerMenu();
    const contenedor = document.getElementById('menu-container');
contenedor.innerHTML = '';

menu.forEach(function(platillo) {
    const div = document.createElement('div');
    div.className = 'platillo';
    div.innerHTML = '<strong>' + platillo.nombre + '</strong><br>$' + platillo.precio.toFixed(2);
    div.onclick = function() {
        sumarTotal(platillo.precio);
    };
    contenedor.appendChild(div);
});
}


function sumarTotal(precio) {
    // Implementación para sumar el precio del platillo al total actual y actualizar el HTML

    totalActual += precio;
    document.getElementById('total').textContent = totalActual.toFixed(2);
}


// Evento del botón enviar
document.getElementById('btn-ordenar').addEventListener('click', function() {
     // Implementación para guardar la comanda si el totalActual es mayor a 0, y mostrar un mensaje de alerta

    if (totalActual > 0) {
    guardarComanda(totalActual);
    alert("Orden enviada");
    totalActual = 0;
    document.getElementById('total').textContent = "0.00";
} else {
    alert("Agrega al menos un platillo antes de enviar la orden");
}
});


// Arranca la app inicial
cargarMenu();

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
    /**
     * Finaliza la orden y reinicia el sistema.
     * 
     * - Valida que 'totalActual' sea mayor a 0 (si es 0, no hace nada o muestra alerta).
     * - Llama a guardarComanda(totalActual).
     * - Lanza un alert("Orden enviada").
     * - Reinicia 'totalActual' a 0.
     * - Actualiza el texto del id 'total' en el HTML a "0.00".
     */
    throw new Error("Equipo: implementen la lógica del botón enviar");
});


// Arranca la app inicial
cargarMenu();

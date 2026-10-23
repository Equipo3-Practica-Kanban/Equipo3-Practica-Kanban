# Kanban (Evaluación Final)

**1. Visibilidad del Flujo**

¿Cómo les ayudó tener el tablero visual en GitHub Projects para saber en qué estaba trabajando cada miembro del equipo sin tener que preguntarse a cada rato?

**Respuesta:** El proyecto se dividió en tres áreas base de datos, lógica y diseño, y el tablero nos permitió ver de una manera rapida quién tenía cada una de las 7 tarjetas y en qué columna iba. Así, quien trabajaba en los archivos de la base de datos y el js y quien trabajaba en los estilos no tuvo que preguntar al otro por su avance. El historial de commits que era uno por tarea, con mensajes claros ayudo a que cada tarjeta movida a "Hecho" correspondía a un commit facil de identificar.

**2. Límites de Trabajo en Curso (WIP)**

¿Cuál fue el límite WIP que establecieron para la columna "Desarrollo"? ¿Sintieron que esta restricción redujo el estrés o el *multitasking* en comparación con trabajar sin reglas?

**Respuesta:** Establecimos un límite WIP de 3 tarjetas en "Desarrollo", pensado para un equipo de 3 personas. El límite nos obligó a terminar una tarea antes de jalar otra, esto se refleja en que los commits salieron uno por tarea y en orden primero `obtenerMenu`, luego `guardarComanda`, `cargarMenu`, `sumarTotal` y el envío de orden, sin tareas a medias. Con ello se redujo el multitasking y el estrés de tener varias funciones abiertas y sin probar.

**3. Gestión de Cuellos de Botella**

Durante la práctica, ¿tuvieron alguna tarea que se quedó bloqueada o estancada mucho tiempo? Si fue así, ¿cómo se organizó el equipo para ayudar a destrabarla y mantener el flujo continuo?

**Respuesta:** El cuello de botella potencial fue la dependencia entre tareas: las Tareas 3, 4 y 5 `cargarMenu`, `sumarTotal` y el botón de ordenar dependen de que `obtenerMenu()` y `guardarComanda()` Tareas 1 y 2 ya existan, y además se concentraron en una sola persona, mientras que las de diseño Tareas 6 y 7 eran independientes y se podían avanzar en paralelo. Para mantener el flujo, las tareas de base de datos se priorizaron primero para desbloquear la lógica, y el diseño se trabajó en paralelo.

**4. Mejora Continua**

Si este proyecto del restaurante continuara durante todo el semestre, ¿qué política explícita nueva agregarían a su tablero o qué cambiarían de su límite WIP para ser más eficientes?

**Respuesta:** Agregaríamos tres políticas explícitas:
1. **Definición de "Hecho"**: la tarjeta pasa a "Hecho" solo si otra persona QA la probó en el navegador sin errores en consola y con los datos de localStorage correctos.
2. **Balanceo de carga y dependencias**: marcar en cada tarjeta de qué otra depende, y repartir las tareas para que una sola persona no concentre la lógica mientras otros esperan.
3. **Límite WIP también en "Revisión"** para que el trabajo terminado no se acumule sin revisar y el cuello de botella no se mueva de Desarrollo a Revisión.

En cuanto al WIP de desarrollo, lo mantendríamos en 1 tarjeta por persona y lo ajustaríamos con base en el tiempo real que toma cada tarjeta (lead time).



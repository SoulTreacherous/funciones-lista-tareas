/*
Lista de tareas node
Inicializa un proyecto de npm.
Haz un script que permita crear una lista de tareas, cada tarea debe contener un indicador, descripción y estado (completada o no).
Deben existir las funciones para poder añadir, eliminar y completar tareas.
Se debe poder elegir que función ejecutar por consola, se puede usar readline.
Ejecuta el script usando Nodejs y comprueba que todo funcione.
*/
const readline = require('readline');

const lecturaUser = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

const tareas = [{
    indicador: 1,
    descripcion: 'trabajando',
    completada: false
}];

//Agregando tareas y descripciones ===== automaticamente status es falso.
function agregarTarea(id, description) {
    tareas.push(
        {
            indicador: id,
            descripcion: description,
            completada: false 
        })
        console.log('tarea agregada', tareas);
}

//ejemplo de uso, prueba I
/*
agregarTarea(1,'estudiar');

console.log(tareas);
*/

//eliminando tareas.
function eliminarTareas(indicador) {
    const index = tareas.findIndex(
        tarea => tarea.indicador === indicador);

    if(index !== -1){
        tareas.splice(index,1);
    }
}

//completar tareas.

function completarTareas(indicador) {
    const tarea = tareas.find(
        tarea => tarea.indicador === indicador);

        if (tarea) {
            tarea.completada = true;
        }
}

    lecturaUser.question(`¿Que accion desea realizar? agregar / eliminar / completar): `, (respuesta) =>{

    switch (respuesta) {
        case 'agregar':
        lecturaUser.question('ID de la tarea: ', (indicador) => {
        lecturaUser.question('descripcion de la tarea: ', (descripcion) => {
            const ID = parseInt(indicador);
            indicador = ID;
            agregarTarea(indicador,descripcion);
            
            lecturaUser.close();
        });
        });
            break;

        case 'eliminar':
            lecturaUser.question('ID de la tarea que desea eliminar: ', (indicador) => {
                eliminarTareas(indicador);
                console.log('Tarea eliminada.');
                lecturaUser.close();
            });
            break;

        case 'completar':
            lecturaUser.question('ID de la tarea completada: ', (indicador) => {
                const ID = parseInt(indicador);
                indicador = ID;
                completarTareas(indicador);
                console.log('la tarea se ha completado.', tareas);
                lecturaUser.close();
            });
            break;
    
        default:
            console.log("Accion no valida.");
            break;
    }
});
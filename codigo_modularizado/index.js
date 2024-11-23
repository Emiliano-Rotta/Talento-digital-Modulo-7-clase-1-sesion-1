const {
    getCurrentTime,
    getAllStudents,
    insertStudent,
    getStudentsByAge,
} = require('./db/queries');

(async () => {
    // Obtener la hora actual 
    await getCurrentTime();

    // Obtener todos los estudiantes
    await getAllStudents();

    // Insertar un nuevo estudiante
    await insertStudent('Emerson', 35, 'fullStack');

    // Obtener estudiantes con edad mayor a 20
    await getStudentsByAge(25);
})();

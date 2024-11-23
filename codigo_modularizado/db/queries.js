const pool = require('./config');

// Función para obtener la hora actual
const getCurrentTime = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('La hora actual es: ', res.rows[0].now);
    } catch (err) {
        console.error('Error en la consulta:', err.message);
    }
};

// Función para obtener todos los estudiantes
const getAllStudents = async () => {
    try {
        const result = await pool.query('SELECT * FROM estudiantes');
        console.log('Resultado:', result.rows);
    } catch (err) {
        console.error('Error en la consulta:', err.message);
    }
};

// Función para insertar un estudiante
const insertStudent = async (nombre, edad, curso) => {
    const query = 'INSERT INTO estudiantes (nombre, edad, curso) VALUES ($1, $2, $3)';
    const values = [nombre, edad, curso];
    try {
        await pool.query(query, values);
        console.log('Estudiante insertado correctamente');
    } catch (err) {
        console.error('Error en la consulta:', err.message);
    }
};

// Función para obtener estudiantes con edad mayor a un valor
const getStudentsByAge = async (age) => {
    const query = 'SELECT * FROM estudiantes WHERE edad > $1';
    const values = [age];
    try {
        const result = await pool.query(query, values);
        console.log('Resultado:', result.rows);
    } catch (err) {
        console.error('Error en la consulta:', err.message);
    }
};

module.exports = {
    getCurrentTime,
    getAllStudents,
    insertStudent,
    getStudentsByAge,
};

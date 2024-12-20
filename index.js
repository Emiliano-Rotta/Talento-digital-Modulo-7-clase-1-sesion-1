// mod_siete

// usuario, clave, contraseña, puerto, server, nombre de la base de datos

const { Pool } = require('pg')
require('dotenv').config()  //npm i dotenv

//variables de entorno
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// pool.query('SELECT NOW()')
//     .then(res => console.log('La hora actual es: ', res.rows[0].now))

// pool.query('SELECT * FROM estudiantes')
//     .then(result => {
//         console.log("Resultado: ", result.rows)
//     })
//     .catch(err => console.error('Error en la consulta:', err.message))
//     .finally(() => pool.end());


//------------------------------------------------------------------------------

//Ejercicio   

//Tenes tiempo, tomate un tiempo para leer este código.

// el archivo .env.example (recordá que el archivo que se lee es .env que no debe subirse a github)

// Luego que lo estudiaste, conectate a la base de datos que hicimos ayer (u otra que tengas en la computadora) muestra todos los datos en la consola.

//----------------------------------------------------------------------------------

// const query = 'INSERT INTO estudiantes (nombre, edad, curso) VALUES ($1, $2, $3)';
// const values = ['Lorena', 25, 'fullStack'];

// pool.query(query, values)
//     .then(()=>console.log('Estudiante insertado correctamente'))
//     .catch(err => console.error('Error en la consulta:', err.message))
//     .finally(() => pool.end());

//-----------------------------------------------------
const query = 'SELECT * FROM estudiantes where edad > $1'
const values = [20]
pool.query(query, values)
    .then(result => {
        console.log("Resultado: ", result.rows)
    })
    .catch(err => console.error('Error en la consulta:', err.message))
    .finally(() => pool.end());


    //----------------------------------------
    // agregar profesores que den una materia concreta y luego filtrar para mostrar esos profesores 
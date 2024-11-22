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

pool.query('SELECT NOW()')
.then(res => console.log('La hora actual es: ', res.rows[0].now))

pool.query('SELECT * FROM estudiantes')
.then(result => {
    console.log("Resultado: ", result.rows)
})
.catch(err => console.error('Error en la consulta:', err.message))
.finally(()=> pool.end());


//------------------------------------------------------------------------------

 //Ejercicio   

//Tenes tiempo, tomate un tiempo para leer este código, sobre todo de la linea 97 a la 116

// el archivo .env.example (recordá que el archivo que lee es .env que no debe subirse a github)

// Luego que lo estudiaste, conectate a la base de datos que hicimos ayer (u otra que tengas en la computadora) muestra todos los datos en la consola.
const mysql = require('mysql');

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'coordinacion',
    password: '2723',
    database: 'inventariocz9'
});

// Realizar conecxion
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        throw err;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
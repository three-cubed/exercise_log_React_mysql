const mysql = require('mysql'); 

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config({ path: './.env' });
}

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
})

initializeDB();

async function initializeDB() {
    console.log('db.js: initializing DB...');
    await db.connect((err) => {
        if (err) throw err;
    });
    try {
        db.query(`CREATE DATABASE IF NOT EXISTS exercise_log_sern;`);
    } catch (err) {
        console.log(err);
    }
    await db.changeUser({database : 'exercise_log_sern'}, function(err) {
        if (err) console.log(err) 
    });
    let newTable = "CREATE TABLE IF NOT EXISTS exercises(id int PRIMARY KEY AUTO_INCREMENT, exerciseEventTitle VARCHAR(35), exerciseDate VARCHAR(35), achievement VARCHAR(99) DEFAULT NULL, colour VARCHAR(12))";
    db.query(newTable, (err, result) => {
        if (err) throw (err);
    })
}

module.exports = {
    db: db,    
}
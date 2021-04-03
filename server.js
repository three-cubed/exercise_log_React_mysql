// Port 5005 is indicated as the proxy in /client/package.json

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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

app.get('/getExercise', async (req, res) => {
    let sql = 'SELECT * FROM exercises';
    let exerciseEvents;
    let query = await db.query(sql, (err, results) => {
        exerciseEvents = res.json(results);
    })
});

app.post('/exercisePost', (req, res) => {
    let colourToPost;
    if (req.body.colour === '') {
        colourToPost = 'grey';
    } else {
        colourToPost = req.body.colour;
    }
    let newExerciseEvent = { 
        exerciseEventTitle: req.body.exerciseEventTitle,
        exerciseDate: req.body.exerciseDate,
        achievement: req.body.achievement,
        colour: colourToPost,
    };
    let sql = 'INSERT INTO exercises SET ?'; 
    let query = db.query(sql, newExerciseEvent, (err, result) => {
        if (err) throw err;
        res.send('message from server.js: posted');
    });    
});

app.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM exercises WHERE id=${req.params.id}`; 
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    });    
});

const PORT = process.env.PORT || 5005;
app.listen(PORT);
console.log(`listening to (port) ${PORT}`);

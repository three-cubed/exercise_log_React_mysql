const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const { db } = require('../db.js');

router.get('/getExercise', async (req, res) => {
    let sql = 'SELECT * FROM exercises';
    let exerciseEvents;
    let query = await db.query(sql, (err, results) => {
        exerciseEvents = res.json(results);
    })
});

router.post('/exercisePost', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM exercises WHERE id=${req.params.id}`; 
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.end();
    });    
});

module.exports = router;

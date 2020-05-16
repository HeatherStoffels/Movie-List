const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require("./modules/pool.js");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/

// GET ROUTE
app.get('/movies', (req, res) => {
    console.log('request received in get');
  
    const sqlText = `SELECT * FROM movies`;
    pool.query(sqlText)
      .then((response) => {
       
        res.send(response.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); 
      })
  })


// POST ROUTE



//PUT ROUTE



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
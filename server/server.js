const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const pool = require("./modules/pool.js");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/

// GET ROUTE
app.get("/movies", (req, res) => {
  console.log("request received in get");

  const sqlText = `SELECT * FROM movies ORDER BY title ASC`;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
// PUT route for description
app.put("/movies/:id", (req, res) => {
  console.log("in put server");
  let descriptionId = req.params.id;
  let sqlText = `UPDATE movies SET title = $1, description=$2 WHERE id=$3`;
  pool
    .query(sqlText, [
      req.body.data.title,
      req.body.data.description,
      descriptionId,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// GET GENRE

app.get("/movies/:id", (req, res) => {
  console.log("request received in genre");
  let id = req.params.id;
  const sqlText = `SELECT name FROM movies 
    JOIN junction_movies_genres ON movies.id=junction_movies_genres.movie_id
    JOIN genres ON junction_movies_genres.genre_id=genres.id
    WHERE movies.id = $1;`;
  console.log(id);
  pool
    .query(sqlText, [id])
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log("Listening on port: ", port);
});

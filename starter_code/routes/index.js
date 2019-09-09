const express = require('express');
const Movie = require('../models/Movie')
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* GET all the movies */
router.get('/movies', (req, res, next) => {

  Movie.find().then(movies => {

    res.render('movies', {
      moviesList: movies
    });
  })
});

router.get('/movies/:movieId', (req, res) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId).then(movie => {
    res.render('movieDetails', {
      movie: movie
    });
  });
});

module.exports = router;
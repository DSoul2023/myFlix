const express = require('express');
    morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
  {
    movie:'Man of Steel',
    director:'Zach Snyder',
    genre:'Sci-Fi, Action, Adventure'
  },
  {
    movie:'Zach Snyder\'s Justice League',
    director:'Zach Snyder',
    genre:'Sci-Fi, Action, Adventure'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to the movie cache!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

//USE requests
app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('There is an error!');
  });  

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
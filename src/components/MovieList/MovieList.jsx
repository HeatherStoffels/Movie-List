import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'


class MovieList extends Component {
  // Renders the list of movies
  render() {
    return (
        // will need a .map
      <div className="App">
        <p>Movie List</p>
        <MovieItem />
      </div>
    );
  }
}

export default MovieList;
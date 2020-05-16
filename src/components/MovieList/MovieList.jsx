import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
import { connect } from "react-redux";


class MovieList extends Component {
  // Renders the list of movies
  render() {
    return (
        // will need a .map
      <div className="App">
        <p>Movie List</p>
        {this.props.reduxState.movies.map((movie)=> {
        
                    return(
                        <div key={movie.id} ><MovieItem  movie={movie}/></div>
                        )
                    })}
        <MovieItem />
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(MovieList);

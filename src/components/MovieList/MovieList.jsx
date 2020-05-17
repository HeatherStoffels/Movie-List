import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
import { connect } from "react-redux";
import './MovieList.css'


class MovieList extends Component {
  // Renders the list of movies
  render() {
    return (
        // will need a .map
      <div className="MovieList">
        <header><h1>Movie List</h1></header>
        {this.props.reduxState.movies.map((movie)=> {
                    return(
                        <div key={movie.id} ><MovieItem  movie={movie}/></div>
                        )
                    })}
       
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(MovieList);

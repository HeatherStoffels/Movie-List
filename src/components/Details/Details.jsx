import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
// import MovieList from '../MovieList/MovieList'
import { connect } from "react-redux";


class Details extends Component {
  // Renders the list of movies
  render() {
      // render description and genre of movie that was clicked.
    return (
       
      <div className="details">
        
       <h1>{this.props.reduxState.getinfo.title}</h1>
       <p>{this.props.reduxState.getinfo.description}</p>
       
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Details);

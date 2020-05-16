import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
// import MovieList from '../MovieList/MovieList'
import { connect } from "react-redux";
import { HashRouter, Link } from "react-router-dom";


class Details extends Component {
  // Renders the list of movies
  render() {
      // render description and genre of movie that was clicked.
    return (
       
      <div className="details">
        <HashRouter>
       <h1>{this.props.reduxState.getinfo.title}</h1>
       <p>{this.props.reduxState.getinfo.description}</p>
       <Link to="/"><button>Home</button></Link>
       </HashRouter>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Details);

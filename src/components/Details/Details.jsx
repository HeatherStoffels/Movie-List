import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
// import MovieList from '../MovieList/MovieList'
import { connect } from "react-redux";
import { HashRouter, Link } from "react-router-dom";
import Edit from "../Edit/Edit"


class Details extends Component {
  // Renders the list of movies
  render() {

    // map through genres.map
      // render description and genre of movie that was clicked.
    return (
       
      <div className="details">
        <HashRouter>
       <h1>{this.props.reduxState.getinfo.title}</h1>
       <p>{this.props.reduxState.getinfo.description}</p>
       <h1>Genres: {this.props.reduxState.genre}</h1>
                     { 
          this.props.reduxState.genres.map( genre =>  
            <div key={genre.id}>{genre.name}</div>) 
        }

       
       <Link to="/"><button>Home</button></Link>
       <Link to="/edit"><button>Edit Details</button></Link>
       </HashRouter>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Details);

import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieItem extends Component {
  // Renders individual movies
  render() {
      const {movie} = this.props;
      console.log("im movieItem", movie);
    return (
      <div className="App">
          <h1>{this.props.movie.title}</h1>
      <img src={this.props.movie.poster}/>
      <p>{this.props.movie.description}</p>
      </div>
    );
  }
}


const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(MovieItem);


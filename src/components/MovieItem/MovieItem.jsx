import React, { Component } from 'react';


class MovieItem extends Component {
  // Renders individual movies
  render() {
    return (
      <div className="App">
        <p>Movie Item</p>
        <h1>{JSON.stringify(this.props.reduxState)}</h1>
      </div>
    );
  }
}

export default MovieItem;
import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Link } from "react-router-dom";

class MovieItem extends Component {
  // Renders individual movies

  posterClicked = () => {
    console.log("poster clicked", this.props.movie.id);
    this.props.dispatch({type: "posterClicked", payload: this.props.movie })
    this.props.dispatch({type: "getGenre", payload: this.props.movie.id })
    // send a dispatch with type: "posterClicked" and payload: this.props.movie.id
    // send request to the database with genres

  };
  render() {
    const { movie } = this.props;
    //   console.log("im movieItem", movie);
    return (
      <div className="App">
        <HashRouter>
          <h1>{this.props.movie.title}</h1>
          <Link to="/details">
            <img
              onClick={this.posterClicked}
              src={this.props.movie.poster}
            />
          </Link>
          {/* <p>{this.props.movie.description}</p> */}
        </HashRouter>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(MovieItem);

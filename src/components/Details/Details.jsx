import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Details.css"

class Details extends Component {
  render() {
    // map through genres.map
    // render description and genre of movie that was clicked.
    return (
      <div className="details">
        <HashRouter>
          <h1>{this.props.reduxState.getinfo.title}</h1>
          <p>{this.props.reduxState.getinfo.description}</p>
          <h1>Genres: {this.props.reduxState.genre}</h1>
          {this.props.reduxState.genres.map((genre) => (
            <div key={genre.id}>{genre.name}</div>
          ))}
          <Link to="/">
            <Button>Home</Button>{" "}
          </Link>
          <Link to="/edit">
            <Button>Edit Details</Button>
          </Link>
        </HashRouter>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Details);

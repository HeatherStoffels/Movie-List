import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Link } from "react-router-dom";
import "./MovieItem.css";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

class MovieItem extends Component {
  // Renders individual movies

  posterClicked = () => {
    console.log("poster clicked", this.props.movie.id);
    this.props.dispatch({ type: "posterClicked", payload: this.props.movie });
    this.props.dispatch({ type: "getGenre", payload: this.props.movie.id });
    // send a dispatch with type: "posterClicked" and payload: this.props.movie.id
    // send request to the database with genres
  };
  render() {
    return (
      <div className="MovieItem">
        <HashRouter>
          <Card className="card">
            <CardBody>
              <CardTitle>{this.props.movie.title}</CardTitle>
            </CardBody>
            <Link to="/details">
              <CardImg
                top
                width="100%"
                style={{ width: "50%", height: "30%" }}
                src={this.props.movie.poster}
                alt={this.props.movie.description}
                onClick={this.posterClicked}
              />{" "}
            </Link>
          </Card>
        </HashRouter>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(MovieItem);

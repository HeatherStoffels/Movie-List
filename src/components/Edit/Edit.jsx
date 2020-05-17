import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import "./Edit.css";

class Edit extends Component {
  // info to send to the database as PUT request
  state = {
    description: this.props.reduxState.movies.description,
    title: this.props.reduxState.movies.title,
    id: this.props.reduxState.getinfo.id,
  };
  //handleChange function to capture inputs for description
  handleChange = (event, property) => {
    console.log("in handlechange for description");
    if (property === "description")
      this.setState({
        [property]: event.target.value,
      });
  };
  // handlechangeTwo captures inputs for title
  handleChangeTwo = (event, property) => {
    console.log("in handlechange for title");
    if (property === "title")
      this.setState({
        [property]: event.target.value,
      });
  };
  // send updated description to database
  updateDescription = () => {
    console.log("in update description", this.state.description);
    this.props.dispatch({ type: "description", payload: this.state });
    this.props.dispatch({ type: "posterClicked", payload: this.state });
  };
  render() {
    // render description and genre of movie that was clicked.
    return (
      <div className="details">
        <HashRouter>
          <header>
            <Link to="/details">
              <Button id="editButton" outline color="success">
                Cancel
              </Button>
            </Link>
          </header>
          <input
            id="editTitle"
            placeholder="Edit Movie Title"
            onChange={(event) => this.handleChangeTwo(event, "title")}
          />
          <textarea
            id="editDescription"
            placeholder="Edit Description"
            onChange={(event) => this.handleChange(event, "description")}
          />
          <Link to="/details">
            <Button color="secondary" onClick={this.updateDescription}>
              Update Description
            </Button>
          </Link>
        </HashRouter>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Edit);

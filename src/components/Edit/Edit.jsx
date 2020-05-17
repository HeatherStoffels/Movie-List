import React, { Component } from 'react';
import { HashRouter, Link } from "react-router-dom";

import { connect } from "react-redux";


class Edit extends Component {
 
    state = {
        description: '',
        title: '',
        id: this.props.reduxState.getinfo.id
    
    }
    //handleChange function to capture inputs for description
    handleChange = (event, property) => {
        console.log("in handlechange for description");
        if (property === "description")
          this.setState({
            [property]: event.target.value,
          });
      };
      handleChangeTwo = (event, property) => {
        console.log("in handlechange for title");
        if (property === "title")
          this.setState({
            [property]: event.target.value,
          });
      };
    // send updated description to database
  updateDescription = ()=>{
      console.log('in update description', this.state.description)
      this.props.dispatch({ type: "description", payload: this.state});
      this.props.dispatch({ type: 'getMovies'});
  }
  render() {
      // render description and genre of movie that was clicked.
    return (
       
      <div className="details">
          <HashRouter>
       <input id="editTitle" placeholder="Edit Movie Title"  onChange={(event) => this.handleChangeTwo(event, "title")} />
       <button>Send new title</button>
       <input id="editDescription" placeholder="Edit Description"  onChange={(event) => this.handleChange(event, "description")}
        />
        <Link to="/details">
       <button onClick={this.updateDescription}>Update Description</button></Link>
      
       {/* <h1>{this.props.reduxState.getinfo.id}</h1> */}
       </HashRouter>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Edit);
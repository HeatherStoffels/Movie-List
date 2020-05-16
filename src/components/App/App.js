import React, { Component } from 'react';
import './App.css';
import MovieList from "../MovieList/MovieList";
import { HashRouter, Route} from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {

    componentDidMount(){
        console.log('component in APP', this.props);
        // get request function
        this.getMovies();

    }
    getMovies = ()=>{
        this.props.dispatch({ type: 'getMovies'});
    }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
       
              <MovieList dispatch={this.props.reduxState}/>
       
          <button onClick={this.getMovies}>click here for movies</button>
       
      </div>
    );
  }
}

// magic potion code
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
// export default App;

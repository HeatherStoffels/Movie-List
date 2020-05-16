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
          <HashRouter>
        <p>App js</p>
        
        <Route
            exact
            path="/"
            render={(props) => (
              <MovieList dispatch={this.props.reduxState}/>
            )}
            
          />
          <button onClick={this.getMovies}>click here for movies</button>
        </HashRouter>
      </div>
    );
  }
}

// magic potion code
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
// export default App;

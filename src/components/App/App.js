import React, { Component } from 'react';
import './App.css';
import MovieList from "../MovieList/MovieList";
import { HashRouter, Route, Link} from "react-router-dom";
import { connect } from "react-redux";
import Details from '../Details/Details'

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
          <Route
            exact path="/"
            render={(props) => (
                <MovieList {...props} dispatch={this.props.reduxState}/>
            )}
          />
           <Route
            path="/details"
            render={(props) => (
              <Details {...props} dispatch={this.props.dispatch} />
            )}
          />
              
       
         
          </HashRouter>
      </div>
    );
  }
}

// magic potion code
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
// export default App;

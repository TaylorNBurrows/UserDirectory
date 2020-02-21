import React, { useReducer, useRef, useState, useEffect } from "react";
import "./App.css";
import API from "./api";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Details from "./Details"
import api from "./api";

const App = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  useEffect(() => {
    API.searchTerms("basketball")
  }, [searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSearch =() => {
    API.searchTerms(searchTerm)
  }

  return (
    <Router>
      <div className="container text-center">
        <div className="navbar">
          This is a navbar
          <Link to='/' >Go Home</Link>
          <Link to='/details' >Details</Link>
      </div>

        <Switch>
  <Route path='/' exact component={ ()  => <Home searchTerm={ searchTerm } results ={ results } /> } />
          <Route path='/details' component={Details}>


        </Switch>
      </div>
    </Router>
  );
};

export default App;

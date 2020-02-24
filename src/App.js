import React, { useReducer, useRef, useState, useEffect } from "react";
import "./App.css";
import API from "./utils/api";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Search from './components/SearchBox';

const App = () => {
  return(
    <Router>
      <div className="container text-center">
        <Header />
        <Search />
        <Main />
      </div>
    </Router>
  )
}

export default App;

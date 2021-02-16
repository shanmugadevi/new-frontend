import React, { Component } from "react";
import  { Link } from "react-router-dom";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from "./components/Home";
import Add from "./components/Add";
import Contact from "./components/Contact";
import edi from "./components/edi";

export default class App extends Component {
  render() {
    return (
      
        <div>
          <h1>sample</h1>
           
          
          
          <Router>
           
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/Add" component={Add}/>
            <Route exact  path="/contact" component={Contact}/>
            <Route exact  path="/edi" component={edi}/>
             </Switch>
          <Link to="/home">  
          <button type="button">
               Home
             </button>
             </Link>
          </Router>
        </div>
      
    )
    
  }
}

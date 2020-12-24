import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
      <Router>
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/register" component={RegisterPage} />
      </Router>
  );
}

export default App;

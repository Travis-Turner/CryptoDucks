import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import ProtectedRoute from './ProtectedRoute';
import './styles/App.css';

function App() {
  const loggedIn = false;
    return (
      <Switch>
        <ProtectedRoute path="/ducks" loggedIn={loggedIn} component={Ducks} />
        <ProtectedRoute path="/my-profile" loggedIn={loggedIn} component={MyProfile} />
        <Route path="/register">
          <div className="registerContainer">
            <Register />
          </div>
        </Route>
        <Route path="/login">
          <div className="loginContainer">
            <Login />
          </div>
        </Route>
        <Route path="/">
          {loggedIn ? <Redirect to="/ducks" /> : <Redirect to="/register" />}
        </Route>
      </Switch>
    )
  }

export default App;


/*

*/

/*
  

*/

/*
  
*/
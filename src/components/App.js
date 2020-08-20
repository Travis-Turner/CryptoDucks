import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import ProtectedRoute from './ProtectedRoute';
import './styles/App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  console.log('loggedinapp', loggedIn);
  useEffect(() => {
    let jwt = localStorage.getItem('jwt');
    if (jwt){
      setLoggedIn(true);
      history.push("/ducks");
    } else {
      setLoggedIn(false);
    }
  });
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
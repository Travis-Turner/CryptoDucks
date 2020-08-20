import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import ProtectedRoute from './ProtectedRoute';
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  componentDidMount() {
    if (localStorage.getItem('jwt')){
      this.setState({loggedIn: true}, () => {
        this.props.history.push("/ducks");
      })
    }
  };
  handleLogin = () => {
    this.setState({loggedIn: true});
  }
  render(){
    return (
      <Switch>
        <ProtectedRoute path="/ducks" loggedIn={this.state.loggedIn} component={Ducks} />
        <ProtectedRoute path="/my-profile" loggedIn={this.state.loggedIn} component={MyProfile} />
        <Route path="/register">
          <div className="registerContainer">
            <Register />
          </div>
        </Route>
        <Route path="/login">
          <div className="loginContainer">
            <Login handleLogin={this.handleLogin} />
          </div>
        </Route>
      </Switch>
    )
  }
  }

export default withRouter(App);


/*

*/

/*
  

*/

/*
  
*/
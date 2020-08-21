import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import ProtectedRoute from './ProtectedRoute';
import * as duckAuth from '../duckAuth.js';
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
    this.tokenCheck = this.tokenCheck.bind(this);
  }
  componentDidMount() {
    // we'll check the token when the user returns
    this.tokenCheck();
  };
  handleLogin = () => {
    // we'll also check the token when the user logs in
    this.tokenCheck();
  }
  tokenCheck = () => {
    // if the user aleady has a token in localStorage,
    // this function will check that the user has a valid token
    if (localStorage.getItem('jwt')){
      let jwt = localStorage.getItem('jwt');
      fetch(`${duckAuth.BASE_URL}/En-crypto-ducks`, {
        headers: {
            'Authorization': `Bearer ${jwt}`,
        }
      }).then((res) => {
        if (!res.ok){
          // if there JWT token was not valid, the response is rejected
        } else {
          // the JWT token was valid, the user is verified
          res.json().then((res) => {
            this.setState({loggedIn: true}, () => {
              this.getUserData()
              this.props.history.push("/ducks");
            });
          })
        }
        
      })
    }
  }
  getUserData() {
    if (localStorage.getItem('userData')){
      this.setState({
        userData: JSON.parse(localStorage.getItem('userData'))
      }, () => {
        console.log(this.state.userData)
      })
    }
  }
  render(){
    return (
      <Switch>
        <ProtectedRoute path="/ducks" loggedIn={this.state.loggedIn} component={Ducks} />
        <ProtectedRoute path="/my-profile" loggedIn={this.state.loggedIn} userData={this.state.userData} component={MyProfile} />
        <Route path="/login">
          <div className="loginContainer">
            <Login handleLogin={this.handleLogin} />
          </div>
        </Route>
        <Route path="/register">
          <div className="registerContainer">
            <Register />
          </div>
        </Route>
        <Route>
          {this.state.loggedIn ? <Redirect to="/ducks" /> : <Redirect to="/login" />}
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
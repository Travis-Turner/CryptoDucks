import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import * as duckAuth from '../duckAuth.js';
import './styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value 
    });
  }
  handleSubmit(){
    duckAuth.authFormSubmit(this.state.email, this.state.password);
  }
  render(){
    return(
      <div className="login">
        <Logo title={'CryptoDucks'}/>
        <p className="login__welcome">
          This app contains highly sensitive information. 
          Please sign in or register to access CryptoDucks.
        </p>
        <form className="login__form">
          <label>
            Email:
          </label>
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          <label>
            Password:
          </label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        </form>
        <div className="login__button-container">
          <button onClick={this.handleSubmit} className="login__link">Log in</button>
        </div>
        <div className="login__signup">
          <p>Not a member yet?</p>
          <Link to="/register" className="signup__link">Sign up here</Link>
        </div>
      </div>
    )
  }
}

export default Login;
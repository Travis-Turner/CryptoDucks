import React, { Button } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import './styles/Register.css';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    const BASE_URL = 'https://api.nomoreparties.co';
    const register = (username, password, email) => {
      return fetch(`${BASE_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password, email})
      })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
        console.log(res);
      })
      .catch((err) => console.log(err))
    }
    if (this.state.password === this.state.confirmPassword){
      register(this.state.username, this.state.password, this.state.email);
    }
  }
  render(){
    return(
      <div className="register">
        <Logo title={'CryptoDucks'}/>
        <p className="register__welcome">
          Please register.
        </p>
        <form className="register__form">
          <label>
            Username:
          </label>
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <label>
            Email:
          </label>
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <label>
            Password:
          </label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <label>
            Confirm password:
          </label>
          <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
        </form>
        <div className="register__button-container">
          <button onClick={this.handleSubmit} className="register__link">Sign up</button>
        </div>
        <div className="register__signin">
          <p>Already a member?</p>
          <Link to="login" className="register__login-link">Log in here</Link>
        </div>
      </div>
    )
  }
}

export default Register;
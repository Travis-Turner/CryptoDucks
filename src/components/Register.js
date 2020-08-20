import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import './styles/Register.css';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
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
          <input type="text" value={this.state.username} onChange={this.handleChange} />
          <label>
            Password:
          </label>
          <input type="password" value={this.state.password} onChange={this.handleChange} />
          <label>
            Confirm password:
          </label>
          <input type="password" value={this.state.password} onChange={this.handleChange} />
          <label>
            Number of cryptoduck sightings:
          </label>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </form>
        <Link className="register__link">Sign up</Link>
        <div className="register__signin">
          <p>Already a member?</p>
          <Link className="register__login-link">Log in here</Link>
        </div>
      </div>
    )
  }
}

export default Register;
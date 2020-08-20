import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import './styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
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
            Username:
          </label>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
          <label>
            Password:
          </label>
          <input type="password" value={this.state.password} onChange={this.handleChange} />
        </form>
        <Link className="login__link">Log in</Link>
        <div className="login__signup">
          <p>Not a member yet?</p>
          <Link to="/register" className="signup__link">Sign up here</Link>
        </div>
      </div>
    )
  }
}

export default Login;
import React from 'react';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <MyProfile />
    </div>
  );
}

export default App;


/*
<div className="App">
  <Ducks />
</div>
*/

/*
  <div className="loginContainer">
      <Login />
    </div>

*/

/*
  <div className="registerContainer">
      <Register />
    </div>
*/
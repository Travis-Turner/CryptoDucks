import React from 'react';
import NavBar from './NavBar.js';
import './styles/MyProfile.css';

function MyProfile (props) {
  return (
    <>
      <NavBar />
      <div className="my-profile">
        <div className="my-profile__container">
          <div className="my-profile__header">
            <p>My Profile</p>
            <hr className="my-profile__rule"/>
          </div>
          <div className="my-profile__info">
            <div className="my-profile__user">
              <p className="my-profile__key">Username:</p>
              <p className="my-profile__value">{props.userData.username}</p>
            </div>
            <div className="my-profile__user">
              <p className="my-profile__key">Email:</p>
              <p className="my-profile__value">{props.userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile;
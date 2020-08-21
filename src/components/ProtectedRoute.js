import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn, userData, ...rest  }) => {
    return (
    <Route>
        {(props) => {
            return ( 
                loggedIn === true ? <Component userData={userData} {...props} /> : <Redirect to="./login" />
            )
        }}
    </Route>
)}

export default ProtectedRoute;
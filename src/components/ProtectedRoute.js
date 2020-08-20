import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn, ...rest  }) => {
    console.log('logged in value', loggedIn);
    return (
    <Route {...rest} render={(props) => (
        loggedIn === true
            ? <Component {...props} />
            : <Redirect to='/register' />
    )} />
)}

export default ProtectedRoute;
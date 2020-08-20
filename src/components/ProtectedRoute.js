import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn,  }) => (
    <Route  render={(props) => (
        loggedIn === true
            ? <Component {...props} />
            : <Redirect to='/register' />
    )} />
)

export default ProtectedRoute;
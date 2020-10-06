import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { VolunteerEvents } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedUserState} = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
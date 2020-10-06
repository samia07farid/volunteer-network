import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { VolunteerEvents } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const {loggedUserState} = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var {displayName, email} = result.user;
            const signedInUser = {username: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <h2>Login with</h2>
            <button onClick={handleGoogleSignIn}>Continue with google</button>
         
        </div>
    );
};

export default Login;
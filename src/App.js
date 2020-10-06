import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RegisterDetails from "./components/RegisterDetails/RegisterDetails";
import Registration from "./components/Registration/Registration";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const VolunteerEvents = createContext();

function App(props) {
  const [theme, setTheme] = useState(themes.dark);
  const [tasks, setTasks] = useState([]); 
  const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

  return (
    <VolunteerEvents.Provider 
      value={{themeState: [theme, setTheme], tasksState: [tasks, setTasks], loggedUserState: [loggedInUser, setLoggedInUser]}}>
        {props.children}
    <Router>
    <Header/>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/events">
            <Events/>
          </Route>
          <PrivateRoute path="/registration/:name/:id">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register-details/:id">
            <RegisterDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </VolunteerEvents.Provider>
  );
}

export default App;

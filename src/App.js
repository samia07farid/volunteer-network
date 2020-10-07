import React, { createContext, useState } from "react";
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
import UserTask from "./components/UserTask/UserTask";

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
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <VolunteerEvents.Provider 
      value={{themeState: [theme, setTheme], loggedUserState: [loggedInUser, setLoggedInUser]}}>
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
          <PrivateRoute path="/registration/:task">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userTask">
            <UserTask></UserTask>
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

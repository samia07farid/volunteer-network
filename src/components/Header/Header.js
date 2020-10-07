import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../logos/logo.png'
import { VolunteerEvents } from '../../App';

function Header() {
    const {themeState, loggedUserState} = useContext(VolunteerEvents);
    const [theme, setTheme] = themeState;
    const [loggedInUser, setLoggedInUser] = loggedUserState;

    return (    
        <div className="header" style={{ background: theme.background, color: theme.foreground }}>
            <nav className="nav">
                <img className="logo" src={logo} alt="" />
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/contact">Blog</Link>
                    </li>
                    <Link to="/registration"><button style={{ cursor: 'pointer' }}>Register</button></Link>
                    <Link to="/admin"><button style={{ cursor: 'pointer' }}>Admin</button></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
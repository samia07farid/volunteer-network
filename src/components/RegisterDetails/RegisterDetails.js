import React, { useContext, useEffect, useState } from 'react';
import { VolunteerEvents } from '../../App';


const RegisterDetails = () => {
    const [registeredTasks, setRegisteredTasks] = useState([]);
    const {loggedUserState, tasksState} = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    const [tasks, setTasks] = loggedUserState;

    useEffect(() => {
        fetch('http://localhost:5000/register?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setRegisteredTasks(data))
    }, [loggedInUser.email])

    return (
        <div>
            {/* <p>{tasks.name}</p> */}
            {
                registeredTasks.map(each => <li>{each.username} </li> )
            }
            
        </div>
    );
};

export default RegisterDetails;
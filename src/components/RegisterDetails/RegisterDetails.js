import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VolunteerEvents } from '../../App';


const RegisterDetails = () => {
    const { id } = useParams();
    // const [registeredTasks, setRegisteredTasks] = useState([]);
    const {loggedUserState, tasksState} = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    const [tasks, setTasks] = tasksState;
    // console.log(tasks)
    useEffect(() => {
        fetch('http://localhost:5000/events?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [loggedInUser.email, setTasks])

    const event = tasks.find(task => task._id === id.toString())
    console.log(event);

    return (
        <div>
            {/* <p>{event.name}</p> */}
            {/* <p>{
                event.length > 0 ? event.name : console.log('no name found')
                }</p> */}
            {/* {
                tasks.map(each => <li>{each.name} </li> )
            } */}
            
        </div>
    );
};

export default RegisterDetails;
import React, { useContext, useEffect, useState } from 'react';
import { VolunteerEvents } from '../../App';
import UserWork from '../UserWork/UserWork';

const UserTask = () => {
    const {loggedUserState} = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    const [userTask, setUserTask] = useState([]);

    useEffect( () => {
        fetch('https://peaceful-journey-88184.herokuapp.com/userTask?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserTask(data))
    }, [loggedInUser.email]);

    return (
        <div className="container">
            <div className="row">
                {userTask.map(taskInfo => <UserWork key={taskInfo._id} taskInfo={taskInfo}></UserWork>)}
            </div>
        </div>
    );
};

export default UserTask;
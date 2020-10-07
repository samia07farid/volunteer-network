import React, { useContext, useEffect, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import './Home.css'
import { VolunteerEvents } from '../../App';

const Home = () => {
    const {themeState} = useContext(VolunteerEvents);
    const [theme, setTheme] = themeState;
    const [tasks, setTasks] = useState([]); 
    
    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <div className="main-container" style={{ background: theme.background, color: theme.foreground }}>
            <h1 style={{textAlign: 'center'}}> I GROW BY HELPING PEOPLE IN NEED</h1>
                    <div>
                        <div className="row">
                            {
                                tasks.map(task => <Tasks key={task._id} task={task}></Tasks> )
                            }
                        </div>
                    </div>
        </div>
    );
};

export default Home;
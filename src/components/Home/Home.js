import React, { useContext } from 'react';
import Tasks from '../Tasks/Tasks';
import './Home.css'
import { VolunteerEvents } from '../../App';

const Home = () => {
    const {themeState, tasksState} = useContext(VolunteerEvents);
    const [theme, setTheme] = themeState;
    const [tasks, setTasks] = tasksState;

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
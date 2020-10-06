import React from 'react';
import { Link } from 'react-router-dom';
import './Tasks.css'
import babySit from '../../images/babySit.png'


const Tasks = ({task}) => {
    return (
        
        <div  className="col-md-3"> 
            <Link to={`/registration/${task.name}`}>
                <img src={require(`../../images/${task.pic}`)} alt=""/>
                <h4>{task.name}</h4>
            </Link>
        </div>
        
    );
};

export default Tasks;
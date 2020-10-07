import React from 'react';

const UserWork = ({taskInfo}) => {
    const handleDelete = (id) => {
        fetch(`https://peaceful-journey-88184.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json)
        .then(result => {
            // console.log('deleted successfully');
        })
    }

    return (
        <div className="col-md-6">
            <div style={{width: "200px"}}>
                <img src={require('../../images/musicLessons.png')}  alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{taskInfo.taskName}</h5>
                    <p className="card-text">{taskInfo.date}</p>
                    <button onClick={()=>handleDelete(`${taskInfo._id}`)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UserWork;
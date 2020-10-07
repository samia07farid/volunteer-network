import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { VolunteerEvents } from '../../App';
import './Registration.css';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { task } = useParams();
    const { loggedUserState } = useContext(VolunteerEvents)
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    const date = new Date();
    const isRegistered = false;

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('https://peaceful-journey-88184.herokuapp.com/addUserInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    const handleDoneRegister = () => {
        alert("Done registration! Checkout see your registration now")
    }

    return (
        <div>
            <div className="row justify-content-md-center bg-color">
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                    <div className="form-fields">
                        <h3>Register As Volunteer</h3>
                        <input name="fullName" defaultValue={loggedInUser.username}
                            className="form-input" ref={register({ required: true })} />
                        <input name="email" defaultValue={loggedInUser.email}
                            className="form-input" ref={register({ required: true })} />
                        <input type='date' name="date" defaultValue={date.toDateString('dd/MM/yyyy')}
                            className="form-input" ref={register({ required: true })} />
                        <input name="description" defaultValue="Description"
                            className="form-input" ref={register({ required: true })} />
                        <input name="taskName" defaultValue={task}
                            className="form-input" ref={register({ required: true })} />
                        <input onClick={handleDoneRegister} type="submit" className="register-btn" value="Registration" />
                        {loggedInUser.email &&
                            <Link to="/userTask"> <button className="register-btn"> see your registration </button> </Link>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
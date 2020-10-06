import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { VolunteerEvents } from '../../App';
import './Registration.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Registration = () => {
    const { name, id } = useParams();
    const { tasksState, loggedUserState } = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    const [tasks, setTasks] = tasksState;
    const taskName = tasks.find(each => each.name === name);

    const [selectedDate, setSelectedDate] = useState(
        { registeredDate: new Date()}
        );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleRegister = () => {
        const newRegister = { ...loggedInUser, ...selectedDate };
        console.log(newRegister);
        fetch('http://localhost:5000/addRegister', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(newRegister)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const history = useHistory();
    const goToRegisterDetails = (id) => {
        history.push(`/register-details/${id}`);
    }

    return (
        <div className="bg-color">
            <div className="row justify-content-md-center bg-color">
                <div className="form-container">
                    <form action="" className="col" >
                        <h4>Register as a Volunteer</h4>
                        <div className="form-fields">
                            <input type="text" defaultValue={loggedInUser.username} name="fullname" placeholder="Full Name" className="form-input" />
                            <br />
                            <input type="text" defaultValue={loggedInUser.email} name="email" placeholder="Email" className="form-input" />
                            <br />
                            <MuiPickersUtilsProvider utils={DateFnsUtils} className="date-input">
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        // label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <br />
                            <input type="text" name="description" placeholder="Description" className="form-input" />
                            <br />
                            <input type="text" name="libraryBooks" placeholder="Organize booksat the library" className="form-input"
                                value={

                                    tasks.length > 0 ? taskName.name : console.log('no name')
                                }
                            />
                            <button onClick={() => {handleRegister(); goToRegisterDetails(id);}} className="register-btn">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
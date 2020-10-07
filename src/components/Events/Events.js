import React from 'react';
import eventsInfo from '../../fakedata/eventsInfo';

const Events = () => {
    const handleAddEvents = () => {
        fetch('https://peaceful-journey-88184.herokuapp.com/addEvents', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(eventsInfo)
        })
    }
    
    return (
        <div>
            <button onClick={handleAddEvents}>Add All Events</button>
        </div>
    );
};

export default Events;
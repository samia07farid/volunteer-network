import React from 'react';
import eventsInfo from '../../fakedata/eventsInfo';

const Events = () => {
    const handleAddEvents = () => {
        fetch('http://localhost:5000/addEvents', {
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
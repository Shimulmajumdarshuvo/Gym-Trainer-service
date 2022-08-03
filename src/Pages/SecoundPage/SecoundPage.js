import React from 'react';

import './SecoundPage.css';


const SecoundPage = () => {
    return (
        <div className='intro '>
            <div className='content'>
                <h1 >
                    Build Perfect Body
                    <br />
                    With Clean Mind
                </h1>
                <br />
                <p>In each of the four weeks of this 28-day plan you will train your chest and back twice. Sound like a lot? It is! But in some plans you only hit each muscle group every seven days, which isn’t enough of a stimulus to force your body into making positive physique adaptations.</p>
                <button className='button'>Get Started</button>
            </div>
            <div>
                <img
                    className="d-block w-100 image"
                    src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwd29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    );
};

export default SecoundPage;
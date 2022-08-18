import React from 'react';
import './Plan.css';

const Plan = () => {
    return (
        <div className="PlanHead">
            <div className='container '>
                <div className='pItem'>
                    <div className='headerPlan '>
                        <h2 >OurPlan</h2>
                        <h2 >OurPlan</h2>
                    </div>
                </div>

                <div className='MainPlan'>

                    <div className="plan">
                        <h3>Basic</h3>
                        <h2>$20/Mo</h2>
                        <h4>1 Month</h4>
                        <span>Weight Lifting</span> <br />
                        <span>Yoga</span> <br />
                        <span>Cardio</span> <br />
                        <span>Training</span> <br />
                        <span>Protein Power</span> <br />

                        <button className='btns'>Get Started</button>
                    </div>
                    <div className="plan">
                        <h3>Standard</h3>
                        <h2>$50/Mo</h2>
                        <h4>3 Month</h4>
                        <span>Weight Lifting</span> <br />
                        <span>Yoga</span> <br />
                        <span>Cardio</span> <br />
                        <span>Training</span> <br />
                        <span>Protein Power</span> <br />
                        <button className='btns'>Get Started</button>
                    </div>
                    <div className="plan">
                        <h3>Primium</h3>
                        <h2>$100/Mo</h2>
                        <h4>6 Month</h4>
                        <span>Weight Lifting</span> <br />
                        <span>Yoga</span> <br />
                        <span>Cardio</span> <br />
                        <span>Training</span> <br />
                        <span>Protein Power</span> <br />
                        <button className='btns'>Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Plan;
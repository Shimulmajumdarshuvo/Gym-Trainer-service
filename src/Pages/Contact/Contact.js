import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <div className="contact">
            <div id="contact" className='container'>

                <div className='text-black  text-center'>
                    <h1 >Register Now</h1>


                </div>


                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <img className='w-100' src="https://pyjamahr.com/wp-content/uploads/2022/01/types-of-job-interview.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="card">
                            <div class="card-body">

                                <div >



                                    <form className='row' style={{ margin: " 0 25px " }}>

                                        <label>Name</label>
                                        <input type="text" name='name' className='form-control' />
                                        <label>Email</label>
                                        <input type="email" name="user_email" id="" className='form-control' />
                                        <label>Contact</label>
                                        <input type="number" name="number" id="" className='form-control' />
                                        <label>Message</label>
                                        <textarea name='message' rows='3' className='form-control'></textarea>
                                        <input type="submit" value="Register" className='form-control btn btn-primary mt-4' />

                                    </form>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaGithubSquare, FaInvision, FaSkype, FaTelegram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footerPart'>
            <div className='fSection'>

                <img src="http://html.tonatheme.com/2020/stayfitn/images/logo-footer.png" alt="" />
                <p>© 2015 STAYFIT - FITNESS & GYM COMPANY</p>

            </div>
            <div className='fSection'>
                <h4>QUICK LINKS</h4>
                <h6>Our Courses      Gym Cities</h6>
                <h6>Workouts </h6>
                <h6>Training Areas</h6>
                <h6>Coaches</h6>
            </div>
            <div className='fSection'> <h4>Contact Us</h4>
                <h6>Email : shimulmajumdar906@gmail.com</h6>
                <h6>Phone : +8801303461237</h6>
                <h6 className='py-1'>Address : Khulna , Bangladesh</h6>

                <span><FaFacebookSquare /></span>
                <span><FaGithubSquare /></span>
                <span><FaInvision /></span>
                <span><FaSkype></FaSkype></span>
                <span><FaTelegram></FaTelegram></span>
                <span><FaTwitter></FaTwitter></span>
            </div>

            <div className='fSection'>

                <img src="https://freepngimg.com/thumb/apple/58663-app-google-play-store-apple-download-hd-png-thumb.png" alt="" />
            </div>

        </div>
    );
};

export default Footer;
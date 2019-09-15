import React from 'react';
import './FirstNavbar.css';
import { FaPhone,FaMailBulk } from 'react-icons/fa';


const FirstNavbar = (props) => <div className='FirstNavbar'>
    <div className='InsideFirstNavbar'>
    <div className='FirstNavbarStart'><div className='phoneNumber'><FaPhone /> +1 456 6717</div><div className='mail'><FaMailBulk /> info@keenthemes.com</div></div>
    <div className='FirstNavbarRight'><a className='login' href='aaa'>Log In</a><a className='register'  href='aaa'>Registration</a></div>
    </div>
    </div>
export default FirstNavbar;
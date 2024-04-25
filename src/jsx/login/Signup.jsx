import React, { useState } from 'react';
import './login.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <Header />
    <div className='login-bg-box'>
      <div className='login-box-bg'>
        <h3 className='login-page-hdg'>Log In</h3>
        <form action="">
        <input
            type="text"
            placeholder='Enter your full name ...'
            className='log-input-box'
           
          />
        <input
            type="email"
            placeholder='Enter your email id ...'
            className='log-input-box'
           
          />
        
          <input
            type="password"
            placeholder='Enter your password ...'
            className='log-input-box'
          
          />
        
          <div className="text-center mt-3">
            <button className='cnt-btn-vw' type="submit">
             Sign Up
            </button>
          </div>
          <p className='new-user-fntsz'>Already have an account ? <NavLink to="/login">Log In</NavLink></p>
        </form>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;




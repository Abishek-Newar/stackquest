import React, { useState } from 'react'
import icon from "../../assets/stackoverflow.svg"
import "./auth.css"
import AboutAuth from './AboutAuth'
const Auth = () => {
  const [isSignup,setIsSignup] = useState(true);
  function handleSwitch(){
    setIsSignup(!isSignup)
  }
  return (
    <section className='auth-section'>
      {
        isSignup && <AboutAuth />
      }
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt="stack overflow" className='login-logo' /> }
        <form >
          {
            isSignup && (
              <label htmlFor="name">
            <h4>Name</h4>
            <input type="text" name='name' id='name' />
          </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>Password</h4>
            {!isSignup?<h4 style={{color: "#007ac6",fontSize: "13px"}}>forgot password?</h4>:null}
            </div>
            <input type="password" name='password' id='password' />
            {isSignup && <p style={{fontSize: "13px"}}>Password must contain at least eight <br/> characters, including at least 1 leter and<br/> 1 number.</p>}
            {
              isSignup && (
                <label htmlFor='checkbox'>
                  <input type="checkbox" id='checkbox' />
                  <p style={{ fontSize: "13px"}}>Opt-in to receive accasional,<br/> product updates, user reasearch invitions,<br/> company announcements, and digests </p>
                </label>
              )
            }
          </label>
          <button type='submit' className='auth-btn' >{isSignup? "Sign Up": "Login" }</button>
          {
            isSignup && (
              <p style={{color: "#666767", fontSize: "13px"}}>
                By clicking "Sign up", you agree to our 
                <span style={{color: "#007ac6"}}>terms of <br/> service</span>,
                <span style={{color: "#007ac6"}}>privacy policy</span> and 
                <span style={{color: "#007ac6"}}>cookie policy</span>
              </p>
            )
          }
        </form>
        <p>{isSignup? "Already have a account?": "Don't have a account?"}<button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup? "Login": "Sign Up"}</button></p>
        
      </div>
    </section>
  )
}

export default Auth
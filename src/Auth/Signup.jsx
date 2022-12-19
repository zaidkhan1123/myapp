import React, { useState } from 'react';

import olxpng from "../images/olx.png";

import "../auth/auth.css";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true)
  const submit =(e)=> {
      e.preventDefault();
  }
  return (
    <div>
      <div className="signin-fromm">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={submit}>
            <img className="mb-2" src={olxpng} width={72} height={72} />
            <h1 className="h3 mb-3 fw-normal">{isSignup ? "Please sign up" : "please sign in"}</h1>
            {isSignup &&
              <div className="form-floating mb-2">
              <input type="email" className="form-control" id="name" placeholder="name" />
              <label htmlFor="name">Name</label>
            </div>
            }
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-2">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">{ isSignup ? "Sign up" : "login"}</button>
            <button className="w-100 btn btn-lg btn-dark" onClick={()=>setIsSignup(!isSignup)}>{isSignup ? "login" : "Create account"}</button>
            
          </form>
        </main>
      </div>
    </div>
  )
}

export default Signup
import React, { useState } from 'react';



import "../Auth/Signup.css"

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
            <img className="mb-2" src={"data:image/png;base64,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"} width={72} height={72} />
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
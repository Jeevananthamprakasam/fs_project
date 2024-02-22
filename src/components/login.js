import {Link} from 'react-router-dom'
import './login.css'
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
export default function Login() {
    let [authMode, setAuthMode] = useState("signin")
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <img className="img" src="agrobee.jpg" alt="logo"></img>
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Postal code</label>
                <input
                  id="postal_code"
                  className="form-control mt-1"
                  placeholder="Enter postal code"
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone number</label>
                <input
                  id="phone_no"
                  className="form-control mt-1"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="text-center">
                <Link to="/uhome">
                <button type="submit" className="btn btn-primary m-4" style={{backgroundColor:"rgb(58,99,82)"}}>
                 User Login
                </button>
                </Link>
              </div>
              
            </div>
          </form>
        </div>
      )
    }
   
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <img className="img" src="agrobee.jpg" alt="logo"
            ></img>
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                id="full_name"
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                id="email"
                type="text"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>District</label>

              <select id="district" className="form-control mt-1">
                    <option value="Erode">Erode</option>
                    <option value="Salem">Salem</option>
                    <option value="Namakkal">Namakkal</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Postal code</label>
              <input
                name="postal_code"
                id="postal_code"
                className="form-control mt-1"
                placeholder="Postal code"
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone number</label>
              <input
                id="phone_no" 
                name="phone_no"
                className="form-control mt-1"
                placeholder="Phone number"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(58,99,82)"}}>
                Create account
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }
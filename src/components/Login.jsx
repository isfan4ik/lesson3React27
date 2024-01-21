import React, { Component } from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './actions';

export class Login extends Component {
  render() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state);

    const handleLogin = () => {
      const username = 'example';
      const password = 'password';

      if (username === 'example' && password === 'password') {
        alert('Authentication successful');
        dispatch(setAuth(true));
      } else {
        alert('Authentication failed');
        dispatch(setAuth(false));
      }
    };
  
    return (
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>     
    </div>
    )
  }
}

export default Login
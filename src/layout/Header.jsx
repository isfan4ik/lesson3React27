import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='nav'>
          <ul  className="nav d-flex justfiy-content-between">
      <li   className='nav-item'>
         <a  className='nav-link' href="/home">Home</a>
      </li>
      <li  className='nav-item'>
        <a className='nav-link' href="/about">About</a> 
      </li>
      <li  className='nav-item'>
        <a className='nav-link' href="/login">Login</a>
      </li>
    </ul>
      </div>
    )
  }
}

export default Header
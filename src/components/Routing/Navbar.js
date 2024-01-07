import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="bg-gray-300 flex justify-around p-1">
          <div>Logo</div>
          <div className="flex">
            <div className="mx-2 border-2 border-blue-900 px-1 rounded-xl hover:bg-white">
              <Link to="/">Home</Link>
            </div>
            <div className="mx-2 border-2 border-blue-900 px-1 rounded-xl hover:bg-white">
              <Link to="/post">Post</Link>
            </div>
            <div className="mx-2 border-2 border-blue-900 px-1 rounded-xl hover:bg-white">
              <Link to="/about">About us</Link>
            </div>
            <div className="mx-2 border-2 border-blue-900 px-1 rounded-xl hover:bg-white">
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
          <div className="flex">
            <div className="mx-2 border-2 border-blue-900 px-1 rounded-xl hover:bg-white">
              <Link to="/register">Register</Link>
            </div>
            <div className="mx-2 border-2 border-blue-900 px-1 rounded-xl hover:bg-white">
              <Link to="/login">LogIn</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';


export default class Register extends Component {
    constructor(props)
    {
        super(props);

    }
    render() {
        return (
            <div>
                <div className="py-16">
                    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                        <div
                            className="hidden lg:block lg:w-1/2 bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                            }}
                        ></div>
                        <div className="w-full p-8 lg:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                            <p className="text-xl text-gray-600 text-center">Registration form</p>
                            <button className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                                <div className="px-4 py-3">
                                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                                        {/* ... (unchanged SVG paths) */}
                                    </svg>
                                </div>
                                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign up with Google</h1>
                            </button>
                            <h2 className={this.props.error===1?"text-red-500 text-center":"text-green-500 text-center"}>{this.props.msg}</h2>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <button className="text-xs text-center text-gray-500 uppercase">or register with email</button>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>
                            <form onSubmit={this.props.register}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input
                                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                    type="email" name="email"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <button className="text-xs text-gray-500">Forget Password?</button>
                                </div>
                                <input
                                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                    type="password" name="password"/>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>

                                <input
                                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                    type="password" name="confirmpassword"
                                />
                            </div>
                            <div className="mt-8">
                                <input  type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 " name="submit" value="Register"/>
                            </div>
                            </form>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <Link to="/login" className="text-xs text-gray-500 uppercase">or sign in</Link>
                                <span className="border-b w-1/5 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

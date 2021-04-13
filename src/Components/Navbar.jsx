import React, { Component } from 'react';
import { state } from 'react'
import 'react-jquery-plugin';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component {

    componentDidMount() {
        window.$(function () {
            window.$(window).scroll(() => {
                if (window.$(window).scrollTop() > 10) {
                    window.$('.navbar').addClass('active');
                } else {
                    window.$('.navbar').removeClass('active');
                }
            });
        });
    }

    render() {

        return (
            <>
                <header className="header">
                    <nav className="navbar navbar-expand-sm fixed-top py-3 container">
                        <div className="container"><a href="/home" className="navbar-brand font-weight-bold">Aarogya-Card</a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                aria-controls="navbarCollapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div id="navbarCollapse" className='collapse navbar-collapse'>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a href="/" className="nav-link font-weight-bold">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/HealthCard/#about" className="nav-link font-weight-bold">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/HealthCard/#service" className="nav-link font-weight-bold">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/HealthCard/Register" className="nav-link font-weight-bold">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Healthcard/login" className="nav-link font-weight-bold">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/HealthCard/#contact" className="nav-link font-weight-bold">Contact</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}

export default Navbar;
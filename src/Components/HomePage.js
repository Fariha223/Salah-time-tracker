import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="container">
                <h1 className="heading">Welcome to the Salah Tracker App</h1>
                <h2 className="subheading">Check out our <i>exclusive features</i> down below.</h2>
                <div className="buttons">
                    <Link to="/salah-tracker">
                        <button className="home-button">Salah Tracker</button>
                    </Link>
                    <Link to="/prayer-status">
                        <button className="home-button">Prayer Status</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

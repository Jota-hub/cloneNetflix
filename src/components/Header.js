import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://ih1.redbubble.net/image.618393699.1999/flat,1000x1000,075,f.u2.jpg" alt="User" />
                </a>
            </div>
        </header>
    );
}
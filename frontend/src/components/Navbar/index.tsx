import React from 'react';
import { ReactComponent as GitHubIcone } from "assets/img/github.svg";
import "./style.css";

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/iTHYF">
                        <div className="dsmovie-contact-container">
                            <GitHubIcone />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
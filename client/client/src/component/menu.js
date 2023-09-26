import React from "react";

export function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-dark">
                <div className="container-fluid" id="reUse">
                    <a className="navbar-brand fw-bold"><span className="nav_head">Floppy</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reg_page">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    const handleSandwich = () => {
        if (document.getElementById("navbar-links").style.display == "none") {
            document.getElementById("navbar-links").style.display = "block";
        } else {
            document.getElementById("navbar-links").style.display = "none";
        }
    };


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><strong>Hayame</strong></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-3">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item px-3">
                                <Link class="nav-link active" aria-current="page" to="/about-us">About Us</Link>
                            </li>

                            <li class="nav-item px-3">
                                {JSON.parse(localStorage.getItem('isLoggedIn')) ? (
                                    <Link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                                    ) : (
                                    <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
                                )
                            }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

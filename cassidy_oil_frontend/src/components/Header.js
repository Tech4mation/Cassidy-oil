import logo3 from "../images/logo3.svg";
import $ from 'jquery';

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    return (
        <header className ="Header px-5 fixed-top">            
            <nav className="navbar py-1 navbar-expand-lg navbar-white ">
                <Link className="navbar-brand" to="/">
                    <img src={logo3} width="80"  alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3 active" id="nav-item1" >
                            <HashLink className="nav-link" to="/#home" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Home</HashLink>
                        </li>
                        <li className="nav-item me-3" id="nav-item2">
                            <HashLink className="nav-link" to="/#about-us" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>About us</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item3">
                            <HashLink className="nav-link" to="/#what-we-do" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>What We Do</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item4">
                            <Link className="nav-link" to="/Lubricants" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Lubricants</Link>
                        </li>
                        <li className="nav-item me-3 " id="nav-item5">
                            <HashLink className="nav-link" to="#footer" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Contact Us</HashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
import logo3 from "../images/logo3.svg";
import $ from 'jquery';

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

export default function Header() {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const toggleNavbar = () => {
      if (navbarToggle) $('#headerNavbar').addClass('collapse')
      else $('#headerNavbar').removeClass('collapse')

      setNavbarToggle(!navbarToggle)
    }


    return (
        <header className ="Header fixed-top">
            <nav class="navbar py-1 navbar-expand-lg bg-white " id="header-nav">
              <div class="container">
                <Link className="navbar-brand" to="/">
                  <img src={logo3} width="130"  alt="" />
                </Link>
                <button className="navbar-toggler" onClick={() => toggleNavbar()} type="button" data-bs-target="#headerNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="headerNavbar">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3 active" id="nav-item1" >
                            <a className="nav-link" href="/" >Home</a>
                    </li>
                    <li className="nav-item me-3" id="nav-item2">
                            <HashLink className="nav-link" to="/#about-us" >About us</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item3">
                            <HashLink className="nav-link" to="/#what-we-do" >What We Do</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item4">
                            <Link className="nav-link" to="/Lubricants" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Lubricants</Link>
                        </li>
                        <li className="nav-item me-3 " id="nav-item5">
                            <Link className="nav-link" to="/ContactUs" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Contact Us</Link>
                        </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>
    )
}


// onClick={(e) => {
//   $('.nav-item').removeClass('active')
//   e.target.parentElement.classList.add('active')
// }}
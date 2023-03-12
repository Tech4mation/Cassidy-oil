import React from "react";
import ScrollToTopOnMount from "../components/scrolltoview";

import { Link } from "react-router-dom";
import blackOil from "../images/blackOil.svg";
import blueOil from "../images/blueOil.svg";
import blueOil2 from "../images/blueOil2.svg";
import blueOil3 from "../images/blueOil2.svg";
import greenOil from "../images/greenOil.svg";
import greyOil from "../images/greyOil.svg";
import greyOil2 from "../images/greyOil2.svg";
import goldOil from "../images/goldOil.svg";
import redOil from "../images/redOil.svg";
import redOil2 from "../images/redOil2.svg";
import goldOil2 from "../images/goldOil2.svg";
import greenOil2 from "../images/greenOil2.svg";

import Project4 from "../components/Project4";
import News from "../components/News";
import Events from "../components/Events";
import $ from "jquery"; 

export default class Lubricants extends React.Component {
    componentDidMount() {
        $('.Header .nav-item').removeClass('active')  
        $('.Header #nav-item4').addClass('active')
    }  

    render() {
        return (
            <div className="Lubricants ">
                <ScrollToTopOnMount />
                <div className="section1 d-flex align-items-center justify-content-center">
                    <h1 className="text-white fw-bold display-3">Automotive Lubricants</h1>
                </div>
                <div className="section2 px-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link  to="/"><span>HOME</span></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">LUBRICANTS</li>
                        </ol>
                    </nav>
                    <div className="d-flex">
                        <div className="d-flex side-links flex-column mt-5 pt-5">
                            <a className="active py-2">All</a>
                            <a className="py-2">Passenger Car Motor Oil</a>
                            <a className="py-2">Heavy Duty Diesel Engine Oils / Industrial Lubricants</a>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={blueOil} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTEK PREMIUM 4T 20W-40 API SL/MA2</h6>
                                            <p class="card-text small">Premium Multigrade Okada, Kekenapep engine oil</p>
                                            <Link to="/CasstekPremium4T" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={greenOil} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTEK MOTO 4T 20W-40 API SF/CF</h6>
                                            <p class="card-text small">High Performance Multigrade Okada, Kekenapep engine oil</p>
                                            <Link to="/CasstekMoto4T" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={greyOil} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF</h6>
                                            <p class="card-text small">Super Performance Multigrade designed with deposit guard technology</p>
                                            <Link to="/CassgoldSuper" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={goldOil} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSGOLD POWER MOTOR OIL SAE40 API SF/CF</h6>
                                            <p class="card-text small">High Performance mono grade mineral engine oil</p>
                                            <Link to="/CassgoldPower" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={blackOil} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSGOLD PASENGER MOTOR OIL 20W-50 API SG/CF-4</h6>
                                            <p class="card-text small">World class mineral technology engine oil designed for superior wear protection</p>
                                            <Link to="/CassgoldPassenger" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={redOil} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF</h6>
                                            <p class="card-text small">Synthetic technology engine oil designed for superior wear protection</p>
                                            <Link to="/CassgoldAdvanced" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={goldOil2} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTURBO HD SAE40 API CF/SF </h6>
                                            <p class="card-text small">Superior performance Multigrade diesel engine oil designed with active protection </p>
                                            <Link to="/CassturboHdSae" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={greenOil2} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTURBO HD PLUS 15W40 CF-4/SG</h6>
                                            <p class="card-text small">Fleet multigrade diesel engine oil designed to provide superior performanc for trucks, buses, light commercial vehicles</p>
                                            <Link to="/CassturboHdPlus" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={redOil2} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTURBO HD ULTRA 15W40 CI-4</h6>
                                            <p class="card-text small">Long drain premium performance Multigrade diesel engine oil designed for modern heavy duty engine</p>
                                            <Link to="/CassturboHdUltra" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={blueOil2} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTURBO HD SAE40 API CF/SF </h6>
                                            <p class="card-text small">Superior performance Multigrade diesel engine oil designed with active protection </p>
                                            <Link to="/CassturboHdSae" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img loading="lazy" src={greyOil2} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTRANS DEX D2 ATF DEXRON IID</h6>
                                            <p class="card-text small">Multivehicle automatics transmission fluid and power steering fluid</p>
                                            <Link to="/CasstransDexD2" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="card border-white " >
                                        <img src={blueOil3} class="card-img-top ps-0 ms-0" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM</h6>
                                            <p class="card-text small">Multivehicle automatics transmission fluid and power steering fluid</p>
                                            <Link to="/CasstransDexH3" class="btn btn-warning text-white">See more</Link>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Project4 />
                <News />
                <Events /> */}
            </div>
        )
    }
}
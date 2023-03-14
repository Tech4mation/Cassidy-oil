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
import blueKeg from "../images/blueKeg.png";
import blackKeg from "../images/blackKeg.png";
import drum from "../images/drum.png";

import $ from "jquery"; 


const products = [
    {   title: "CASSTEK PREMIUM 4T 20W-40 API SL/MA2",
        desc: "Premium Multigrade Okada, Kekenapep engine oil",
        link: "/CasstekPremium4T",
        category: "BO",
        src: blueOil },
    {   title: "CASSTEK MOTO 4T 20W-40 API SF/CF",
        desc: "High Performance Multigrade Okada, Kekenapep engine oil",
        link: "/CasstekMoto4T",
        category: "BO",
        src: greenOil },

    {   title: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
        desc: "Super Performance Multigrade designed with deposit guard technology",
        link: "/CassgoldSuper",
        category: "PEO",
        src: greyOil },

    {   title: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
        desc: "High Performance mono grade mineral engine oil",
        link: "/CassgoldPower",
        category: "PEO",
        src: goldOil },
        
    {   title: "CASSGOLD PASENGER MOTOR OIL 20W-50 API SG/CF-4",
        desc: "World class mineral technology engine oil designed for superior wear protection",
        link: "/CassgoldPassenger",
        category: "PEO",
        src: blackOil },

    {   title: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
        desc: "Synthetic technology engine oil designed for superior wear protection",
        link: "/CassgoldAdvanced",
        category: "PEO",
        src: redOil },

    {   title: "CASSTURBO HD SAE40 API CF/SF",
        desc: "Superior performance Multigrade diesel engine oil designed with active protection ",
        link: "/CassturboHdSae",
        category: "DEO",
        src: goldOil2 },

    {   title: "CASSTURBO HD PLUS 15W40 CF-4/SG",
        desc: "Fleet multigrade diesel engine oil designed to provide superior performanc for trucks, buses, light commercial vehicles",
        link: "/CassturboHdPlus",
        category: "DEO",
        src: greenOil2 },

    {   title: "CASSTURBO HD ULTRA 15W40 CI-4",
        desc: "Long drain premium performance Multigrade diesel engine oil designed for modern heavy duty engine",
        link: "/CassturboHdUltra",
        category: "DEO",
        src: redOil2 },
    {   title: "CASSTURBO HD SAE40 API CF/SF",
        desc: "Superior performance Multigrade diesel engine oil designed with active protection ",
        link: "/CassturboHdSae",
        category: "DEO",
        src: blueOil2 },
    {   title: "CASSTRANS DEX D2 ATF DEXRON IID",
        desc: "Multivehicle automatics transmission fluid and power steering fluid",
        link: "/CasstransDexD2",
        category: "TO",
        src: greyOil2 },
    {   title: "CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM",
        desc: "Multivehicle automatics transmission fluid and power steering fluid",
        link: "/CasstransDexH3",
        category: "TO",
        src: blueOil3 },

    {   title: "CASSMAX HD SAE40 API SF/CF",
        desc: "",
        link: null,
        category: "HDEO",
        src: blueKeg },
    {   title: "CASSMAX SUPER MOTOR OIL 20W-50 API SL/CF",
        desc: "",
        link: null,
        src: blackKeg },
    {   title: "CASSMAX HD SAE40 API SF/CF  200L",
        desc: "",
        link: null,
        category: "HDEO",
        src: drum },
]

export default class Lubricants extends React.Component {
    constructor() {
        super()
        this.state = {'cat': 'all'}
    }

    componentDidMount() {
        $('.Header .nav-item').removeClass('active')  
        $('.Header #nav-item4').addClass('active')
    }  

    filter = (by) => {
        this.setState({'cat': by})
        $('.filter a').removeClass('active')
        $(`#${by}`).addClass('active')
    }

    render() {
        return (
            <div className="Lubricants">
                <ScrollToTopOnMount />
                <div className="section1 d-flex align-items-center  justify-content-center">
                    <h1 className="text-white text-center text-md-start fw-bold display-3">Automotive Lubricants</h1>
                </div>
                <div className="section2 px-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link  to="/"><span>HOME</span></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">LUBRICANTS</li>
                        </ol>
                    </nav>
                    <div className="d-flex flex-md-row flex-column">
                        <div className="d-flex side-links flex-column mt-5 pt-5 filter">
                            <a className="active py-2" id="all" onClick={() => this.filter('all')}>All</a>
                            <a className="py-2" id="BO" onClick={() => this.filter('BO')}>Bike Oils</a>
                            <a className="py-2" id="PEO" onClick={() => this.filter('PEO')}>Petrol Engine Oil</a>
                            <a className="py-2" id="DEO" onClick={() => this.filter('DEO')}>Diesel Engine Oil</a>
                            <a className="py-2" id="TO" onClick={() => this.filter('TO')}>Transmission Oil</a>
                            <a className="py-2" id="HDEO" onClick={() => this.filter('HDEO')} >Heavy Duty Diesel Engine Oils / Industrial Lubricants</a>
                        </div>
                        <div className="container">
                            <div className="row">
                                {products.map((product) => {
                                    let filter = this.state.cat
                                    if (product.category == filter || filter === 'all') 
                                    return (
                                        <div className="col-6 col-md-4 px-0 px-md-1">
                                            <div class="card border-white " >                
                                            <img loading="lazy" src={product.src} class="card-img-top ps-0 ms-0" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">{product.title}</h6>
                                                <p class="card-text small">{product.desc}</p>
                                                {(() => {if (product.link) return (
                                                    <Link to={product.link} class="btn btn-warning text-white">See more</Link>
                                                )})()}
                                            </div>
                                            </div>
                                        </div>
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* {/* <Project4 />
                <News />
                <Events /> */}
            </div>
        )
    }
}
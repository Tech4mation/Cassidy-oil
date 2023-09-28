import React from "react";
import ScrollToTopOnMount from "../components/scrolltoview";

import { Link } from "react-router-dom";
import casstekPremiumSmall from "../images/casstekPremiumSmall.png";
import casstekMotoSmall from "../images/casstekMotoSmall.png";
import cassgoldSuperSmall from "../images/cassgoldSuperSmall.png";
import cassgoldPowerSmall from "../images/cassgoldPowerSmall.png";
import cassgoldPassengerSmall from "../images/cassgoldPassengerSmall.png";
import cassgoldAdvancedSmall from "../images/cassgoldAdvancedSmall.png";
import cassturboAPISmall from "../images/cassturboAPISmall.png";
import cassturboPlusSmall from "../images/cassturboPlusSmall.png";
import cassturboUltraSmall from "../images/cassturboUltraSmall.png";
import cassturboForceSmall from "../images/cassturboForceSmall.png";
import casstransAtfSmall from "../images/casstransAtfSmall.png";
import casstransH3Small from "../images/casstransH3Small.png";
import blueGalonSmall from "../images/blueGalonSmall.png";
import blackGalonSmall from "../images/blackGalonSmall.png";
import blackCupSmall from "../images/blackCupSmall.png";
import blueCupSmall from "../images/blueCupSmall.png";

import cassgoldUltraOW30Small from "../images/cassgoldUltraOW30Small.png";
import cassgoldUltraOW40Small from "../images/cassgoldUltraOW40Small.png";
import cassgoldAdvancedFullySmall from "../images/cassgoldAdvancedFullySmall.png";
import cassgoldUltraFullySmall from "../images/cassgoldUltraFullySmall.png";

import $ from "jquery"; 


const products = [
    {   title: "CASSTEK PREMIUM 4T 20W-40 API SL/MA2",
        desc: "Premium Multigrade Okada, Kekenapep engine oil",
        link: "/CasstekPremium4T",
        category: "BO",
        src: casstekPremiumSmall },
    {   title: "CASSTEK MOTO 4T 20W-40 API SF/CF",
        desc: "High Performance Multigrade Okada, Kekenapep engine oil",
        link: "/CasstekMoto4T",
        category: "BO",
        src: casstekMotoSmall },

    {   title: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
        desc: "Super Performance Multigrade designed with deposit guard technology",
        link: "/CassgoldSuper",
        category: "PEO",
        src: cassgoldSuperSmall },

    {   title: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
        desc: "High Performance mono grade mineral engine oil",
        link: "/CassgoldPower",
        category: "PEO",
        src: cassgoldPowerSmall },
        
    {   title: "CASSGOLD PASENGER MOTOR OIL 20W-50 API SG/CF-4",
        desc: "World class mineral technology engine oil designed for superior wear protection",
        link: "/CassgoldPassenger",
        category: "PEO",
        src: cassgoldPassengerSmall },

    {   title: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
        desc: "Synthetic technology engine oil designed for superior wear protection",
        link: "/CassgoldAdvanced",
        category: "PEO",
        src: cassgoldAdvancedSmall },

    {   title: "CASSTURBO HD SAE40 API CF/SF",
        desc: "Heavy duty Mono-grade mineral engine oil",
        link: "/CassturboHdSae",
        category: "DEO",
        src: cassturboAPISmall },

    {   title: "CASSTURBO HD PLUS 15W40 CF-4/SG",
        desc: "Fleet multigrade diesel engine oil designed to provide superior performanc for trucks, buses, light commercial vehicles",
        link: "/CassturboHdPlus",
        category: "DEO",
        src: cassturboPlusSmall },

    {   title: "CASSTURBO HD ULTRA 15W40 CI-4",
        desc: "Long drain premium performance Multigrade diesel engine oil designed for modern heavy duty engine",
        link: "/CassturboHdUltra",
        category: "DEO",
        src: cassturboUltraSmall },
    {   title: "CASSTURBO HD FORCE 15W40 CH-4 ",
        desc: "Superior performance Multigrade diesel engine oil designed with active protection ",
        link: "/CassturboHdForce",
        category: "DEO",
        src: cassturboForceSmall },

    {   title: "CASSTRANS DEX D2 ATF DEXRON IID",
        desc: "Multivehicle automatics transmission fluid and power steering fluid",
        link: "/CasstransDexD2",
        category: "TO",
        src: casstransAtfSmall },
    {   title: "CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM",
        desc: "Multivehicle automatics transmission fluid and power steering fluid",
        link: "/CasstransDexH3",
        category: "TO",
        src: casstransH3Small },
    
    // new products
    {   title: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-30 API SN-CF",
        desc: "Fully synthetic technology engine oil designed for superior wear protection",
        link: "/CassgoldUltraOW30",
        category: "TO",
        src: cassgoldUltraOW30Small },
    {   title: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-40 API SN-CF",
        desc: "Fully synthetic technology engine oil designed for superior wear protection",
        link: "/CassgoldUltraOW40",
        category: "TO",
        src: cassgoldUltraOW40Small },
    {   title: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-30 API SN/CF",
        desc: "Fully synthetic technology engine oil designed for superior wear protection",
        link: "/CassgoldAdvancedFully",
        category: "TO",
        src: cassgoldAdvancedFullySmall },
    {   title: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-20 API SN-CF",
        desc: "Fully synthetic technology engine oil designed for superior wear protection",
        link: "/CassgoldUltraFully",
        category: "TO",
        src: cassgoldUltraFullySmall },
        //


    {   title: "CASSTURBO HD SAE40 API SF/CF 25L",
        desc: "",
        link: null,
        category: "HDEO",
        cStyle: "HDEO1",
        src: blueGalonSmall },
    {   title: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF 25L",
        desc: "",
        link: null,
        category: "HDEO",
        cStyle: "HDEO1",
        src: blackGalonSmall },
    {   title: "CASSMAX HD SAE40 API SF/CF  200L",
        desc: "",
        link: null,
        category: "HDEO",
        cStyle: "HDEO2",
        src: blackCupSmall },
    {   title: "CASSTURBO HD SAE40 API SF/CF 25L 200L",
        desc: "",
        link: null,
        category: "HDEO",
        cStyle: "HDEO2",
        src: blueCupSmall },

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
                <div className="section2 px-md-5 px-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link  to="/"><span>HOME</span></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">LUBRICANTS</li>
                        </ol>
                    </nav>
                    <div className="d-flex flex-md-row flex-column">
                        <div className="d-flex side-links flex-column mt-5 pt-0 pt-md-5 filter">
                            <a className="active py-2" id="all" onClick={() => this.filter('all')}>All</a>
                            <a className="py-2" id="BO" onClick={() => this.filter('BO')}>Bike Oils</a>
                            <a className="py-2" id="PEO" onClick={() => this.filter('PEO')}>Petrol Engine Oil</a>
                            <a className="py-2" id="DEO" onClick={() => this.filter('DEO')}>Diesel Engine Oil</a>
                            <a className="py-2" id="TO" onClick={() => this.filter('TO')}>Transmission Oil</a>
                            <a className="py-2" id="HDEO" onClick={() => this.filter('HDEO')} >Heavy Duty Diesel Engine Oils / Industrial Lubricants</a>
                        </div>
                        <div className="container-fluid">
                            <div className="row align-items-end">
                                {products.map((product) => {
                                    let filter = this.state.cat
                                    if (product.category == filter || filter === 'all') 
                                    return (
                                        <div className="col-6 col-md-4 px-0 px-md-1">
                                            <div class="card border-white " >
                                            {(() => {if (product.cStyle == 'HDEO1') return (
                                                        <img loading="lazy" src={product.src} className="card-img-top ps-0 ms-0 hdeo1"  alt="..." />
                                                    ) 
                                                    else if (product.cStyle == 'HDEO2') return (
                                                        <img loading="lazy" src={product.src} className="card-img-top ps-0 ms-0 hdeo2"  alt="..." />
                                                    )
                                                    else return(
                                                        <img loading="lazy" src={product.src} className="card-img-top ps-0 ms-0" alt="..." />
                                                    )
                                                    })()}
                                            
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
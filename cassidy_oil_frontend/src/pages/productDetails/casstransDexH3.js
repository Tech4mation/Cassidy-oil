import { Link } from "react-router-dom";
import sample from "../../images/casstransDexH3Sample.svg";
import pdf from "../../images/pdfIcon.svg";

import Project4 from "../../components/Project4";
import News from "../../components/News";
import Events from "../../components/Events";

import ScrollToTopOnMount from "../../components/scrolltoview";


export default function CasstransDexH3() {
    return (
        <div className="CasstekPremium4t product mt-5">
        <ScrollToTopOnMount />    
            <div className="section1 d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-bold display-3">Automotive Lubricants</h1>
            </div>
            <div className="section2 px-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link  to="/"><span>HOME</span></Link></li>
                        <li class="breadcrumb-item"><Link  to="/Lubricants"><span>LUBRICANTS</span></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">CASSTEK PREMIUM 4T 20W-40 API SL/MA2CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM</li>
                    </ol>
                </nav>
                <img src={sample} className="sample" alt="" />
                <div className="details">
                    <div className="description">
                        <h4>DESCRIPTION</h4>    
                        <p>CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM is a premium quality Automatic Transmission Fluid formulated to meet requirements of the latest generation of passenger and other cars. It is developed using high quality low viscous base oil and high-performance ATF additives. CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM provides excellent friction stability and EP characteristics ensuring safety of passenger car and heavy-duty equipment throughout its service life.</p>
                    </div>
                    <div className="performance mt-5">
                        <h4>PERFORMANCE</h4>    
                        <p>Meets the requirements of GM and Ford Dexron IIIH/ IIIM and Allison C4</p>
                    </div>
                    <div className="application mt-5">
                        <h4>APPLICATION</h4>    
                        <p>CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM is recommended to be used in the automatic transmission of most passenger cars, commercial vehicles, light trucks and public transport buses. It can also be used in most power steering systems and general-purpose hydraulic systems. OEM recommended drain interval is to be followed.</p>
                    </div>
                    <div className="benefits mt-5">
                        <h4>PRODUCT BENEFITS</h4>
                        <ul>
                            <li>Excellent low temperature fluidity which provides high performance in hydraulic system, smooth gear shift from cold start to maximum operating temperatures.</li>
                            <li>Oxidation resistance provides higher oil operating life.</li>
                            <li>Use of high-quality additives and friction modifiers ensures best gear shift feel properties.</li>
                            <li>Reduced propensity towards formation of deposits inside the gear case which improves the performance of delicate control valves.</li>
                            <li>Effective seal compatibility which reduces the chances of leaks.</li>
                        </ul>
                    </div>

                    <table className="table table-bordered table-striped table-hover w-75 mt-5">
                        <thead>
                            <tr>
                                <th>Test Parameters</th>
                                <th>Test Methods</th>
                                <th>Typical Values</th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>Appearance</td>
                                <td>Visual</td>
                                <td>Clear</td>
                            </tr>
                            <tr>
                                <td>Colour</td>
                                <td>Visual</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <td>Density at 300C (g/ml)</td>
                                <td>ASTM D 1298</td>
                                <td>870</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 400C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 1000C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Viscosity Index</td>
                                <td>ASTM D 2270</td>
                                <td>180</td>
                            </tr>
                            <tr>
                                <td>Pour Point (0C)</td>
                                <td>ASTM D 97</td>
                                <td>-40</td>
                            </tr>
                            <tr>
                                <td>Flash Point (COC) (0C)</td>
                                <td>ASTM D 93</td>
                                <td>204</td>
                            </tr>
                            <tr>
                                <td>Viscosity, Brookfield @ -400C mPa.s (cP)</td>
                                <td>ASTM D 29B3</td>
                                <td>17700</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="storage mt-5">
                        <h4>STORAGE</h4>    
                        <p>All packages should be stored under cover and should not be stored where ambient temperature exceeds 600C or freezing conditions. To avoid ingress of water and damage, drums should be stored horizontally if they are stored outside.  Follow MSDS for further instructions on storage, safe handling, and disposal of the product.</p>
                    </div>

                    <div className="d-flex align-items-center mt-5 download">
                        <img src={pdf} alt="pdf icon" width="30px" />    
                        <span className="ms-3">Click here to download PDF </span>
                    </div>                    
                </div>        

            </div>
            <Project4 />
            <News />
            <Events />
        </div>
    )
}
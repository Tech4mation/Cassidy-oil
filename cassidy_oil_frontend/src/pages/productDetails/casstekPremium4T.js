import { Link } from "react-router-dom";
import sample from "../../images/blueOilfbN.png";
import pdf from "../../images/pdfIcon.svg";

import Project4 from "../../components/Project4";
import News from "../../components/News";
import Events from "../../components/Events";

import ScrollToTopOnMount from "../../components/scrolltoview";


export default function CasstekPremium4t() {
    return (
        <div className="CasstekPremium4t product ">
        <ScrollToTopOnMount />    
            <div className="section1 d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-bold display-3">Automotive Lubricants</h1>
            </div>
            <div className="section2 px-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link  to="/"><span>HOME</span></Link></li>
                        <li class="breadcrumb-item"><Link  to="/Lubricants"><span>LUBRICANTS</span></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">CASSTEK PREMIUM 4T 20W-40 API SL/MA2</li>
                    </ol>
                </nav>
                <img loading="lazy" src={sample} className="sample" alt="" />
                <div className="details">
                    <div className="description">
                        <h4>DESCRIPTION</h4>    
                        <p>The engine in your bike risks damage all the time, when starting up, when running and even when the engine is off. CASSTEK PREMIUM 4T 20W-40 API SL/MA2 is a high performance 4 stroke Motorbike engine oil, which is engineered to protect your General Transportation and Power Bike engine and enhance its performance. By using world class additive molecule technology and high-quality base oil, CASSTEK oil clings to the engine and gearbox to provide excellent service in all operating conditions.</p>
                    </div>
                    <div className="performance mt-5">
                        <h4>PERFORMANCE</h4>    
                        <p>Meets the requirements of SAE 20W-40, API SL, JASO MA2</p>
                    </div>
                    <div className="application mt-5">
                        <h4>APPLICATION</h4>    
                        <p>CASSTEK PREMIUM 4T 20W-40 API SL/MA2 can be used in all 4-stroke motorbike engines manufactured by leading global OEMs. OEM recommended drain interval is to be followed.</p>
                    </div>
                    <div className="benefits mt-5">
                        <h4>PRODUCT BENEFITS</h4>
                        <ul>
                            <li>Enhanced protection of engine parts at the point of engine start up.</li>
                            <li>Reduced propensity of sludge deposits which ensures superior engine cleanliness during normal operation.</li>
                            <li>Reduced propensity of oil thickening and oxidation thereby reducing oil consumption under normal operating conditions.</li>
                            <li>Reduced Disc wear and Valve Train wear.</li>
                            <li>Excellent corrosion protection, even when engine is off.</li>
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
                                <td>Brown</td>
                            </tr>
                            <tr>
                                <td>Density at 300C (g/ml)</td>
                                <td>ASTM D 1298</td>
                                <td>858</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 400C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>130</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 1000C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>14.8</td>
                            </tr>
                            <tr>
                                <td>Viscosity Index</td>
                                <td>ASTM D 2270</td>
                                <td>115</td>
                            </tr>
                            <tr>
                                <td>Pour Point (0C)</td>
                                <td>ASTM D 97</td>
                                <td>-21</td>
                            </tr>
                            <tr>
                                <td>Flash Point (COC) (0C)</td>
                                <td>ASTM D 93</td>
                                <td>240</td>
                            </tr>
                            <tr>
                                <td>TBN (mg KOH/g)</td>
                                <td>ASTM D 2896B</td>
                                <td>8</td>
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
        </div>
    )
}
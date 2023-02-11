import { Link } from "react-router-dom";
import sample from "../../images/cassturboHdForceSample.svg";
import pdf from "../../images/pdfIcon.svg";

import Project4 from "../../components/Project4";
import News from "../../components/News";
import Events from "../../components/Events";

import ScrollToTopOnMount from "../../components/scrolltoview";


export default function CassturboHdForce() {
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
                        <li class="breadcrumb-item active" aria-current="page">CASSTURBO HD FORCE 15W40 CH-4</li>
                    </ol>
                </nav>
                <img loading="lazy" src={sample} className="sample" alt="" />
                <div className="details">
                    <div className="description">
                        <h4>DESCRIPTION</h4>    
                        <p>CASSTURBO HD FORCE 15W40 CH-4 is a high-performance diesel engine oil that provides protection of turbocharged and naturally aspirated diesel engines operating on and off highway conditions. This high-quality multigrade formulation is developed to provide optimal lubrication in any operating condition, temperature and operating speeds. CASSTURBO HD FORCE 15W40 CH-4 ensures engine and oil durability as it is formulated from superior quality high viscosity index base oil and superior additive technology. CASSTURBO HD FORCE 15W40 CH-4 is designed to work optimally under extreme operating loads and ensures lesser oil degradation compared to other oils.</p>
                    </div>
                    <div className="performance mt-5">
                        <h4>PERFORMANCE</h4>    
                        <p>Meets the requirements of SAE 15W-40, API CH-4</p>
                    </div>
                    <div className="application mt-5">
                        <h4>APPLICATION</h4>    
                        <p>CASSTURBO HD FORCE 15W40 CH-4 can be used in light and heavy commercial cars, Sports Utility Vehicles, Multi-Utility Vehicles, generators, and other vehicles used in truck fleet, mining, construction, quarrying, agriculture etc. that use diesel as the primary fuel source. OEM recommended oil drain interval is to be followed.</p>
                    </div>
                    <div className="benefits mt-5">
                        <h4>PRODUCT BENEFITS</h4>
                        <ul>
                            <li>Compatibility with catalytic convertors and other exhaust system parts. </li>
                            <li>Reduced maintenance and operating costs as the oil offers maximum engine protection under normal operating conditions.</li>
                            <li>Excellent Anti-Wear property that provides protection to various critical engine parts such as cylinder liner, piston rings, valves, cams etc. which increases engine life.</li>
                            <li>Multigrade oil advantage which protects engine parts at the point of engine start up.</li>
                            <li>Reduced propensity of sludge deposits which ensures superior engine cleanliness during normal operation.</li>
                            <li>Optimal oil performance even at higher engine operating load and temperature.</li>
                            <li>Reduced propensity of oil thickening and oxidation thereby reducing oil consumption under normal operating conditions.</li>
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
                                <td>869</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 400C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>116</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 1000C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>15.2</td>
                            </tr>
                            <tr>
                                <td>Viscosity Index</td>
                                <td>ASTM D 2270</td>
                                <td>137</td>
                            </tr>
                            <tr>
                                <td>Pour Point (0C)</td>
                                <td>ASTM D 97</td>
                                <td>-33</td>
                            </tr>
                            <tr>
                                <td>Flash Point (COC) (0C)</td>
                                <td>ASTM D 93</td>
                                <td>230</td>
                            </tr>
                            <tr>
                                <td>TBN (mg KOH/g)</td>
                                <td>ASTM D 2896B</td>
                                <td>9</td>
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
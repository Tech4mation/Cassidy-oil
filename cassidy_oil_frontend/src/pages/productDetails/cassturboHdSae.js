import { Link } from "react-router-dom";
import sample from "../../images/cassturboHdSaeSample.png";
import pdf from "../../images/pdfIcon.svg";

import Project4 from "../../components/Project4";
import News from "../../components/News";
import Events from "../../components/Events";

import ScrollToTopOnMount from "../../components/scrolltoview";


export default function CassturboHdSae() {
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
                        <li class="breadcrumb-item active" aria-current="page">CASSTURBO HD SAE40 API CF/SF</li>
                    </ol>
                </nav>
                <img loading="lazy" src={sample} className="sample" alt="" />
                <div className="details">
                    <div className="description">
                        <h4>DESCRIPTION</h4>    
                        <p>CASSTURBO HD SAE40 API CF/SF is a high-quality heavy duty premium diesel monograde engine oil which is blended using superior quality high viscosity index base oil and best in class additive molecule technology. CASSTURBO HD SAE40 API CF/SF is designed to provide excellent performance in stringent operating conditions. CASSTURBO HD SAE40 API CF/SF provides high level of engine protection and protection against the environment compared to other monograde oils in the market. This product is formulated to optimise the engines operational durability and reduce engine load.</p>
                    </div>
                    <div className="performance mt-5">
                        <h4>PERFORMANCE</h4>    
                        <p>Meets the requirements of SAE 40, API CF/SF.</p>
                    </div>
                    <div className="application mt-5">
                        <h4>APPLICATION</h4>    
                        <p>CASSTURBO HD SAE40 API CF/SF has been produced to meet with engine test requirements of diesel passenger cars, large and small commercial vehicles, multi-utility vehicles, gensets etc. OEM recommended drain interval must be followed.</p>
                    </div>
                    <div className="benefits mt-5">
                        <h4>PRODUCT BENEFITS</h4>
                        <ul>
                            <li>Low ash additive package, along with highly refined quality base oil provides superior engine oil formulation and oil performance.</li>
                            <li>Increased piston and crankcase cleanliness as the oil is formulated to reduce deposit built up.</li>
                            <li>Excellent corrosion protection, even when engine is off.</li>
                            <li>Provides excellent protection in prolonged city stop-and-go driving conditions.</li>
                            <li>Resistance to oil oxidation and thermal degradation thereby increasing oil life. </li>
                            <li>Excellent application on indirect injected heavy-duty generators.</li>
                            <li>Applicable for use in hydraulic and transmission system that specifies the use of SAE40 monograde engine oil.</li>
                            <li>Off highway application suitable for use in agricultural, mining, logging, construction and other machinery where use of SAE40 oil specified.</li>
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
                                <td>887</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 400C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>135</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 1000C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>13.5</td>
                            </tr>
                            <tr>
                                <td>Viscosity Index</td>
                                <td>ASTM D 2270</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Pour Point (0C)</td>
                                <td>ASTM D 97</td>
                                <td>-9</td>
                            </tr>
                            <tr>
                                <td>Flash Point (COC) (0C)</td>
                                <td>ASTM D 93</td>
                                <td>254</td>
                            </tr>
                            <tr>
                                <td>TBN (mg KOH/g)</td>
                                <td>ASTM D 2896B</td>
                                <td>6</td>
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
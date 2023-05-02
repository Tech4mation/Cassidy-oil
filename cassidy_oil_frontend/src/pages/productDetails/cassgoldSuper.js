import { Link } from "react-router-dom";
import sample from "../../images/cassgoldSuperSample.png";
import pdf from "../../images/pdfIcon.svg";

import Project4 from "../../components/Project4";
import file from "../../pdfs/CASSGOLD SUPER MOTOR OIL 20W  Product data sheet.pdf";
import ScrollToTopOnMount from "../../components/scrolltoview";


export default function CassgoldSuper() {
    function handleDownloadPDF() {
        const pdfUrl = file;
        window.location.href = pdfUrl;
      }    
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
                        <li class="breadcrumb-item active" aria-current="page">CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF</li>
                    </ol>
                </nav>
                <img loading="lazy" src={sample} className="sample" alt="" />
                <div className="details">
                    <div className="description">
                        <h4>DESCRIPTION</h4>    
                        <p>CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF is a superior quality multigrade engine oil specially designed for petrol or CNG passenger cars, Sports Utility Vehicles, Multi-Utility Vehicles. CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF is developed to provide protection to your engines at the point of start-up, wide range of running conditions and even when the engine is off. Strong film thickness ensures engine components are protected under higher operating speeds, temperatures and other adverse conditions. CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF is blende by using world class additive molecule technology and high-quality base oil.</p>
                    </div>
                    <div className="performance mt-5">
                        <h4>PERFORMANCE</h4>    
                        <p>Meets the requirements of SAE 20W-50, API SL.</p>
                    </div>
                    <div className="application mt-5">
                        <h4>APPLICATION</h4>    
                        <p>CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF can be used in earlier generation passenger cars, SUVs, MUVs, light and heavy commercial vehicles running with petrol or CNG as their fuel source. OEM recommended drain interval is to be followed.</p>
                    </div>
                    <div className="benefits mt-5">
                        <h4>PRODUCT BENEFITS</h4>
                        <ul>
                            <li>Enhanced wear protection to various critical engine parts such as cylinder liner, piston rings, valves, cams etc. which increases engine life.</li>
                            <li>Multigrade oil advantage which protects engine parts at the point of engine start up.</li>
                            <li>Reduced propensity of oil thickening and oxidation thereby reducing oil consumption under normal operating conditions.</li>
                            <li>Optimal oil performance even at higher engine operating load and temperature.     </li>
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
                                <td>862</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 400C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>172</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 1000C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>19.5</td>
                            </tr>
                            <tr>
                                <td>Viscosity Index</td>
                                <td>ASTM D 2270</td>
                                <td>135</td>
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
                                <td>7</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="storage mt-5">
                        <h4>STORAGE</h4>    
                        <p>All packages should be stored under cover and should not be stored where ambient temperature exceeds 600C or freezing conditions. To avoid ingress of water and damage, drums should be stored horizontally if they are stored outside.  Follow MSDS for further instructions on storage, safe handling, and disposal of the product.</p>
                    </div>

                    <div  onClick={handleDownloadPDF} className="d-flex align-items-center mt-5 download">
                        <img src={pdf} alt="pdf icon" width="30px" />    
                        <span className="ms-3">Click here to download PDF </span>
                    </div>                    
                </div>        

            </div>
        </div>
    )
}
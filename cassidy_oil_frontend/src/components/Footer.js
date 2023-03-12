import logo3 from "../images/logo3.svg";

export default function Footer() {
    return (
        <footer className="Footer px-4" id="footer">
            <div className="container-fluid px-4">
                <div className="row">
                    <div className="col-2 ">
                        <img src={logo3} width="100"/>
                    </div>
                    <div className="col-3">
                        <p className="mb-3">Our team</p>    
                        <ul>
                            <li>About us</li>
                            <li>Team</li>
                            <li>What we do</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="mb-3">Connect</p>    
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkdIn</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="mb-3">Find Us</p>
                        <span>Amazing Grace Plaza, by New Extension BBA Tradefair Lagos-Badagry Expressway</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
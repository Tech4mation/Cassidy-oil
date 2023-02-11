import logo3 from "../images/logo3.svg";

export default function Footer() {
    return (
        <footer className="Footer px-4" id="footer">
            <div className="container-fluid px-4">
                <div className="row">
                    <div className="col-2 ">
                        <img src={logo3} />
                    </div>
                    <div className="col-2">
                        <p className="mb-3">Our team</p>    
                        <ul>
                            <li>About us</li>
                            <li>Team</li>
                            <li>What we do</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <p className="mb-3">More</p>    
                        <ul>
                            <li>Projects</li>
                            <li>Events</li>
                            <li>Donate</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <p className="mb-3">Connect</p>    
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkdIn</li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                        <h4 className="text-white fw-bold">Subscribe to get the latest news</h4>
                        <form class="d-flex">
                            <input class="form-control py-2 bg-transparent border-dark text-white me-2" type="email" placeholder="Your email" aria-label="email" />
                            <button class="btn btn-warning text-black" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}
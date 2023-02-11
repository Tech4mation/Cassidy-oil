import darkLine1 from "../images/darkLine1.svg";
import arrow from "../images/arrow.svg";
import greyLine1 from "../images/greyLine1.png";

export default function Events() {
    return (
        <div className="px-5">
            <div className="mt-5 events mb-5">
            <div className="d-flex mb-4 pb-3 align-items-center">
                <h3 className="fw-bold pb-0 me-4 mb-0">Our Events</h3>
                <img src={greyLine1} height="3px" width="85%" alt="" />  
            </div>  
            
            <div className="d-flex justify-content-between">
                <div className="d-flex position-relative px-4 pt-4 pb-3 me-3 event1 flex-fill">
                    <div className="date d-flex flex-column">
                        <h3 className="fw-bold  mb-0">23</h3>
                        <span className="smaller">JAN</span>
                    </div>
                    <div className="d-flex ps-3 flex-column">
                        <div className="d-flex align-items-center ">
                        <p className="my-0 me-3 fw-bold title">NEXT EVENTS</p>  
                        <img src={darkLine1} height="2px" alt="" />
                        </div>  
                        
                        <h4 className="py-2 fw-bold">Say no to plastic usage and save the planet</h4>
                    </div>
                    <div className="align-self-center position-absolute end-0 me-4 rounded-circle bg-white d-flex align-items-center justify-content-center">
                        <img src={arrow} />
                    </div>
                </div>

                <div className="d-flex position-relative px-4 pt-4 pb-3 pb-2 me-3 event1 flex-fill">
                    <div className="date d-flex flex-column">
                        <h3 className="fw-bold  mb-0">05</h3>
                        <span className="smaller">FEB</span>
                    </div>
                    <div className="d-flex ps-3 flex-column">
                        <div className="d-flex align-items-center ">
                        <p className="my-0 me-3 fw-bold title">NEXT EVENTS</p>  
                        <img src={darkLine1} height="2px" alt="" />
                        </div>  
                        
                        <h4 className="py-2 fw-bold">Say no to plastic usage and save the planet</h4>
                    </div>
                    <div className="align-self-center position-absolute end-0 me-4 rounded-circle bg-white d-flex align-items-center justify-content-center">
                        <img src={arrow} />
                    </div>
                </div>
            </div>
            </div>        
        </div>
    )
}
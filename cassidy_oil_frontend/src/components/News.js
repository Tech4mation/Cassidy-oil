import cardImage1 from "../images/cardImage1.svg";
import cardImage2 from "../images/cardImage2.svg";
import cardImage3 from "../images/cardImage3.svg";
import cardImage4 from "../images/cardImage4.svg";
import greyLine1 from "../images/greyLine1.png";

export default function News() {
    return (
        <div className="px-5">
            <div className="mt-5 news">
            <div className="d-flex  align-items-center">
                <h3 className="fw-bold py-4 me-4">Read Our News</h3>
                <img loading="lazy" src={greyLine1} height="3px" width="80%" alt="" />  
            </div>  
            
            <div className="d-flex flex-md-row flex-column">
                <div className="card border-white me-3">
                <img loading="lazy" src={cardImage1}/>  
                <div className="card-body">
                    <h5 className="card-title">Don’t destroy greenery and don’t spoil scenery</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                </div>
                <div className="card border-white me-3">
                <img loading="lazy" src={cardImage2}/>  
                <div className="card-body">
                    <h5 className="card-title"> Is climate change happening faster than expected?</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                </div>
                <div className="card border-white me-3">
                <img loading="lazy" src={cardImage3}/>  
                <div className="card-body">
                    <h5 className="card-title">Top 10 facts about wind farms you didn't know</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                </div>
                <div className="card border-white">
                <img loading="lazy" src={cardImage4}/>  
                <div className="card-body">
                    <h5 className="card-title">Our goal is to make water available for everyone</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
import ScrollToTopOnMount from "../components/scrolltoview";
import { Link } from "react-router-dom";

import oilSample1 from "../images/oilSample1.png";
import oilSample2 from "../images/oilSample2.png";
import greyLine1 from "../images/greyLine1.png";
import yellowLine1 from "../images/yellowLine1.png";
import supportersLogos from "../images/supportersLogosSvg.svg";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import verticalLine1 from "../images/verticalLine1.svg";

import Project4 from "../components/Project4";
import News from "../components/News";
import Events from "../components/Events";
import React from "react";
import $ from "jquery";


class Home extends React.Component {

  componentDidMount() {
      $('.Header .nav-item').removeClass('active')  
      $('.Header #nav-item1').addClass('active')
  }  

  render() {
    return (
      <div className="Home mt-5" id="home">
        <ScrollToTopOnMount />
  
        <section className='section1 px-5 '>
            <div className='container-fluid '>   
                <div className='row align-items-center'>
                    <div className='px-0 col-lg-5 col-md-6 col-12 text-md-left '>
                        <h1 className='fw-semibold display-5 mb-0'>
                            High Quality </h1>
                        <h1 className='fw-semibold display-5'>
                            Premium Lubricants</h1>
                        <p className='text-md-left main-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <Link to= "/">
                            <button type="button" className='btn btn-warning text-white mt-4'>
                                Learn more
                            </button>
                        </Link>
                    </div>
                    <div className='col-lg-7 col-md-6 col-12 '>
                        <img className='oilSample1' alt='oil sample' src={oilSample1} />
                    </div>
                    {/* <img className='position-absolute bg2' alt='oil sample' src={bg2} /> */}
                </div>
            </div>
        </section>
  
        <section className='section2 px-5' id="about-us">
            <div className='container-fluid'>
                <div className="header d-flex align-items-center ">
                    <img className='line1 ms-1' alt='oil sample' src={yellowLine1}/> <span className="ms-3">KNOW ABOUT US</span>
                </div>  
                <div className='row align-items-center  '>    
                    <div className='px-0 col-lg-6 col-md-6 col-12 text-md-left  '>
                        <h1 className='fw-semibold display-5 mb-0'>
                            High Quality Premium</h1>
                        <h1 className='fw-semibold display-5'>
                            Lubricants</h1>
                        <p className='text-md-left main-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <Link to= "/">
                            <button type="button" className='btn btn-warning text-white mt-4'>
                                Learn more
                            </button>
                        </Link>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 '>
                        <img className='oilSample2' alt='oil sample' src={oilSample2} />
                    </div>
                    {/* <img className='position-absolute bg2' alt='oil sample' src={bg2} /> */}
                </div>
            </div>
            <footer className="footer mt-5">
              <div className="d-flex align-items-center mb-4 ms-1">
                <span>OUR SUPPORTERS</span>
                <img src={greyLine1} height="3px" width="85%" alt="" />
              </div>
              <img src={supportersLogos} />
            </footer>
        </section>      
  
        <section className='section3 px-5 py-5' id="what-we-do">
          <div className="header d-flex align-items-center my-3">
              <img className='ms-3' alt='oil sample' src={yellowLine1}/> <span className="ms-3">WHAT WE DO</span>
          </div>
          <div className="d-flex content flex-column w-75 pt-4">
            <h1 className='fw-semibold display-5 mb-0'>
              We Produce High Quality </h1>
            <h1 className='fw-semibold display-5 mb-0'>
              Premium  Lubricants</h1>
            <p className='text-md-left main-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="position-relative">
              <img className="verticalLine1 position-absolute" src={verticalLine1} height="400px" alt="" />
              <div className="d-flex flex-column w-75 mt-3">
                <div className="d-flex align-items-start ">
                  <img src={icon1} width="30px" />
                  <div className="ms-4">
                    <h4 className="fw-bold">Build Healthy Cities</h4>  
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
  
                <div className="d-flex align-items-start mt-2">
                  <img src={icon2} width="30px" />
                  <div className="ms-4">
                    <h4 className="fw-bold">Tree Plantation</h4>  
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
  
                <div className="d-flex align-items-start mt-2">
                  <img src={icon3} width="30px" />
                  <div className="ms-4">
                    <h4 className="fw-bold">Protect Land and Water</h4>  
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
  
                <div className="d-flex align-items-start mt-2">
                  <img src={icon4} width="30px" />
                  <div className="ms-4">
                    <h4 className="fw-bold">Animal Safety</h4>  
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>   
  
        <section className='section4 px-5 py-5'>
          <div className="header d-flex align-items-center my-3">
              <img className='ms-3' alt='oil sample' src={yellowLine1}/> <span className="ms-3">PROJECTS WE HAVE DONE</span>
          </div>
          <div className="d-flex content flex-column pt-4">
            <h1 className='fw-semibold display-5 mb-0'>
              We Produce High Quality </h1>
            <h1 className='fw-semibold display-5 mb-0'>
              Premium  Lubricants</h1>
            <div className="d-flex align-items-center mt-5 projects">
              <div className="d-flex flex-column mx-3 ms-0 pt-5 px-5 pb-5 rounded project1">
                <h4 className="fw-bold text-white pt-2">Mission 40K: Tree plantation</h4>  
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <Link to= "/">
                    <button type="button" className='btn btn-light mt-4'>
                        See more
                    </button>
                </Link>
              </div>
              <div className="d-flex flex-column mx-3 pt-5 px-5 pb-5 rounded project2">
                <h4 className="fw-bold text-white pt-2">Weekly cleanliness program in city</h4>  
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <Link to= "/">
                    <button type="button" className='btn btn-light mt-4'>
                        See more
                    </button>
                </Link>
              </div>
              <div className="d-flex flex-column mx-3 me-0 pt-5 px-5 pb-5 rounded project3">
                <h4 className="fw-bold text-white pt-2">Wildlife safety program 2021</h4>  
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <Link to= "/">
                    <button type="button" className='btn btn-light mt-4'>
                        See more
                    </button>
                </Link>
              </div>
            </div>
          </div>
          
        </section>   
        <Project4 />
        <News />
        <Events />
      </div>
    );
  }  
  
}

export default Home;

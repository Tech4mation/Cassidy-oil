import ScrollToTopOnMount from "../components/scrolltoview";
import { Link } from "react-router-dom";

import bgcar from "../images/bgcar.png";
import bgcar2 from "../images/bgcar2.png";
import component1 from "../images/component1.svg";
import component2 from "../images/component2.svg";
import oilSample1 from "../images/oilSample1.png";
import oilSample1x from "../images/oilSample1x.png";
import oilSample3 from "../images/oilSample3.png";
import oilSample4 from "../images/oilSample4.png";
import yellowIcon from "../images/yellowIcon.svg";
import yellowLine1 from "../images/yellowLine1.png";
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
      <div className="Home " id="home">
        <ScrollToTopOnMount />
        <section className="section1">
          <div id="landingCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="6000">
                <img class="d-block w-100" src={bgcar}  alt="First slide" />
                <div class="carousel-caption text-start d-none d-md-flex align-items-center justify-content-between">
                  <div className="mt-5">
                    <h1 className='fw-semibold text-white display-5 mb-0'>
                        High Quality </h1>
                    <h1 className='fw-semibold text-white display-5'>
                        Premium <br/>Lubricants</h1>  
                    <img src={component1}/>
                  </div>  
                  <img className="carouselCaptionImage position-relative" src={oilSample1} width="70%" style={{'left': '200px'}}/>
                </div>
              </div>

              <div class="carousel-item" data-bs-interval="6000">
                <img class="d-block w-100" src={bgcar2} alt="Second slide" />
                <div class="carousel-caption text-start d-none d-md-flex align-items-center justify-content-between">
                  <div>
                    <h1 className='fw-semibold text-white display-5 mb-0'>
                          Ensuring optimal </h1>
                    <h1 className='fw-semibold text-white display-5'>
                        engine protection <br/> and performance.</h1>  
                      <img src={component2}/>
                  </div>  
                  <img className="carouselCaptionImage position-relative" src={oilSample1x} width="46%" style={{'left': '150px'}} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section2 px-5' id="about-us">
            <div className='container-fluid pt-4'>
                <div className="header d-flex align-items-center ">
                    <img className='line1 ms-1' alt='oil sample' src={yellowLine1}/> <span className="ms-3">KNOW ABOUT US</span>
                </div>  
                <div className='row align-items-center mt-3'>
                    <div className='px-0 text-md-left  '>
                        <img className='oilSample2' alt='oil sample' src={oilSample3} loading="lazy"/>  
                        <h1 className='fw-semibold display-5 '>
                          At Cassidy Energy, we're passionate about engines</h1>
                        <p className='text-md-left main-text w-50'>With years of experience in the industry, we understand the importance of using high-quality oil to protect and enhance engine performance. That's why we've dedicated ourselves to producing the finest engine oils on the market.</p>
                        <Link to= "/">
                            <button type="button" className='btn btn-warning text-white mt-4'>
                                Learn more
                            </button>
                        </Link>
                    </div>                  
                </div>
            </div>
           
        </section>      
  
        <section className='section3 px-5 py-5' id="what-we-do">
          <div className="header d-flex align-items-center mt-4">
              <img className='ms-3' alt='oil sample' src={yellowLine1}/> <span className="ms-3">WHAT WE DO</span>
          </div>
          <div className="d-flex content flex-column  pt-3">
            <h1 className='fw-semibold display-5'>Our Range of Products</h1>
            <p className='text-md-left main-text w-50'>At Cassidy energy, we offer a wide range of high-quality engine oils to suit all types of vehicles. Whether you're driving a car, riding a bike, or operating heavy machinery, we have the right oil for you. Our products are designed to meet the specific needs of each engine, ensuring optimal performance and protection. From conventional to synthetic oils, Cassidy energy has got you covered..</p>
            <div className="position-relative">
              <img className="verticalLine1 position-absolute" src={verticalLine1} height="400px" alt="" />
              <div className="d-flex ">
                <div className="d-flex flex-column w-75 mt-3">
                  <div className="d-flex align-items-start ">
                    <img src={yellowIcon} width="20px" />
                    <div className="ms-4">
                      <h5 className="fw-bolder">CASSTEK PREMIUM 4T 20W-40 API SL/MA2</h5>
                      <p className="mt-2">
                        Premium Multigrade Okada, Kekenapep engine oil
                      </p>
                    </div>
                  </div>
    
                  <div className="d-flex align-items-start mt-2">
                    <img src={yellowIcon} width="20px" />
                    <div className="ms-4">
                      <h5 className="fw-bolder">CASSTEK MOTO 4T 20W-40 API SF/CF</h5>
                      <p className="mt-2">
                        High Performance Multigrade Okada, Kekenapep engine oil
                      </p>
                    </div>
                  </div>
    
                  <div className="d-flex align-items-start mt-2">
                    <img src={yellowIcon} width="20px" />
                    <div className="ms-4">
                      <h5 className="fw-bolder">CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF</h5>  
                      <p className="mt-2">
                        Super Performance Multigrade designed with deposit guard technology 
                      </p>
                    </div>
                  </div>
    
                  <div className="d-flex align-items-start mt-2">
                    <img src={yellowIcon} width="20px" />
                    <div className="ms-4">
                      <h5 className="fw-bolder">CASSGOLD POWER MOTOR OIL SAE40 API SF/CF</h5>
                      <p className="mt-2">
                        High Performance mono grade mineral engine oil
                      </p>
                    </div>
                  </div>

                  <Link to= "/Lubricants" className="my-3">
                      <button type="button" className='btn btn-warning text-white mt-4'>
                          See lubricants
                      </button>
                  </Link>                  
                </div>
                <div className="">
                  <img loading="lazy" className='oilSample4' alt='oil sample' src={oilSample4} />
                </div>
              </div>
            </div>
            
          </div>
        </section>   
  
        <section className='section4 px-5 py-5'>
          <div className="d-flex content align-items-center flex-column pt-4">
            <h1 className='fw-semibold display-5 text-center w-75'>Protect Your Engine with Cassidy standard oil</h1>
            <p className="w-50 text-center"> Whether you're a seasoned mechanic or a casual car enthusiast, 
              we have the knowledge and expertise to help you get the most out of your engine.</p>
            <div className="d-flex align-items-center mt-3 projects w-100">
              <div className="d-flex flex-fill flex-column mx-3 ms-0 pt-5 px-5 pb-5 rounded project1"></div>
              <div className="d-flex flex-fill flex-column mx-3 pt-5 px-5 pb-5 rounded project2"></div>
              <div className="d-flex flex-fill flex-column mx-3 me-0 pt-5 px-5 pb-5 rounded project3"></div>
            </div>
          </div>
          
          <div className="d-flex flex-column align-items-center form p-5" style={{'backgroundColor': '#152C41'}}>
            <h1 className="text-white text-center fw-bold">Subscribe to get <br/> the latest updates</h1>
            <form class="d-flex w-50 mt-3">
              <input class="form-control py-2 bg-dark border-white text-white me-2" type="email" placeholder="Your email" aria-label="email" />
              <button class="btn btn-warning text-black" type="submit">Subscribe</button>
            </form>
          </div>          
        </section>   
        <News />
      </div>
    );
  }  
  
}

export default Home;

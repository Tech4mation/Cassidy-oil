import ScrollToTopOnMount from "../components/scrolltoview";
import { Link } from "react-router-dom";

import banner1 from "../images/banner1.png";
import banner1_s from "../images/banner1_s.png";
import banner2 from "../images/banner2.png";
import banner2_s from "../images/banner2_s.png";
import banner3 from "../images/banner3.png";
import banner3_s from "../images/banner3_s.png";

import carousel1 from "../images/step1Component.png";
import carousel2 from "../images/carousel2Component.png";
import carousel3 from "../images/carousel3Component.png";

import banner2Oil from "../images/banner2Oil.png";
import oilSample1x from "../images/oilSample1x.png";
import oilSample3 from "../images/oilSample3.png";
import oilSample4 from "../images/oilSample4N.png";
import blueAlone from "../images/blueAlone.png";
import yellowIcon from "../images/yellowIcon.svg";
import yellowLine1 from "../images/yellowLine1.png";
import verticalLine1 from "../images/verticalLine1.svg";

import Project4 from "../components/Project4";
import News from "../components/News";
import Events from "../components/Events";
import React, { useEffect } from "react";
import $ from "jquery";


function Home() {

  useEffect(() => {
      $('.Header .nav-item').removeClass('active')  
      $('.Header #nav-item1').addClass('active')

      window.addEventListener('scroll', reveal);      
  }  )

  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    let oilSamples = document.querySelector(".oilSamples")

    let windowHeight = window.innerHeight;
    for (var i = 0; i < reveals.length; i++) {
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible)
        reveals[i].classList.add('active');
      else
        reveals[i].classList.remove('active');
    }

    // for (var i = 0; i < oilSamples.length; i++) {
    //   let elementTop = oilSamples[i].getBoundingClientRect().top;
    //   let elementVisible = 100;

    //   if (elementTop < windowHeight - elementVisible)
    //     oilSamples[i].classList.add('active_sm');
    //   else
    //     oilSamples[i].classList.remove('active_sm');
    // }
  }

    return (
      <div className="Home overflow-hidden" data-bs-spy="scroll" data-bs-target="#headerNavbar" data-bs-offset="0" tabindex="0">
        <ScrollToTopOnMount />
        {/* class="carousel slide" data-bs-ride="carousel" */}
        <section id="home" className="section1 mx-0">
          <div id="landingCarousel " >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="5000">
              <img
                srcSet={`${banner1_s} 768w, ${banner1}`}
                alt="banner1"
                class="d-block banner"
              />
                <div class="carousel-caption w-100 text-start d-flex align-items-center justify-content-between">
                  <div className="mb-5 ps-2">
                    <h1 className='fw-semibold text-white display-5 mb-0'>
                          Ensuring optimal </h1>
                    <h1 className='fw-semibold text-white display-5'>
                        engine protection <br/> and performance.</h1>    
                    
                    <img src={carousel1}/>
                  </div>  
                </div>
              </div>

              <div class="carousel-item" data-bs-interval="5000">
              <img 
                class="d-block banner" 
                srcSet={`${banner2_s} 768w, ${banner2}`} 
                alt="Second slide" 
                />
                <div class="carousel-caption text-start d-flex align-items-center justify-content-between">
                  <div className="mb-5 ps-2">
                  <h1 className='fw-semibold text-white display-5 mb-0'>
                        High Quality </h1>
                    <h1 className='fw-semibold text-white display-5'>
                        Premium <br/>Lubricants</h1>  
                      <img src={carousel2}/>
                  </div>  
                  <img className="carouselCaptionImage carouselCaptionImage1  position-absolute start-50" src={banner2Oil} />
                </div>
              </div>

              <div class="carousel-item" data-bs-interval="5000">
                <img 
                class="d-block banner" 
                srcSet={`${banner3_s} 768w, ${banner3}`} 
                alt="Second slide" 
                />
                <div class="carousel-caption text-start d-flex align-items-center justify-content-between">
                  <div className="mb-5 ps-2">
                    <h1 className='fw-semibold text-white display-5 mb-0'>
                          Designed to </h1>
                    <h1 className='fw-semibold text-white display-5'>
                        meet your <br/>specific need</h1>  
                      <img src={carousel3}/>
                  </div>  
                  <img className="carouselCaptionImage position-absolute start-50" src={oilSample1x} />
                </div>
              </div>              
            </div>
          </div>
        </section>

        <section className='section2  px-md-5 reveal reveal2' id="about-us">
            <div className='container-fluid pt-4'>
                <div className="header d-flex align-items-center ">
                    <img className='line1 ms-1' alt='oil sample' src={yellowLine1}/> <span className="ms-3">KNOW ABOUT US</span>
                </div>  
                <div className='row align-items-center mt-3 content'>
                    <div className='px-0 text-md-left '>
                      <img className='oilSample2 lg-screen reveal animate2' alt='oil sample' src={oilSample3} loading="lazy"/>  
                        <h1 className='fw-semibold display-5 '>
                          At Cassidy Energy, we're passionate about engines</h1>
                        <p className='text-md-left main-text w-md-50'>With years of experience in the industry, we understand the importance of using high-quality oil to protect and enhance engine performance. That's why we've dedicated ourselves to producing the finest engine oils on the market.</p>
                        <Link to= "/">
                            <button type="button" className='btn btn-warning text-white mt-4'>
                                Learn more
                            </button>
                        </Link>
                    </div>     
                    <img className='oilSample2 sm-screen reveal animate2' alt='oil sample' src={oilSample3} loading="lazy"/>               
                </div>
            </div>
           
        </section>      
  
        <section className='section3 reveal px-md-5 py-5' id="what-we-do">
          <div className="header d-flex align-items-center mt-4">
              <img className='ms-3' alt='oil sample' src={yellowLine1}/> <span className="ms-3">WHAT WE DO</span>
          </div>
          <div className="d-flex content flex-column  pt-3">
            <h1 className='fw-semibold display-5'>Our Range of Products</h1>
            <p className='text-md-left main-text w-md-50'>At Cassidy energy, we offer a wide range of high-quality engine oils to suit all types of vehicles. Whether you're driving a car, riding a bike, or operating heavy machinery, we have the right oil for you. Our products are designed to meet the specific needs of each engine, ensuring optimal performance and protection. From conventional to synthetic oils, Cassidy energy has got you covered..</p>
            <div className="position-relative">
              <img className="verticalLine1 position-absolute" src={verticalLine1} height="400px" alt="" />
              <div className="d-md-flex ">
                <div className="d-flex flex-column w-75 mt-3 products">
                  <div className="d-flex align-items-start ">
                    <img src={yellowIcon} width="20px" />
                    <div className="ms-4">
                      <h5 className="fw-bolder ">CASSTEK PREMIUM 4T 20W-40 API SL/MA2</h5>
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
                  <img loading="lazy" className='oilSample4 lg-screen' alt='oil sample' src={oilSample4} />
                </div>
              </div>
            </div>
            
          </div>
        </section>   
  
        <section className='section4 px-md-5 py-5'>
          <div className="d-flex content align-items-center flex-column pt-4 r">
            <h1 className='fw-semibold display-5 text-md-center w-75 '>Protect Your Engine with Cassidy standard oil</h1>
            <p className="w-50 text-md-center"> Whether you're a seasoned mechanic or a casual car enthusiast, 
              we have the knowledge and expertise to help you get the most out of your engine.</p>
            <div className="d-flex flex-md-row  flex-column align-items-center mt-3 projects w-100">
              <div className="d-flex flex-fill reveal animate3 flex-column mx-3 ms-0 pt-5 w-75  pb-5 rounded project1"></div>              
              <div className="d-flex flex-fill reveal flex-column mx-3 me-0 pt-5  w-75 mt-4 mt-md-0  rounded project3"></div>
              <div className="d-flex justify-content-end align-items-end flex-fill reveal animate2 flex-column mx-3 pt-5 w-75 mt-4 mt-md-0 rounded project2">
                <img src={blueAlone} alt='' />
              </div>
            </div>
          </div>
          
          <div className="d-flex flex-column align-items-center form p-5" style={{'backgroundColor': '#152C41'}}>
            <h1 className="text-white text-center subscribe fw-bold">Subscribe to get <br/> the latest updates</h1>
            <form className="d-flex flex-md-row flex-column w-50 mt-3">
              <input className="form-control py-2 bg-dark border-white text-white me-2" type="email" placeholder="Your email" aria-label="email" />
              <button className="btn btn-warning text-dark mt-3 mt-md-0" type="submit">Subscribe</button>
            </form>
          </div>          
        </section>
        <div className="my-5 reveal">
          <News />
        </div>
      </div>
    );
  }  

export default Home;

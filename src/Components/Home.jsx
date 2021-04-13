import React, { useEffect } from "react";
import "react-jquery-plugin";
import "./Home.css";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import Contact from "./Contact.jsx";
import healthcard from "../Images/healthcard.png"
import "../font/flaticon.css"
const Home = () => {

  const homeAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } })
  const numberAnimation = useSpring({ number: 1000, from: { number: 0 } })

  useEffect(() => {
    window.$(function () {
      window.$(window).scroll(() => {

        // Animation for Intro DIV
        if (window.$(window).scrollTop() > 100) {
          window.$(".intro").animate({ marginLeft: "12%" }, 700);
          window.$(".intro").removeClass("remove");
        } else {
          window.$(".intro").addClass("remove");
        }

        // Animation for steps-to-follow DIV
        if (window.$(window).scrollTop() > 500) {
          window
            .$(".steps-to-follow")
            .animate({ marginLeft: "10%" }, 700);
          window.$(".steps-to-follow").removeClass("remove");
        } else {
          window.$(".steps-to-follow").addClass("remove");
        }


        // Animation for partners DIV
        if (window.$(window).scrollTop() > 800) {
          window.$(".partners").animate({ marginLeft: "15%" }, 700);
          window.$(".partners").removeClass("remove");
        } else {
          window.$(".partners").addClass("remove");
        }
      });
    });
  });
  
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}
    return (
      <>


        <animated.div style={homeAnimation} className="home">
          <img src={healthcard} alt="Aarogya Card" srcset="" />
          <div className="greeting">
            <h1 className="greet-message">Welcome to Aarogya-Card</h1>
            <p>"Bring all your medical history here"</p>
            <br />
            <a href='/HealthCard/Register'><button className="register-button">Register</button></a>
          </div>
          <div className='other-links'>
            <a onClick={scrollToTop} className='top-button'><i class="flaticon-up-arrow"></i></a>
          </div>
        </animated.div>



        {/* About page */}
        <div className="about-us" id="about">
          <h1 className="heading">About Us</h1>
          <div className="intro">
            <div className="questions">
              <h2 >What is Aarogya Card?</h2>
              <p className="answers">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="questions">
              <h2 className="">Why to use Aarogya Card?</h2>
              <p className="answers">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
            </p>
            </div>

            <div className="questions">
              <h2 className="">How to use Aarogya Card?</h2>
              <p>
                <ol>
                  <li>Lorem Ipsum is simply dummy</li>
                  <li>Lorem Ipsum is simply dummy</li>
                  <li>Lorem Ipsum is simply dummy</li>
                  <li>Lorem Ipsum is simply dummy</li>
                  <li>Lorem Ipsum is simply dummy</li>
                </ol>
              </p>
            </div>
          </div>

        </div>




        <div className="services" id="service">
          <h1 className='heading'>Services</h1>
          <div className="partners">
            <div className="image">
              <div className="card service-card" style={{ width: "15rem", backgroundColor: "#828ca3", fontFamily: "sans-serif" }}>
                <img className="comapny"
                  src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png" alt="Company1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>
              <div className="card service-card" style={{ width: "15rem", backgroundColor: "#828ca3", fontFamily: "sans-serif" }}>
                <img className="comapny"
                  src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png" alt="Company1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>
              <div className="card service-card" style={{ width: "15rem", backgroundColor: "#828ca3", fontFamily: "sans-serif" }}>
                <img className="comapny"
                  src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png" alt="Company1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div className="user-information">
          <h1 className="heading" id="user-info">User Information</h1>
          <div className='users-info'>
            <div className='doctor-count info-section'>
              <h5>Total Doctor Connected To Us</h5>
              <animated.p style={numberAnimation}>{numberAnimation.number}</animated.p>
            </div>
            <div className='patitent-count info-section'>
              <h5>Total Patient Connected To Us</h5>
              <animated.p style={numberAnimation}>{numberAnimation.number}</animated.p>

            </div>
            <div className='daily-user-count info-section'>
              <h5>Total User Connected To Us</h5>
              <animated.p style={numberAnimation}>{numberAnimation.number}</animated.p>

            </div>
          </div>
        </div>
        <Contact />
      </>
    );
  };

  export default Home;

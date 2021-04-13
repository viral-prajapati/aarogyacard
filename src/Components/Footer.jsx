import React, { useEffect } from "react";
import "../font/flaticon.css"
import "./Footer.css";

const Footer = () => {

  useEffect(() => {

  })

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <footer className="footer">
        <div className="contact-details">
          <div className="left-footer">
            <h3>Health Card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem sint non. Sunt officia atque hic animi tenetur nam recusandae ut natus quo excepturi.</p>
          </div>

          {/* contact-us */}
          <div className="middle-footer">
            <h3>Contact Us</h3>
            <div className="details">
              <h6>Location</h6>
              <div className="icon-info">
                <i class="flaticon-maps-and-flags"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, modi!</p>
              </div>

              <h6>Phone :</h6>
              <div className="icon-info">
                <i class="flaticon-phone-call"></i>
                <p>123456789</p>
              </div>

              <h6>Email :</h6>
              <div className="icon-info">
                <i class="flaticon-email"></i>
                <p>healthcard@gmail.com</p>
              </div>
            </div>
          </div>

          {/* sc-handels */}
          <div className="right-footer">
            <h3>Follow Us</h3>
            <div className='handles'>
              <a href='https://www.facebook.com/' target="_blank"><i class="flaticon-facebook"></i></a>
              <a href='https://twitter.com/?lang=en' target="_blank"><i class="flaticon-twitter"></i></a>
              <a href='https://www.instagram.com/' target="_blank"><i class="flaticon-instagram"></i></a>
              <a href='https://www.linkedin.com/signup' target="_blank"><i class="flaticon-linkedin"></i></a>
            </div>
          </div>

          {/* <div className='other-links'>
            <a onClick={scrollToTop} className='top-button'><i class="flaticon-up-arrow"></i></a>
          </div> */}

        </div>
        <div class="copy-right">
            &copy; 2021 <span>Health Card</span>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

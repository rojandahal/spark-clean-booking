import React, { useState } from "react";
import "../css/NavbarFooter.css";

import footerimg1 from "../assets/images/shapes/site-footer-shape-1.png";
import footerimg2 from "../assets/images/shapes/site-footer-shape-2.png";
import footerWidget from "../assets/images/resources/footer-widget-articles-img-1.jpg";
import footerWidget2 from "../assets/images/resources/footer-widget-articles-img-2.jpg";
import informationLogo from "../assets/images/resources/information-logo.png";

const Footer = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <section className='google-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53007.35009764611!2d151.00794495499096!3d-33.86493767440039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb5ec3bbec53%3A0x5017d681632be40!2sLidcombe%20NSW%202141%2C%20Australia!5e0!3m2!1sen!2snp!4v1686198727274!5m2!1sen!2snp'
          className='google-map__one'
          allowfullscreen
        ></iframe>
      </section>

      <section className='information'>
        <div className='container'>
          <div className='information__inner'>
            <div className='information__logo-box'>
              <div className='information__border-1'></div>
              <div className='information__border-2'></div>
              <a href='index.html'>
                <img
                  src={informationLogo}
                  alt='best cleaning service Epping'
                />
              </a>
            </div>
            <ul className='list-unstyled information__list'>
              <li>
                <div className='information__icon'>
                  <span className='icon-phone'></span>
                </div>
                <div className='information__content'>
                  <p className='information__sub-title'>Call anytime</p>
                  <h5 className='information__number'>
                    <a href='tel:0493 922 822'>0493 922 822</a>
                  </h5>
                </div>
              </li>
              <li>
                <div className='information__icon'>
                  <span className='icon-envelope'></span>
                </div>
                <div className='information__content'>
                  <p className='information__sub-title'>Send email</p>
                  <h5 className='information__number'>
                    <a href='mailto:admin@sparkcleanaustralia.com.au'>
                      admin@sparkcleanaustralia.com.au
                    </a>
                  </h5>
                </div>
              </li>
              <li>
                <div className='information__icon'>
                  <span className='icon-location-1'></span>
                </div>
                <div className='information__content'>
                  <p className='information__sub-title'>Visit office</p>
                  <h5 className='information__number'>Lidcombe, NSW</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className='site-footer'>
        <div
          className='site-footer-shape-1'
          style={{ backgroundImage: `url(${footerimg1})` }}
        ></div>
        <div className='site-footer-shape-two'>
          <img
            src={footerimg2}
            alt='best cleaning service Epping'
          />
        </div>
        <div className='site-footer__top'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                data-wow-delay='100ms'
              >
                <div className='footer-widget__column footer-widget__about'>
                  <h3 className='footer-widget__title'>About us</h3>
                  <div className='footer-widget__about-text-box'>
                    <p className='footer-widget__about-text'>
                      SparkClean is a professional cleaning company dedicated to
                      providing high-quality cleaning services with attention to
                      detail.
                    </p>
                  </div>
                  <div className='site-footer__social'>
                    <a href='#'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-facebook'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-pinterest-p'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-6 col-md-6 wow fadeInUp'
                data-wow-delay='200ms'
              >
                <div className='footer-widget__column footer-widget__links clearfix'>
                  <h3 className='footer-widget__title'>Quick Links</h3>
                  <ul className='footer-widget__links-list list-unstyled clearfix'>
                    <li>
                      <a href='about.html'>About</a>
                    </li>
                    <li>
                      <a href='gallery.html'>Gallery</a>
                    </li>
                    <li>
                      <a href='contact-page-2.html'>Contact</a>
                    </li>
                    <li>
                      <a href='compliance.html'>Compliance</a>
                    </li>
                    <li>
                      <a href='contact-page-2.html'>Book Now</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                data-wow-delay='300ms'
              >
                <div className='footer-widget__column footer-widget__articles clearfix'>
                  <h3 className='footer-widget__title'>Book Now</h3>
                  <ul className='footer-widget__articles-list list-unstyled clearfix'>
                    <li>
                      <div className='footer-widget__articles-img'>
                        <img
                          src={footerWidget}
                          alt='best cleaning service Epping'
                        />
                        <a href='commercialcleaning.html'>
                          <span className='fa fa-link'></span>
                        </a>
                      </div>
                      <div className='footer-widget__articles-content'>
                        <p className='footer-widget__articles-date'>
                          Online booking
                        </p>
                        <h5 className='footer-widget__articles-sub-title'>
                          <a href='commercialcleaning.html'>
                            {" "}
                            Commercial Cleaning
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className='footer-widget__articles-img'>
                        <img
                          src={footerWidget2}
                          alt='best cleaning service Epping'
                        />
                        <a href='residentalcleaning.html'>
                          <span className='fa fa-link'></span>
                        </a>
                      </div>
                      <div className='footer-widget__articles-content'>
                        <p className='footer-widget__articles-date'>
                          Online booking
                        </p>
                        <h5 className='footer-widget__articles-sub-title'>
                          <a href='residentalcleaning.html'>
                            {" "}
                            Residential Cleaning
                          </a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-4 col-lg-6 col-md-6 wow fadeInUp'
                data-wow-delay='400ms'
              >
                <div className='footer-widget__column footer-widget__newsletter'>
                  <h3 className='footer-widget__title'>Newsletter</h3>
                  <p className='footer-widget__newsletter-text'>
                    Subscribe our newsletter to get <br />
                    our latest update & news
                  </p>
                  <form className='footer-widget__newsletter-form'>
                    <div className='footer-widget__newsletter-input-box'>
                      <input
                        type='email'
                        placeholder='Email address'
                        name='email'
                      />
                      <button
                        type='submit'
                        className='footer-widget__newsletter-btn'
                      >
                        <i className='far fa-paper-plane'></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='site-footer__bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='site-footer__bottom-inner'>
                  <p className='site-footer__bottom-text'>
                    © Copyright {date.getFullYear()} by{" "}
                    <a href='#'>
                      Spark Clean Australia | Designed and Managed by Murphys
                      Technology Pty Ltd{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

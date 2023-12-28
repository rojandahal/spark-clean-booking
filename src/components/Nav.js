import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import "../css/NavbarFooter.css";
// import "../css/reset.css";
import "../css/navbar.css";
import "../css/navbar-responsive.css";

// import styles1 from "./navbarresponsive.module.css";

import logo1 from "../images/resources/logo-1.png";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [scrolled, isScrolled] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownHelp, setDropdownHelp] = useState(false);
  const [dropdownwho, setDropdownwho] = useState(false);
  const [dropdownCleaning, setDropdownCleaning] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      isScrolled(window.scrollY > 220);
    });
  }, [scrolled]);

  const handleDropdownCclick = e => {
    setDropdownVisible(!dropdownVisible);
    // if (dropdownVisible) {
    //     e.target.classList.add(styles1.color);
    // } else {
    //     e.target.classList.remove(styles1.colorBlack);
    // }
  };
  const handleClickHelp = e => {
    setDropdownHelp(!dropdownHelp);
    // if (dropdownHelp) {
    //     e.target.classList.add(styles1.color);
    // } else {
    //     e.target.classList.remove(styles1.color);
    // }
  };
  const handleClickWho = e => {
    setDropdownwho(!dropdownwho);
    // if (dropdownwho) {
    //     e.target.classList.add(styles1.color);
    // } else {
    //     e.target.classList.remove(styles1.color);
    // }
  };
  const handleDropdownCommercialclick = () => {
    setDropdownCleaning(!dropdownCleaning);
  };
  return (
    <div>
      <header className='main-header clearfix'>
        <div className='main-header__top'>
          <div className='main-header__top-social-box'>
            <div className='container'>
              <div className='main-header__top-social-box-inner'>
                <p className='main-header__top-social-text'>
                  Welcome to Spark Clean Australia! Specialists in detail
                  Industrial cleaning & Commercial Cleaning | "let us spark your
                  imagination"
                </p>
                <div className='main-header__top-social'>
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
          </div>
          <div className='main-header__top-details'>
            <div className='container'>
              <div className='main-header__top-details-inner'>
                <div className='main-header__logo'>
                  <a href='index.html'>
                    <img
                      src={logo1}
                      alt='cleaners in sydney'
                    />
                  </a>
                </div>
                <ul className='list-unstyled main-header__top-details-list'>
                  <li>
                    <div className='icon'>
                      <span className='icon-message'></span>
                    </div>
                    <div className='text'>
                      <h5>
                        <a href='mailto:admin@sparkcleanaustralia.com.au'>
                          admin@sparkcleanaustralia.com.au
                        </a>
                      </h5>
                      <p>Send mail</p>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <span className='icon-time'></span>
                    </div>
                    <div className='text'>
                      <h5>Mon - Sat</h5>
                      <p>8am to 5pm</p>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <span className='icon-phone-call'></span>
                    </div>
                    <div className='text'>
                      <h5>Customer Care</h5>
                      <p>
                        <a href='tel:0466 002 930'>0493 922 822</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <span className='icon-location'></span>
                    </div>
                    <div className='text'>
                      <h5>Lidcombe NSW 2141</h5>
                      <p>Australia</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className='main-menu clearfix'>
          <div className='main-menu__wrapper clearfix'>
            <div className='container'>
              <div className='main-menu__wrapper-inner clearfix'>
                <div className='main-menu__left'>
                  <div className='main-menu__main-menu-box'>
                    <a
                      href='#'
                      className='mobile-nav__toggler'
                    >
                      <i className='fa fa-bars'></i>
                    </a>
                    <ul className='main-menu__list'>
                      <li className=''>
                        <a href='index.html'>Home </a>
                      </li>
                      <li>
                        <a href='about.html'>About Us</a>
                      </li>
                      <li className='dropdown'>
                        <a href='#'>Our Services </a>
                        <ul>
                          <li>
                            <a href='industrialcleaning.html'>
                              Industrial cleaning
                            </a>
                          </li>
                          <li>
                            <a href='hospitalitycleaning.html'>
                              Hospitality cleaning
                            </a>
                          </li>
                          <li>
                            <a href='stratacleaning.html'>Strata cleaning</a>
                          </li>
                          <li>
                            <a href='airbnb.html'>Airbnb cleaning</a>
                          </li>
                          <li>
                            <a href='commercialcleaning.html'>
                              Commercial cleaning
                            </a>
                          </li>
                          <li>
                            <a href='pressurecleaning.html'>
                              Pressure cleaning
                            </a>
                          </li>
                          <li>
                            <a href='carpetcleaning.html'>Carpet cleaning</a>
                          </li>
                          <li>
                            <a href='residentalcleaning.html'>
                              Residential cleaning
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className=''>
                        <a href='gallery.html'>Gallery </a>
                      </li>
                      <li className=''>
                        <a href='compliance.html'>Compliance </a>
                      </li>
                      <li className='current'>
                        <a href='contact-page-2.html'>Book Now </a>
                      </li>
                      <li className=''>
                        <a href='reviews.html'>Reviews </a>
                      </li>
                      <li className=''>
                        <a href='reviews.html'>FAQ </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='main-menu__right'>
                  <div className='main-menu__search-box'>
                    <a
                      href='#'
                      className='main-menu__search search-toggler icon-magnifying-glass'
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* {scrolled ? ( */}
        <div
          className={
            scrolled
              ? "stricky-header stricked-menu main-menu stricky-fixed"
              : "stricky-header stricked-menu main-menu"
          }
        >
          <div className='sticky-header__content'>
            <div className='main-menu__wrapper clearfix'>
              <div className='container'>
                <div className='main-menu__wrapper-inner clearfix'>
                  <div className='main-menu__left'>
                    <div className='main-menu__main-menu-box'>
                      <a
                        href='#'
                        className='mobile-nav__toggler'
                      >
                        <i className='fa fa-bars'></i>
                      </a>
                      <ul className='main-menu__list'>
                        <li>
                          <a href='index.html'>Home </a>
                        </li>
                        <li>
                          <a href='about.html'>About Us</a>
                        </li>
                        <li className='dropdown'>
                          <a href='#'>Our Services </a>
                          <ul>
                            <li>
                              <a href='industrialcleaning.html'>
                                Industrial cleaning
                              </a>
                            </li>
                            <li>
                              <a href='hospitalitycleaning.html'>
                                Hospitality cleaning
                              </a>
                            </li>
                            <li>
                              <a href='stratacleaning.html'>Strata cleaning</a>
                            </li>
                            <li>
                              <a href='airbnb.html'>Airbnb cleaning</a>
                            </li>
                            <li>
                              <a href='commercialcleaning.html'>
                                Commercial cleaning
                              </a>
                            </li>
                            <li>
                              <a href='pressurecleaning.html'>
                                Pressure cleaning
                              </a>
                            </li>
                            <li>
                              <a href='carpetcleaning.html'>Carpet cleaning</a>
                            </li>
                            <li>
                              <a href='residentalcleaning.html'>
                                Residential cleaning
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className=''>
                          <a href='gallery.html'>Gallery </a>
                        </li>
                        <li className=''>
                          <a href='compliance.html'>Compliance </a>
                        </li>
                        <li className='current'>
                          <a href='contact-page-2.html'>Book Now </a>
                        </li>
                        <li className=''>
                          <a href='reviews.html'>Reviews </a>
                        </li>
                        <li className=''>
                          <a href='reviews.html'>FAQ </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main-menu__right'>
                    <div className='main-menu__search-box'>
                      <a
                        href='#'
                        className='main-menu__search search-toggler icon-magnifying-glass'
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;

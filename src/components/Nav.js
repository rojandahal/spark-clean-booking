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
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);
  const [scrolled, isScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      isScrolled(window.scrollY > 220);
    });

    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [scrolled, sidebar]);

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

        {/* NAVIGATION BAR */}

        <nav className='main-menu clearfix'>
          <div className='main-menu__wrapper clearfix'>
            <div className='container'>
              <div className='main-menu__wrapper-inner clearfix'>
                <div className='main-menu__left'>
                  <div className='main-menu__main-menu-box'>
                    <a
                      href='#'
                      className='mobile-nav__toggler'
                      onClick={showSidebar}
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

        {/* MOBILE NAVIGATION */}
        <div
          class={
            sidebar ? "mobile-nav__wrapper expanded" : "mobile-nav__wrapper"
          }
          bis_skin_checked='1'
        >
          <div
            class='mobile-nav__overlay mobile-nav__toggler'
            bis_skin_checked='1'
          ></div>
          {/* <!-- /.mobile-nav__overlay --> */}
          <div
            class='mobile-nav__content'
            bis_skin_checked='1'
          >
            <span class='mobile-nav__close mobile-nav__toggler'>
              <i
                class='fa fa-times'
                onClick={showSidebar}
              ></i>
            </span>

            <div
              class='logo-box'
              bis_skin_checked='1'
            >
              <a
                href='index.html'
                aria-label='logo image'
                bis_skin_checked='1'
              >
                <img
                  src={logo1}
                  width='89'
                  alt='cleaning company nsw'
                />
              </a>
            </div>
            {/* <!-- /.logo-box --> */}
            <div
              class='mobile-nav__container'
              bis_skin_checked='1'
            >
              <ul class='main-menu__list'>
                <li class=''>
                  <a
                    href='index.html'
                    bis_skin_checked='1'
                  >
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a
                    href='about.html'
                    bis_skin_checked='1'
                  >
                    About Us
                  </a>
                </li>
                <li class='dropdown'>
                  <a
                    href='#'
                    className={expanded ? "expanded" : null}
                  >
                    Our Services{" "}
                    <button
                      aria-label='dropdown toggler'
                      className={expanded ? "expanded" : null}
                      onClick={toggleExpand}
                    >
                      <i class='fa fa-angle-down'></i>
                    </button>
                  </a>
                  <ul
                    style={
                      expanded ? { display: "block" } : { display: "none" }
                    }
                  >
                    <li>
                      <a
                        href='industrialcleaning.html'
                        bis_skin_checked='1'
                      >
                        Industrial cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='hospitalitycleaning.html'
                        bis_skin_checked='1'
                      >
                        Hospitality cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='stratacleaning.html'
                        bis_skin_checked='1'
                      >
                        Strata cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='airbnb.html'
                        bis_skin_checked='1'
                      >
                        Airbnb cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='commercialcleaning.html'
                        bis_skin_checked='1'
                      >
                        Commercial cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='pressurecleaning.html'
                        bis_skin_checked='1'
                      >
                        Pressure cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='carpetcleaning.html'
                        bis_skin_checked='1'
                      >
                        Carpet cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href='residentalcleaning.html'
                        bis_skin_checked='1'
                      >
                        Residential cleaning
                      </a>
                    </li>
                  </ul>
                </li>
                <li class=''>
                  <a
                    href='gallery.html'
                    bis_skin_checked='1'
                  >
                    Gallery{" "}
                  </a>
                </li>
                <li class=''>
                  <a
                    href='compliance.html'
                    bis_skin_checked='1'
                  >
                    Compliance{" "}
                  </a>
                </li>
                <li class='current'>
                  <a
                    href='contact-page-2.html'
                    bis_skin_checked='1'
                  >
                    Book Now{" "}
                  </a>
                </li>
                <li class=''>
                  <a
                    href='reviews.html'
                    bis_skin_checked='1'
                  >
                    Reviews{" "}
                  </a>
                </li>
                <li class=''>
                  <a
                    href='reviews.html'
                    bis_skin_checked='1'
                  >
                    FAQ{" "}
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.mobile-nav__container --> */}

            <ul class='mobile-nav__contact list-unstyled'>
              <li>
                <i class='fa fa-envelope'></i>
                <a
                  href='mailto:admin@sparkcleanaustralia.com.au'
                  bis_skin_checked='1'
                >
                  admin@sparkcleanaustralia.com.au
                </a>
              </li>
              <li>
                <i class='fa fa-phone-alt'></i>
                <a
                  href='tel:0493 922 822'
                  bis_skin_checked='1'
                >
                  0493 922 822
                </a>
              </li>
            </ul>
            {/* <!-- /.mobile-nav__contact --> */}
            <div
              class='mobile-nav__top'
              bis_skin_checked='1'
            >
              <div
                class='mobile-nav__social'
                bis_skin_checked='1'
              >
                <a
                  href='#'
                  class='fab fa-twitter'
                ></a>
                <a
                  href='#'
                  class='fab fa-facebook-square'
                ></a>
                <a
                  href='#'
                  class='fab fa-pinterest-p'
                ></a>
                <a
                  href='#'
                  class='fab fa-instagram'
                ></a>
              </div>
              {/* <!-- /.mobile-nav__social --> */}
            </div>
            {/* <!-- /.mobile-nav__top --> */}
          </div>
          {/* <!-- /.mobile-nav__content --> */}
        </div>

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

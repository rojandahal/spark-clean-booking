import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../images/PNGFILE.png";
import phonelogo from "../images/call.svg";
// import styles from './NavbarSecondary.module.css'
import "../css/NavbarFooter.css";
import "../css/reset.css";

const NavbarSecondary = () => {
  return (
    // <!-- header start -->
    <header className="header">
      <div className="header__top-wrap">
        <div className="container">
          <div className="header__top ul_li_between mt-none-15">
            <div className="header__social mt-15">
              <a href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#!">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <ul className="header__info ul_li mt-15">
              <li>
                <i className="far fa-map-marker-alt"></i>13 Brittanica Street
                Officer
              </li>
              <li>
                <i className="far fa-envelope"></i>
                mommybearcleaningservices@gmail.com
              </li>
              <li>
                <div className="header__language">
                  <ul>
                    <li>
                      <a href="#!" className="lang-btn">
                        <img src="assets/img/icon/usd_flag.png" alt="" />{" "}
                        English <i className="far fa-chevron-down"></i>
                      </a>
                      <ul className="lang_sub_list">
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Arabic</a>
                        </li>
                        <li>
                          <a href="#">Bangla</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="header__main-wrap"
        data-uk-sticky="top: 250; animation: uk-animation-slide-top;"
      >
        <div className="container">
          <div className="header__main ul_li_between">
            <div className="header__main-left ul_li flex-1">
              <div className="header__bar hamburger_menu">
                <a href="#!" style={{ color: "#0abab5" }}>
                  <i
                    className="far fa-bars"
                    style={{ color: "#f26a82", fontSize: "1.3rem" }}
                  ></i>{" "}
                  Menu
                </a>
              </div>
              <div className="header__logo ml-50">
                <a href="index">
                  <img src="assets/img/logo/logo-3.png" alt="" />
                </a>
              </div>
            </div>
            <div className="main-menu navbar navbar-expand-lg">
              <nav className="main-menu__nav collapse navbar-collapse">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="#!">Who we are</a>
                    <ul className="submenu clearfix">
                      <li>
                        <a href="https://merryhelpers.com/mommybear/about.html">
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a href="/">Our Team</a>
                      </li>
                      <li>
                        <a href="https://merryhelpers.com/mommybear/ourmission.html">
                          Our Mission
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#!">Services</a>
                    <ul className="submenu clearfix">
                      <li>
                        <a href="https://merryhelpers.com/mommybear/oneofcleaning.html">
                          One-Off cleaning Services
                        </a>
                      </li>
                      <li>
                        <a href="https://merryhelpers.com/mommybear/regularcleaningservices.html">
                          Regular Cleaning Services
                        </a>
                      </li>
                      <li>
                        <a href="https://merryhelpers.com/mommybear/glasscleaning.html">
                          Glass Cleaning Services
                        </a>
                      </li>
                      <li>
                        <a href="https://merryhelpers.com/mommybear/antivirus.html">
                          Anti Viral and Disinfecfectant Services
                        </a>
                      </li>
                      <li>
                        <a href="https://merryhelpers.com/mommybear/endofleasecleaning.html">
                          End Of Lease Cleaning Services
                        </a>
                      </li>
                      <li>
                        <a href="https://merryhelpers.com/mommybear/steam.html">
                          Steam/Carpet Cleaning
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="">
                    <a href="#!">Where we clean</a>
                  </li>
                  <li className="">
                    <a href="https://merryhelpers.com/mommybear/pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#!">Help</a>
                    <ul className="submenu clearfix">
                      <li>
                        <a href="index">Contact Us</a>
                      </li>
                      <li>
                        <a href="index-2">FAQ</a>
                      </li>
                      <li>
                        <a href="index-3">COVID-19 Policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__main-right ul_li">
              <div className="header__cta ul_li">
                <div className="icon">
                  <img src="assets/img/icon/call.svg" alt="" />
                </div>
                <div className="content">
                  <span>Need any help?</span>
                  <a href="#!">0403 582 550</a>
                </div>
              </div>
              <div className="header__btn ml-40">
                <a className="thm-btn thm-btn--transparent br-0" href="#!">
                  <span className="btn-wrap">
                    <span>BOOK NOW</span>
                    <span>BOOK NOW</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarSecondary;

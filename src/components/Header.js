import React from "react";
import pageHeaderBubble from "../images/shapes/page-header-bubble.png";
import pageHeaderBg from "../images/backgrounds/page-header-bg.jpg";
import "../assets/vendors/animate/custom-animate.css";

const Header = () => {
  return (
    <>
      {/* Header */}
      <section class='page-header'>
        <div
          class='page-header-bg'
          style={{ backgroundImage: `url(${pageHeaderBg})` }}
        ></div>
        <div class='page-header-bubble'>
          <img
            src={pageHeaderBubble}
            alt='cleaning company nsw'
          />
        </div>
        <div class='container'>
          <div class='page-header__inner'>
            <ul class='thm-breadcrumb list-unstyled'>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Book Now</li>
            </ul>
            <h2>Book with us</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

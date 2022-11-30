import React from "react";
import payment from "C:/Users/admin/Desktop/my-app/src/assets/images/payments.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer bg-dark text-white">
          <div className="inner-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="f-about">
                    <h3>ABOUT SHOP</h3>
                    <p className="mb20">
                      We possess within us two minds. So far I have written only
                      of the conscious mind.We further know that the
                      subconscious has recorded every event. This is just
                      perfect theme.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="infos">
                    <h3>Information</h3>
                    <ul>
                      <li>
                        <a href="#">Our Stores</a>
                      </li>
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="account">
                    <h3>My Account</h3>
                    <ul>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Specials</a>
                      </li>
                      <li>
                        <a href="#">Track Order</a>
                      </li>
                      <li>
                        <a href="#">Gift Vouchers</a>
                      </li>
                      <li>
                        <a href="#">My Credit Slips</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="gettouch">
                    <h3>Get in Touch with us</h3>
                    <p>
                      <i className="fa fa-home"></i> Cosys Infotech LLP
                    </p>
                    <p>
                      <i className="fa fa-phone"></i> +63 918 4084 694
                    </p>
                    <p className="mb20">
                      <i className="fa fa-envelope"></i> cosys@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="last-div">
              <div className="row">
                <div className="copyright">©2022 Shoe Corner</div>
                <div className="payment">
                  <a>
                    <img src={payment} alt="" />
                  </a>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

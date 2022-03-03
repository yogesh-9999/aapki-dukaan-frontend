import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="lists">
          <ul className="list">
            <li className="first-elem list-item">ABOUT</li>
            <li className="list-item">Contact us</li>
            <li className="list-item">About us</li>
            <li className="list-item">Stories</li>
            <li className="list-item">Press</li>
            <li className="list-item">Wholesale</li>
            <li className="list-item">corporate information</li>
          </ul>
          <ul className="list">
            <li className="first-elem list-item">HELP</li>
            <li className="list-item">payments</li>
            <li className="list-item">Shipping</li>
            <li className="list-item">Cancellation & Returns</li>
            <li className="list-item">FAQ</li>
            <li className="list-item">Report Infringement</li>
          </ul>
          <ul className="list">
            <li className="first-elem list-item">POLICY</li>
            <li className="list-item">Return Policy</li>
            <li className="list-item">Terms of Use</li>
            <li className="list-item">Security</li>
            <li className="list-item">Privacy</li>
            <li className="list-item">Sitemap</li>
            <li className="list-item">EPR Compliance</li>
          </ul>
          <ul className="list">
            <li className="first-elem list-item">SOCIAL</li>
            <li className="list-item">Facebook</li>
            <li className="list-item">Twitter</li>
            <li className="list-item">Youtube</li>
          </ul>
          <div className="vl"></div>
          <div className="list" style={{ width: "20%" }}>
            <span style={{ color: "grey" }} className="first-elem">
              Mail Us:
            </span>
            <p>
              Indian Institute of information technology, Design and
              Manufacturing , Jabalpur,482005, MP, India
            </p>
          </div>
          <div className="list" style={{ width: "20%" }}>
            <span style={{ color: "grey" }} className="first-elem">
              Registered Office Address:
            </span>
            <p>
              Indian Institute of information technology, Design and
              Manufacturing , Jabalpur,482005, MP, India
              <br /> Phone no. <a href="tel: +910123456789">+91 012-345-6789</a>
            </p>
          </div>
        </div>

        <div className="hl"></div>
        <div className="">
          <ul className="final-credits">
            <li>Sell on Aapki-Dukaan</li>
            <li>Advertise</li>
            <li>Gift Cards</li>
            <li>Help Center</li>
            <li>&copy; 2022-2022 Aapki-Dukaan.com</li>
            <li>
              <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;

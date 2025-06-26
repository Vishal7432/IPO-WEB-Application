import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import logo from "../assest/logo/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg,rgb(253, 253, 253),rgb(253, 253, 253))",
        color: "black",
        padding: "40px 0",
        fontSize: "14px",
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={2}>
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>Trading View</li>
              <li>NSE Holidays</li>
              <li>e-Voting CDSL</li>
              <li>e-Voting NSDL</li>
              <li>Market Timings</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>Careers</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Community</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Offerings</h6>
            <ul className="list-unstyled">
              <li>Compare Broker</li>
              <li>Fin Calculators</li>
              <li>IPO</li>
              <li>All Brokers</li>
              <li>Products</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Links</h6>
            <ul className="list-unstyled">
              <li>Shark Investor</li>
              <li>Mutual Funds</li>
              <li>Sitemap</li>
              <li>Indian Indices</li>
              <li>Bug Bounty Program</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Policy</h6>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Disclaimer</li>
              <li>Trust & Security</li>
            </ul>
          </Col>
          <Col md={2}>
            <div className="mb-2">
              <FaFacebookF className="me-3" />
              <FaXTwitter className="me-3" />
              <FaLinkedinIn className="me-3" />
              <FaInstagram />
            </div>
            <div>
              <img src={logo} alt="Bluestock Logo" height="20" />
              <p className="mt-2 mb-0"></p>
              <p className="mb-0">Pune, Maharashtra</p>
              <p className="mb-0">UDYAM-MH-03-0038300</p>
              <p style={{ color: "red" }}>#startupindia</p>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: "#555" }} />
        <Row>
          <Col md={6}>
            <p>help@bluestock.in</p>
          </Col>
          <Col md={6} className="text-md-end text-start">
            <p>&copy; {new Date().getFullYear()} Bluestock.in</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#232f3e", color: "#fff", width: "100%" }}>
      <Container fluid className="pt-4 px-5">
        <Row className="text-center text-md-start">
          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold text-uppercase">Get to Know Us</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">About Us</li>
              <li className="mb-1">Careers</li>
              <li className="mb-1">Press Releases</li>
              <li className="mb-1">Amazon Science</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold text-uppercase">Connect With Us</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">Facebook</li>
              <li className="mb-1">Twitter</li>
              <li className="mb-1">Instagram</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold text-uppercase">Make Money With Us</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">Sell on Naykaa</li>
              <li className="mb-1">Become an Affiliate</li>
              <li className="mb-1">Advertise Your Products</li>
              <li className="mb-1">Self Publish</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold text-uppercase">Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">Email: support@Naykaa.com</li>
              <li className="mb-1">Phone: +91 9876543210</li>
              <li className="mb-1">Location: India</li>
            </ul>
          </Col>
        </Row>

        <hr className="border-light" />

        <div className="text-center py-2">
          <a href="#top" className="text-light small text-decoration-none">
            🔝 Back to Top
          </a>
          <p className="mt-2 small mb-0">
            &copy; {new Date().getFullYear()}Naykaa Clone by Komal ❤️
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

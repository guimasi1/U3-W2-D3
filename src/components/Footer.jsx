import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="py-5 bg-secondary">
        <Container>
          <Row>
            <Col md={6} className="offset-md-3">
              <div className="text-grey">
                <Row className="mb-2">
                  <Col className="fs-5 d-flex justify-content-center justify-content-md-start gap-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-grey"
                      href="https://www.facebook.com/netflixitalia/?brand_redir=475822799216240"
                    >
                      <i className="cursor bi bi-facebook"></i>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-grey"
                      href="https://www.instagram.com/netflix/?hl=en"
                    >
                      <i className="cursor bi bi-instagram"></i>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-grey"
                      href="https://twitter.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                      <i className="cursor bi bi-twitter"></i>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-grey"
                      href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"
                    >
                      <i className="cursor bi bi-youtube"></i>
                    </a>
                  </Col>
                </Row>
                <Row className="row-cols-2 row-cols-lg-4 row-cols-xl-6 fs-6 fs-1sm text-center text-md-start">
                  <Col className="cursor">
                    <p>Audio and Subtitles</p>
                  </Col>
                  <Col className="cursor">
                    <p>Audio description</p>
                  </Col>
                  <Col className="cursor">
                    <p>Help Center</p>
                  </Col>
                  <Col className="cursor">
                    <p>Gift Cards</p>
                  </Col>
                  <Col className="cursor">
                    <p>Media Center</p>
                  </Col>
                  <Col className="cursor">
                    <p>Investor Relations</p>
                  </Col>
                  <Col className="cursor">
                    <p>Jobs</p>
                  </Col>
                  <Col className="cursor">
                    <p>Terms of use</p>
                  </Col>
                  <Col className="cursor">
                    <p>Privacy</p>
                  </Col>
                  <Col className="cursor">
                    <p>Legal Notices</p>
                  </Col>
                  <Col className="cursor">
                    <p>Cookie Preferences</p>
                  </Col>
                  <Col className="cursor">
                    <p>Corporate Information</p>
                  </Col>
                  <Col className="cursor">
                    <p>Contact us</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center text-md-start">
                    <p className="border border-grey d-inline-block p-1 fs-2sm cursor">
                      Service Code
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="fs-1xs text-center text-md-start">
                    <p>
                      © 1997-2019 Netflix, Inc. &#123;i-0d00fcda2fdf9c0de&#125;
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

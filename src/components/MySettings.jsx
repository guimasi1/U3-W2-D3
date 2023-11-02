import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { BadgeHd } from "react-bootstrap-icons";

const MySettings = () => {
  return (
    <main>
      <MyNavbar />
      <Container fluid className=" bg-white mt-0 pt-5">
        <Row>
          <Col lg={9} className="offset-lg-2">
            <Row className="border-bottom border-lightgrey">
              <Col>
                <h3>Account</h3>
              </Col>
            </Row>
            <Row xs={1} lg={2} className="d-flex border-bottom fs-2sm">
              <Col
                md={4}
                className="text-center text-md-start mt-3 mb-3 fs-3sm"
              >
                <p className="text-lightgrey mb-1">MEMBERSHIP & BILLING</p>
                <Button
                  id="cancel-membership"
                  className="fs-2sm py-2 px-4 shadow-sm border-0"
                >
                  Cancel Membership
                </Button>
              </Col>
              <Col md={8} className="mt-3">
                <Row className="row-height">
                  <Col>
                    <p>
                      <strong>student@strive.school</strong>
                    </p>
                  </Col>
                  <Col className="text-end text-link cursor ">
                    <p className="mb-0">Change account email</p>
                  </Col>
                </Row>
                <Row className="row-height">
                  <Col className="text-lightgrey">
                    <p>Password: ********</p>
                  </Col>
                  <Col className="text-end text-link cursor">
                    <p>Change password</p>
                  </Col>
                </Row>
                <Row className="row-height">
                  <Col className="text-lightgrey">
                    <p>Phone: 321 044 1279</p>
                  </Col>
                  <Col className="text-end text-link cursor">
                    <p>Change phone number</p>
                  </Col>
                </Row>
                <Row className="border-top row-height">
                  <Col className="d-flex gap-2">
                    <p className="fw-bold">admin@strive.school</p>
                  </Col>
                  <Col className="text-end text-link cursor">
                    <p>Update Payment info</p>
                  </Col>
                </Row>
                <Row className="border-bottom row-height">
                  <Col className="text-end text-link cursor">
                    <p>Billing details</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-end text-link cursor row-height mt-2 ">
                    <p>Redeem gift card or promo code</p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="text-end text-link cursor">
                    Where to buy gift cards
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              xs={1}
              lg={2}
              className="fs-2sm mt-4 mt-md-2 d-flex align-items-center border-bottom"
            >
              <Col
                md={4}
                className="fs-3sm text-lightgrey text-center text-md-start"
              >
                <p>PLAN DETAILS</p>
              </Col>
              <Col className="flex-grow-1">
                <Row className="row-height">
                  <Col md={8} className="d-flex gap-2 ">
                    <p>
                      <strong>Premium</strong>
                    </p>
                    <BadgeHd className="fs-3 pb-2" />
                  </Col>
                  <Col className="text-end text-link cursor">
                    <p>Change plan</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="fs-2sm mt-4 mt-md-2 d-flex align-items-center border-bottom">
              <Col
                md={4}
                className="fs-3sm align-self-start text-center text-md-start text-lightgrey"
              >
                <p>SETTINGS</p>
              </Col>
              <Col className="flex-grow-1 d-flex flex-wrap gap-3 d-md-block justify-content-between">
                <Row>
                  <Col className="text-link cursor">
                    <p className="mb-2">Parental controls</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-link cursor">
                    <p className="mb-2">Test participation</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-link cursor">
                    <p className="mb-2">Manage download devices</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-link cursor">
                    <p className="mb-2">Activate a device</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-link cursor">
                    <p className="mb-2">Recent: device streaming activity</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-link cursor">
                    <p className="mb-3">Sign out of all devices</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="fs-2sm mt-4 mt-md-2 d-flex align-items-center">
              <Col
                md={4}
                className="fs-3sm  align-self-start text-center text-md-start text-lightgrey"
              >
                <p>MY PROFILE</p>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p>
                      <strong>Strive Student</strong>
                    </p>
                  </Col>
                  <Col className="text-end text-link cursor">
                    <p>
                      Manage profiles
                      <br />
                      Add profiles
                    </p>
                  </Col>
                </Row>
                <Row className="row-height">
                  <Col className="text-link cursor">
                    <p className="mb-2">Language</p>
                  </Col>
                  <Col className="text-link text-end text-md-start cursor">
                    <p>Viewing activity</p>
                  </Col>
                </Row>
                <Row className="text-link">
                  <Col className="cursor">
                    <p className="mb-2">Playback settings</p>
                  </Col>
                  <Col>
                    <p className="mb-2">Ratings</p>
                  </Col>
                </Row>

                <Row className="text-link cursor">
                  <Col>
                    <p className="mb-2">Subtitle appearance</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MySettings;

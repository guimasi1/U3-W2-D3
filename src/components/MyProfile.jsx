import { Container, Form, Row, Col, Image, Dropdown } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import imageProfile from "../assets/avatar.png";

const MyProfile = () => {
  return (
    <Container>
      <MyNavbar />
      <main className="bg-secondary">
        <Form>
          <Container className="text-white px-5 pt-5 py-0 text-center text-md-start">
            <Row>
              <Col lg={6} xl={5} className="offset-lg-4">
                <Row className="border-bottom border-grey">
                  <Col>
                    <h1 className="fw-bold">Edit Profile</h1>
                  </Col>
                </Row>
                <Row className="mt-3 border-bottom border-grey">
                  <Col md={3} className="position-relative">
                    <Image
                      src={imageProfile}
                      alt="avatar"
                      width="100%"
                      className="d-none d-md-block"
                    />
                    <Image
                      src={imageProfile}
                      alt="avatar"
                      width="50%"
                      className="d-md-none"
                    />
                    <div className="border w-25 rounded-circle d-flex justify-content-center align-content-center position-absolute top-0 d-none"></div>
                  </Col>
                  <Col className="flex-grow-1">
                    <Row>
                      <Col xs={12} className="border-bottom border-grey">
                        <p className="bg-grey py-1 d-md-none ps-2">
                          Strive Student
                        </p>
                        <p className="bg-grey py-1 d-none d-md-block w-75 ps-2">
                          Strive Student
                        </p>
                        <p className="mb-1 text-grey text-start">Language:</p>
                        <Dropdown className="mb-3 text-start">
                          <Dropdown.Toggle
                            className="fs-3sm font-monospace btn btn-secondary border dropdown-toggle bg-black py-0 pe-1 ps-2 fs-6 text-start "
                            href="#"
                          >
                            English
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="bg-black ">
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              Arabic
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              Chinese
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              French
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              German
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              Italian
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              Spanish
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              Portuguese
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-white fs-3sm font-monospace "
                              href="#"
                            >
                              Russian
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col
                        xs={12}
                        className="border-bottom border-grey text-start"
                      >
                        <p className="mt-2 text-grey">Maturity Settings:</p>
                        <p className="d-inline-block bg-darkgrey px-2 py-1">
                          ALL MATURITY RATINGS
                        </p>
                        <p className="fs-3sm">
                          Show titles of
                          <strong className="ms-1">
                            all maturity ratings
                          </strong>{" "}
                          for this profile.
                        </p>
                        <p className="cursor d-inline-block py-1 px-4 border mb-4 text-grey border-grey">
                          EDIT
                        </p>
                      </Col>
                      <Col xs={12} className="mb-4 text-start">
                        <p className="mb-1 mt-3">Autoplay controls</p>
                        <div className="form-check fs-3sm">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Autoplay next episode in a series on all devices.
                          </label>
                        </div>
                        <div className="form-check fs-3sm">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Autoplay previews while browsing on all devices.
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="fs-2sm fs-md-6 py-4">
                  <Col md={2} className="me-md-4">
                    <p className="cursor d-inline-block bg-light text-black py-2 px-4">
                      <strong>SAVE</strong>
                    </p>
                  </Col>
                  <Col md={2} className="me-2 me-md-5">
                    <p className="cursor d-inline-block border border-grey text-grey py-2 px-4">
                      CANCEL
                    </p>
                  </Col>
                  <Col>
                    <p className="cursor d-inline-block border border-grey text-grey py-0 py-md-2 px-4">
                      DELETE PROFILE
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Form>
      </main>
    </Container>
  );
};

export default MyProfile;

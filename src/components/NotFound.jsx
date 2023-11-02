import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const NotFound = () => {
  return (
    <div className="h-100 d-flex justify-content-between flex-column">
      <div className="pb-5">
        <MyNavbar />
      </div>
      <Container className="py-5">
        <Row>
          <Col>
            <Alert variant="danger" className="text-center py-5 ">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>ERROR: 404 NOT FOUND.</p>
            </Alert>
          </Col>
        </Row>
      </Container>
      <div className="pt-5 pb-0">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;

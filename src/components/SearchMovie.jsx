import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleMovie from "./SingleMovie";
import Button from "react-bootstrap/Button";
import MyNavbar from "./MyNavbar";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

class SearchMovie extends Component {
  state = {
    arrayOfMovies: [],
    searchValue: "",
    showSpinner: false,
    showAlert: false,
  };

  getMovies = () => {
    fetch(
      `https://www.omdbapi.com/?apikey=ec74177a&s=${this.state.searchValue.replace(
        /\s+/g,
        "+"
      )}`
    )
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          this.setState({ showSpinner: false });
          return res.json();
        } else {
          console.log("not ok ");
          this.setState({ showAlert: true });
          console.log(
            `https://www.omdbapi.com/?apikey=ec74177a&s=${this.state.searchValue.replace(
              / /g,
              "+"
            )}`
          );
          throw new Error("not ok");
        }
      })
      .then((data) => {
        this.setState({ arrayOfMovies: data.Search });
      })
      .catch((err) => {
        console.log(err, "Something went wrong");
      });
  };

  render() {
    console.log(this.state.arrayOfMovies, "array movies");
    return (
      <main className="bg-secondary vh-100 ">
        <Container fluid className="bg-secondary">
          <MyNavbar />
          <Row>
            <Col lg={{ span: 6, offset: 3 }} className="text-white ">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.setState({ showSpinner: true });
                  this.getMovies();
                }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="text-center">
                    <Form.Label>Search your movie</Form.Label>
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Search for your favourite movie"
                      value={this.state.searchValue}
                      onChange={(e) => {
                        this.setState({
                          searchValue: e.target.value,
                        });
                        console.log(this.state.searchValue);
                      }}
                    />
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ showSpinner: true });
                        this.getMovies();
                      }}
                    >
                      Search
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={6}
            className="text-center text-md-start text-white"
          >
            {this.state.showSpinner && (
              <Col xs={12} className="d-flex justify-content-center ">
                <Spinner className="" />
              </Col>
            )}
            {this.state.showAlert && (
              <Col xs={12}>
                <Alert variant="danger" className="w-100 text-center">
                  Warning: something went wrong.
                </Alert>
              </Col>
            )}
            {this.state.arrayOfMovies.map((movie) => (
              <SingleMovie key={movie.imdbID} movie={movie} />
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}
export default SearchMovie;

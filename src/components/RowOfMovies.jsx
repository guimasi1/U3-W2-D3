import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleMovie from "./SingleMovie";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class RowOfMovies extends Component {
  state = {
    arrayOfMovies: [],
    showSpinner: true,
    showAlert: false,
  };

  getMovies = () => {
    fetch(this.props.urlToUSe)
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          this.setState({ showSpinner: false });
          return res.json();
        } else {
          console.log("not ok ");
          this.setState({ showAlert: true });
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

  componentDidMount = () => {
    this.getMovies();
  };

  render() {
    const arrayOfOnlySixMovies = this.state.arrayOfMovies.slice(0, 6);
    return (
      <Row xs={1} sm={2} md={3} lg={6} className="text-center text-md-start ">
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
        {/* Qua mettere un map per stampare diversi singlemovie */}
        {arrayOfOnlySixMovies.map((movie) => (
          <SingleMovie key={movie.imdbID} movie={movie} />
        ))}
      </Row>
    );
  }
}

export default RowOfMovies;

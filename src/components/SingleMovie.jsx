import { Component } from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
  render() {
    return (
      <Col className="mb-3 ">
        <Link to={"/MovieDetails/" + this.props.movie.imdbID}>
          <img
            className="single-movie cursor"
            src={this.props.movie.Poster}
            alt="tv-show"
            style={{ height: "100%", width: "100%" }}
          />
        </Link>
      </Col>
    );
  }
}

export default SingleMovie;

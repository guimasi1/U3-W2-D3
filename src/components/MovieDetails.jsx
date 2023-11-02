import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const MovieDetails = () => {
  const params = useParams();
  const urlToUSe =
    `https://www.omdbapi.com/?apikey=ec74177a&i=` + params.movieId;
  const [singleMovie, setSingleMovie] = useState([]);
  const [commentContent, setCommentContent] = useState({
    comment: "",
    rate: "",
    elementId: params.movieId,
  });
  const [commentsToShow, setCommentsToShow] = useState([]);
  const [ratingValue, setRatingValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const authorizationKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

  const getMovies = () => {
    fetch(urlToUSe)
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          return res.json();
        } else {
          console.log("not ok ");
          console.log(urlToUSe, "urltouse");

          throw new Error("not ok");
        }
      })
      .then((data) => {
        // this.setState({ arrayOfMovies: data.Search });
        setSingleMovie(data);
      })
      .catch((err) => {
        console.log(err, "Something went wrong");
      });
  };

  const sendReview = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(commentContent),
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Your comment has been sent.");
          getMovies();
          getComments();
          setCommentValue("");
          setRatingValue("");
        } else {
          throw new Error("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId,
      {
        headers: {
          Authorization: authorizationKey,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Everything is ok");

          return res.json();
        } else {
          console.log("Something went wrong");
          throw new Error("Error");
        }
      })
      .then((data) => {
        console.log(data);
        setCommentsToShow(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="justify-content-center mt-4 ">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Card>
              <Card.Img variant="top" src={singleMovie.Poster} />
              <Card.Body>
                <Card.Title>{singleMovie.Title}</Card.Title>
                <Card.Text>{singleMovie.Plot}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Genre: {singleMovie.Genre}</ListGroup.Item>
                  <ListGroup.Item>
                    Country: {singleMovie.Country}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Director: {singleMovie.Director}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Duration: {singleMovie.Runtime}
                  </ListGroup.Item>
                  <ListGroup.Item>Year: {singleMovie.Year}</ListGroup.Item>
                  <ListGroup.Item>Actors: {singleMovie.Actors}</ListGroup.Item>
                  <ListGroup.Item>
                    IMDb Rating: {singleMovie.imdbRating}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={sendReview}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white">Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write your comment here"
                  value={commentValue}
                  onChange={(e) => {
                    setCommentContent({
                      ...commentContent,
                      comment: e.target.value,
                    });
                    setCommentValue(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white">Rate</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Rate from 0 to 5"
                  min={0}
                  max={5}
                  value={ratingValue}
                  onChange={(e) => {
                    setCommentContent({
                      ...commentContent,
                      rate: e.target.value,
                    });
                    setRatingValue(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="text-center mt-4">
                <Button variant="success" className="w-50" onClick={sendReview}>
                  Confirm
                </Button>
              </div>
            </Form>
            <div className="mt-5">
              <h4 className="text-white mb-3 text-center ">Comments</h4>
              <ListGroup>
                {commentsToShow.map((comment) => (
                  <SingleComment
                    key={comment._id}
                    comment={comment}
                    getComments={getComments}
                  />
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default MovieDetails;

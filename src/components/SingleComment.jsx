import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, getComments }) => {
  const deleteComment = () => {
    const authorizationKey =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
      {
        method: "DELETE",
        headers: {
          Authorization: authorizationKey,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Comment deleted.");
          getComments();
        } else {
          console.log("Something went wrong");
          throw new Error("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between mb-1 bg-secondary-subtle align-items-center">
      <div> {comment.comment} </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="me-2">Rating : {comment.rate}</div>
        <Button variant="danger" onClick={deleteComment} className="btn-sm">
          Remove
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;

import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import baseURL from "../API/baseUrl";

const Post = ({ id, title, text }) => {
  const DeletePost = (id) => {
    baseURL.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    alert(`You Deleted post ${id}`);
  };

  return (
    <Col xs="6" sm="6" md="4" lg="4">
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>
            {id}-{title}
          </Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={`/edit/${id}`}>
            <Button variant="primary mx-2">Edit</Button>
          </Link>
          <Button variant="danger" onClick={() => DeletePost(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;

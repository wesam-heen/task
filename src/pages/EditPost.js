import { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/slices/postSlices";
import baseURL from "../API/baseUrl";
const EditPost = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const dispatch = useDispatch();
  const postForEdit = useSelector((state) => state.posts.post);

  useEffect(() => {
    dispatch(fetchPost(params.id));
    setPost(postForEdit);
  }, []);

  const updatePost = (data) => {
    baseURL
      .put(`/posts/${params.id}`, data)
      .then((response) =>
        alert(
          `Update your post succuss the status code is ${response.status} and id for this post (${response.data.id})`
        )
      )
      .catch((err) => console.log(err));
  };
  const [data, setData] = useState({ title: "", body: "" });

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>{post && "previous title : " + post.title}</p>
          <p>{post && "previous body : " + post.body}</p>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter New Title"
            className="form-control"
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <label>body text</label>
          <input
            type="text"
            placeholder="Enter New body text"
            className="form-control"
            onChange={(e) => {
              setData({ ...data, body: e.target.value });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => updatePost(data)}
        >
          Edit Post
        </Button>
      </Form>
    </Container>
  );
};

export default EditPost;

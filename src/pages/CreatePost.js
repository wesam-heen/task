import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import baseURL from "../API/baseUrl";

const CreatePost = () => {
  const createNewPost = (data) => {
    baseURL
      .post("/posts", data)
      .then((response) => setStatus(response))
      .catch((err) => console.log(err));
  };
  const [data, setData] = useState({ title: "", body: "", userId: "" });
  const [status, setStatus] = useState();

  return (
    <>
      <Container>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Title"
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
              placeholder="Enter body text"
              className="form-control"
              onChange={(e) => {
                setData({ ...data, body: e.target.value });
              }}
            />
            <label>user Id</label>
            <input
              type="number"
              placeholder="Enter user id"
              className="form-control"
              onChange={(e) => {
                setData({ ...data, userId: e.target.value });
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => createNewPost(data)}
          >
            Create Post
          </Button>
        </Form>
        {status && (
          <p>
            id for new post :{status.data.id} and status code is :
            {status.status}
          </p>
        )}
      </Container>
    </>
  );
};

export default CreatePost;

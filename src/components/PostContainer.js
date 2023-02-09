import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/slices/postSlices";
import Pagination from "./Pagination";
import Post from "./Post";

const PostContainer = () => {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPosts(selectedPage));
  }, [selectedPage]);

  const posts = useSelector((state) => state.posts.posts);
  const handlePageClick = (e) => {
    setSelectedPage(e.selected + 1);
  };
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-start">
        {posts &&
          posts.map((post) => {
            return (
              <Post
                id={post.id}
                title={post.title}
                text={post.body}
                key={post.id}
              />
            );
          })}
      </Row>
      <Pagination handlePageClick={handlePageClick} />
    </Container>
  );
};

export default PostContainer;

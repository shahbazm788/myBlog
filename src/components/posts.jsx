import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Posts = (postId) => {
  let [posts, setposts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("posts.json")
      .then((response) => response.json())
      .then((data) => setposts(data));
  }, []);

  let handleClick = (item) => {
    let path = "/post";
    navigate(path, { state: { post: item } });
  };

  return (
    <div>
      <h1 className="text-center text-primary my-3 text-decoration-underline">
        Leteast Blog
      </h1>
      <div className="posts_div">
        <Row>
          <Container>
            <Row>
              {posts.map((item, i) => {
                if (i < 15) {
                  return (
                    <Col md={4}>
                      <Card
                        className="my-3"
                        onClick={() => handleClick(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <Card.Img
                          variant="top"
                          src={`img/LandWater${i + 1}.jpg`}
                          className="card_img"
                        />
                        <Card.Header
                          className="text-light bg-primary"
                          style={{ textTransform: "capitalize" }}
                        >
                          {item.title.slice(0, 25) + "..."}
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>{item.body.slice(0, 80)}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }
              })}
            </Row>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default Posts;

import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const AllPosts = () => {
  let [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("posts.json")
      .then((response) => response.json())
      .then((data) => setposts(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary my-3 text-decoration-underline">
        Leteast Blogs{" "}
      </h1>
      <div className="posts_div">
        <Row>
          <Container>
            <Row>
              {posts.map((item, i) => {
                return (
                  <Col md={4}>
                    <Card className="my-3">
                      <Card.Img
                        variant="top"
                        src={`img/LandWater${i}.jpg`}
                        className="card_img"
                      />
                      <Card.Header className="text-light bg-primary">
                        {item.title.slice(0, 25) + "..."}
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>{item.body.slice(0, 100)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default AllPosts;

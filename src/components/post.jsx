import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";
const Post = () => {
  let data = useLocation();

  return (
    <>
      <Container fluid className="post_page">
        <Row>
          <Col md={2}> </Col>
          <Col md={8} className="post_col">
            <div className="my-5"></div>
            <h1>{data.state.post.title}</h1>
            <div className="time_div">
              <Row>
                <Col sm={6}>
                  <img
                    src="img/profile1.svg"
                    alt="profile pic"
                    className="profile_pic"
                  />{" "}
                  <span>Shahbaz Youns</span>
                </Col>
                <Col sm={6}>
                  <p className="date_p">16/8/2023</p>
                </Col>
              </Row>
            </div>
            <div className="img_div">
              <img src={`img/LandWater${data.state.post.id}.jpg`} alt="" />
            </div>
            <div className="post_body">{data.state.post.body}</div>
            <div className="comments my-3">
              <AddComment postId={data.state.post.id} />

              <div className="comment_box my-3">
                <ShowComment postId={data.state.post.id} />
              </div>
            </div>
          </Col>
          <Col md={2}> </Col>
        </Row>
      </Container>
    </>
  );
};

export default Post;

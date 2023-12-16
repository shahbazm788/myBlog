import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillReplyAllFill, FaUserCircle } from "react-icons/bs";
import Reply from "./Reply";
const ShowComment = (postId) => {
  let selectComment = useSelector((state) => {
    return state.Comment;
  });

  return (
    <>
      {selectComment
        .filter((item, i) => {
          return item.postId === postId.postId;
        })
        .map((item, i) => {
          return (
            <div className="comment">
              <Row>
                <Col sm={2}>
                  <img
                    src="img/profile2.jpg"
                    alt=""
                    className="comment_profile mt-2"
                  />
                </Col>
                <Col sm={10}>
                  <div className="user_name">
                    <h6>{item.postedBy}</h6>
                    <p>12/12/2023</p>
                  </div>
                  <p className="mb-0 comment_p ">{item.comentText}</p>
                  <button className="reply_button text-primary">
                    <BsFillReplyAllFill className="text-dark" /> Reply
                  </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Reply />
                </Col>
              </Row>
            </div>
          );
        })}
    </>
  );
};
export default ShowComment;

import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import Comment from "./../reduxStore/slices/commetSlice";
import { addComment } from "./../reduxStore/slices/commetSlice";
const AddComment = (postId) => {
  let [coment, setComent] = useState("");
  //let [sendcomment, setsendComment] = useState({});
  let dispatch = useDispatch();
  let handleChange = (e) => {
    setComent(() => {
      return e.target.value;
    });
  };
  let handlClick = () => {
    let date = new Date();
    dispatch(
      addComment({
        postId: postId.postId,
        comentText: coment,
        time: date,
        postedBy: "NewUser"
      })
    );
    setComent(() => {
      return "";
    });
  };

  return (
    <>
      <Form>
        <Form.Control
          as="textarea"
          placeholder="Type Comment"
          rows={4}
          value={coment}
          onChange={handleChange}
        />
        <Button w-100 variant="dark" className="my-2" onClick={handlClick}>
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddComment;

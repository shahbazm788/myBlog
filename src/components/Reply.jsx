import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Reply = () => {
  let [ReplyState, setReplyState] = useState("none");

  let [replyVal, setReplyVal] = useState("");

  let handleChange = () => {};
  let handlClick = () => {
    setReplyState(() => {
      return "block";
    });
  };
  return (
    <>
      <Form style={{ width: "80%", marginLeft: "19%", display: ReplyState }}>
        <Form.Control
          as="textarea"
          placeholder="Type Reply"
          rows={4}
          value=""
          onChange={handleChange}
        />
        <Button w-100 variant="dark" className="my-2" onClick={handlClick}>
          Add Reply
        </Button>
      </Form>
    </>
  );
};

// import { Form, Button } from "react-bootstrap"
// import { useState } from "react"
// const Reply = () => {
//   let replyVal = useState("");

//   let handleChange = () => {};
//   let handlClick = () => {};
//   let [ReplyState, setReplyState] = useState("none");
//   return (
//     <>
//       <Form style={{ width: "80%", marginLeft: "19%" disly:ReplyState}}>
//         <Form.Control
//           as="textarea"
//           placeholder="Type Reply"
//           rows={4}
//           value=""
//           onChange={handleChange}
//         />
//         <Button w-100 variant="dark" className="my-2" onClick={handlClick}>
//           Add Reply
//         </Button>
//       </Form>
//     </>
//   );
// };

export default Reply;

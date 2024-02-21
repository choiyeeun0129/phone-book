import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  //추가누르면 name,phoneNumber를 redux store로 보내야함 그때쓰는 훅 useDispatch()사용
  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name: name, phoneNumber: phoneNumber },
    });
  };

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Tel</Form.Label>
        <Form.Control
          type="number"
          placeholder="전화번호를 입력해주세요."
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        add
      </Button>
    </Form>
  );
};

export default ContactForm;

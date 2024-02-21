import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [textName, setTextName] = useState(""); //필터링 결과 저장

  const SearchName = (event) => {
    event.preventDefault();
    dispatch({
      type: "SEARCHNAME",
      payload: { textName },
    });
  };
  const textChange = (event) => {
    console.log("쳐보든지:", event.target.value);
    setTextName(event.target.value);
  };
  return (
    <Form onSubmit={SearchName} className="SearchBox">
      <Row>
        <Col lg={8}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            value={textName}
            onChange={textChange}
          />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
